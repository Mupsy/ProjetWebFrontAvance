import { io } from "socket.io-client";
import { getApiUrl } from "./api";

let socket = null;

export const getSocket = () => {
  if (!socket) {
    socket = io(getApiUrl(), {
      autoConnect: false,
      transports: ["websocket", "polling"],
    });
  }
  return socket;
};

export const connectSocket = () => {
  const s = getSocket();
  if (!s.connected) {
    s.removeAllListeners();
    s.connect();
  }
  return s;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.removeAllListeners();
    socket.disconnect();
    socket = null;
  }
};

export const isConnected = () => {
  return socket && socket.connected;
};
