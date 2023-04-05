import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import { useContext } from 'react';
import { SocketContext } from '../context/socket';

const StatusScreen = () => {
  const socket = useContext(SocketContext);
  let status;
  socket.emit('status');

  //custom listener for status event
  socket.on('status', (data) => {
    console.log(data);
    status = data;
  });

  return (
    <View>
      <Image
        style={{ width: '20rem', height: '20rem' }}
        source={require(status
          ? '../assets/open-door.png'
          : '../assets/closed-door.png')}
      />
      <Text>{status ? 'Open' : 'Not Open'}</Text>
    </View>
  );
};
export default StatusScreen;
