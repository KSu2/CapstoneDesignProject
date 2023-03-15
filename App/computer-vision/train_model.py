#! /usr/bin/python

# import the necessary packages
import firebase_admin
from firebase_admin import credentials, storage
from imutils import paths
import face_recognition
#import argparse
import pickle
import cv2
import numpy as np
import os

def train(account):
	cred = credentials.Certificate("capstonedesignproject-8748c-8519b6be4fe0.json")
	# need to decide if one bucket for each user or if each user will just have a folder in the same bucket
	firebase_admin.initialize_app(
    	cred, {'storageBucket': 'capstonedesignproject-8748c.appspot.com'})
	
	bucket = storage.bucket()
	# initialize the list of known encodings and known names
	knownEncodings = []
	knownNames = []

	# loop over the image paths
	for resource in bucket.list_blobs(prefix=account):
		# extract the person name from the image path
		name = resource.name
		arr = np.frombuffer(resource.download_as_string(), np.uint8)  # array of bytes
		img = cv2.imdecode(arr, cv2.COLOR_BGR2BGR555)  # actual images
		# load the input image and convert it from RGB (OpenCV ordering)
		# to dlib ordering (RGB)
		rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

		# detect the (x, y)-coordinates of the bounding boxes
		# corresponding to each face in the input image
		boxes = face_recognition.face_locations(rgb, model="hog")

		# compute the facial embedding for the face
		encodings = face_recognition.face_encodings(rgb, boxes)

		# loop over the encodings
		for encoding in encodings:
			# add each encoding + name to our set of known names and
			# encodings
			knownEncodings.append(encoding)
			knownNames.append(name)

	# dump the facial encodings + names to disk
	print("[INFO] serializing encodings...")
	data = {"encodings": knownEncodings, "names": knownNames}
	f = open("encodings.pickle", "wb")
	f.write(pickle.dumps(data))
	f.close()
