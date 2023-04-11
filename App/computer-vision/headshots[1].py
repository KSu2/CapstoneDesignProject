import cv2
import pickle
from picamera2 import Picamera2, Preview
import time
import imutils
import face_recognition
from time import sleep
from reed_switch import get_status

import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

GPIO.setup(18, GPIO.OUT)

name = 'Z' #replace with your name

#Initialize 'currentname' to trigger only when a new person is identified.
currentname = "unknown"
#Determine faces from encodings.pickle file model created from train_model.py
encodingsP = "encodings.pickle"

# load the known faces and embeddings along with OpenCV's Haar
# cascade for face detection
print("[INFO] loading encodings + face detector...")
data = pickle.loads(open(encodingsP, "rb").read())

cv2.startWindowThread()

picam2 = Picamera2()
camera_config = picam2.create_preview_configuration()
picam2.configure(camera_config)

# UNCOMMENT TO ALLOW PREVIEW BUT I THINK THIS CAUSES SEGMENTATION FAULT
# picam2.start_preview(Preview.QTGL)

picam2.start()

while True:
    time.sleep(0.001)
    frame = picam2.capture_array()
    frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    
    # print(frame.shape)
    
    small_frame = cv2.resize(frame, (0,0), fx=0.25, fy=0.25)
    
    
    # Detect the face boxes
    boxes = face_recognition.face_locations(frame)
	# compute the facial embeddings for each face bounding box
    encodings = face_recognition.face_encodings(frame, boxes)
    names = []
    
    # loop over the facial embeddings
    for encoding in encodings:
        # attempt to match each face in the input image to our known
        # encodings
        matches = face_recognition.compare_faces(data["encodings"], encoding, tolerance=0.55)
        name = "Unknown" #if face is not recognized, then print Unknown

        # check to see if we have found a match
        if True in matches:
            GPIO.output(18, 1)
            sleep(10)
            is_open = 1
            while(is_open):
                is_open = get_status()
            GPIO.output(18,0)
			# find the indexes of all matched faces then initialize a
			# dictionary to count the total number of times each face
			# was matched
            matchedIdxs = [i for (i, b) in enumerate(matches) if b]
            counts = {}

			# loop over the matched indexes and maintain a count for
			# each recognized face face
            for i in matchedIdxs:
                name = data["names"][i]
                counts[name] = counts.get(name, 0) + 1

			# determine the recognized face with the largest number
			# of votes (note: in the event of an unlikely tie Python
			# will select first entry in the dictionary)
            name = max(counts, key=counts.get)

			#If someone in your dataset is identified, print their name on the screen
            if currentname != name:
                currentname = name
                print(currentname)
        

		# update the list of names
        names.append(name)

    
    # print("boxes: ", boxes)
    print("names: ", names)
    
    
    # loop over the recognized faces
    for ((top, right, bottom, left), name) in zip(boxes, names):

        # draw the predicted face name on the image - color is in BGR
        cv2.rectangle(frame, (left, top), (right, bottom), (0, 255, 225), 2)
        y = top - 15 if top - 15 > 15 else top + 15
        cv2.putText(frame, name, (left, y), cv2.FONT_HERSHEY_SIMPLEX,.8, (0, 255, 255), 2)
    
    cv2.imshow("camera", frame)
    # cv2.waitKey(1)
cv2.destroyAllWindows()

