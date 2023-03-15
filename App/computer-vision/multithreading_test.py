import threading
import cv2
import pickle
# from picamera2 import Picamera2, Preview
import time
import face_recognition
import sys

# Initialize 'currentname' to trigger only when a new person is identified.
currentname = "unknown"
# Determine faces from encodings.pickle file model created from train_model.py
encodingsP = "encodings.pickle"

# load the known faces and embeddings along with OpenCV's Haar
# cascade for face detection
print("[INFO] loading encodings + face detector...")
with open(encodingsP, "rb") as f:
    data = pickle.load(f)

cv2.startWindowThread()

# picam2 = Picamera2()
# camera_config = picam2.create_preview_configuration()
# picam2.configure(camera_config)

# UNCOMMENT TO ALLOW PREVIEW BUT I THINK THIS CAUSES SEGMENTATION FAULT
# picam2.start_preview(Preview.QTGL)

# picam2.start()

video_capture = cv2.VideoCapture(0)


def capture_frames():
    while True:
        # if (KeyboardInterrupt):
        #    sys.exit()
        # frame = picam2.capture_array()
        ret, frame = video_capture.read()
        # frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        small_frame = cv2.resize(frame, (0, 0), fx=0.25, fy=0.25)
        process_frame(small_frame)


def process_frame(frame):
    global currentname
    boxes = face_recognition.face_locations(frame)
    encodings = face_recognition.face_encodings(frame, boxes)
    names = []
    for encoding in encodings:
        matches = face_recognition.compare_faces(
            data["encodings"], encoding, tolerance=0.55)
        name = "Unknown"
        if True in matches:
            matchedIdxs = [i for (i, b) in enumerate(matches) if b]
            counts = {}
            for i in matchedIdxs:
                name = data["names"][i]
                counts[name] = counts.get(name, 0) + 1
            name = max(counts, key=counts.get)
            if currentname != name:
                currentname = name
                print(currentname)
        names.append(name)

    for ((top, right, bottom, left), name) in zip(boxes, names):
        cv2.rectangle(frame, (left, top), (right, bottom), (0, 255, 225), 2)
        y = top - 15 if top - 15 > 15 else top + 15
        cv2.putText(frame, name, (left, y),
                    cv2.FONT_HERSHEY_SIMPLEX, .8, (0, 255, 255), 2)

    cv2.imshow("camera", frame)
    cv2.waitKey(1)


cv2.destroyAllWindows()


def perform_face_recognition():
    print("hello world")


t1 = threading.Thread(target=capture_frames)
e = threading.Event()
t1.start()
# need to immplement perofrm_face_recognition
# t2 = threading.Thread(target=perform_face_recognition)

# add way for code to gracefully exit