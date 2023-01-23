import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { db, auth, storage, storageRef } from '../firebase';
import { launchImageLibrary } from 'react-native-image-picker';
import { uploadBytes } from 'firebase/storage';

console.log(auth.currentUser);

const PictureScreen = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [title, setTitle] = useState('');

  const imagePicker = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    }).then((res) => {
      if (!res.didCancel) {
        setImage(res.assets[0].uri);
        console.log(res.assets[0].uri);
        handleUpload();
      }
    });
  };

  const handleUpload = async () => {
    const res = await fetch(image);
    const blob = await res.blob();

    const ref = storageRef(storage, 'images/' + title);

    uploadBytes(ref, blob).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    }); // target directory name
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={imagePicker}>
        <Text>Upload Image</Text>
      </TouchableOpacity>
      <TextInput
        placeholder='Image Title'
        onChangeText={(title) => setTitle(title)}
      />
    </SafeAreaView>
  );
};

export default PictureScreen;
