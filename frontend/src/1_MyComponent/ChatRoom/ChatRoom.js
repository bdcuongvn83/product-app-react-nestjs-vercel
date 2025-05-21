import { useState, useEffect } from 'react';
import createConnection  from './Chat';

export default function ChatRoom() {
  useEffect(() => {
   
    // const connection = createConnection();
    // connection.connect();
    // return () => connection.disconnect();
    function handleScroll(e) {
      console.log("hi");
      console.log(window.scrollX, window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <h1>Welcome to the chat!</h1>;
}
