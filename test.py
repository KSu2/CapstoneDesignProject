import face_recognition
import cv2
img =cv2.imread("e3.webp")
rl1=cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
en= face_recognition.face_encodings(rl1)[0]
img2 =cv2.imread("jb.webp")
rg=cv2.cvtColor(img2,cv2.COLOR_BGR2RGB)
EN2= face_recognition.face_encodings(rg)[0]
result=face_recognition.compare_faces([en],EN2)
print("Result: ", result)
cv2.imshow("IMG",img)
cv2.imshow("IMG 2",img2)

