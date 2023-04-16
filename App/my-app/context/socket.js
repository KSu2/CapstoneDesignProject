import React, { createContext } from 'react';
import { io, Socket } from 'socket.io-client';

const socket = io('http://192.168.7.167:5000'),
  SocketContext = createContext(socket);

socket.on('connect', () => {
  socket.send('connected');
});

const SocketProvider = ({ children }) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
export { SocketContext, SocketProvider };
