# https://www.analyticsvidhya.com/blog/2022/07/introduction-to-google-firebase-cloud-storage-using-python/
# Link to tutorial

# connect to react-native app via Bluetooth
# to get the user information which will be needed to retriev

import firebase_admin
from firebase_admin import credentials, storage
import numpy as np
import cv2

cred = credentials.Certificate("capstonedesignproject-8748c-8519b6be4fe0.json")
# need to decide if one bucket for each user or if each user will just have a folder in the same bucket
firebase_admin.initialize_app(
    cred, {'storageBucket': 'capstonedesignproject-8748c.appspot.com'})

bucket = storage.bucket()
# replace prefix with the username of the user loggged into the mobile app paired with this device
for resource in bucket.list_blobs(prefix='user.kevinsu@gmail.com'):
    print(resource.name)


blob = bucket.get_blob("user.kevinsu@gmail.com/pepe")
print(blob)
arr = np.frombuffer(blob.download_as_string(), np.uint8)  # array of bytes
img = cv2.imdecode(arr, cv2.COLOR_BGR2BGR555)  # actual images
cv2.imshow('image', img)
cv2.waitKey(0)

# blob -> array -> image
# need to figure out a way to iterate over all images in storage bucket
# how to run python
