import { Button, Input } from '@material-ui/core'
import React, { useRef, useState } from 'react'
import styled from "styled-components";
import { db } from '../firebase/FirebaseConfig';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectRoomID } from '../features/AppSlice';


const ChatInputContainer = styled.div`
    border-radius: 20px;

    >form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    >form >input{
        position: fixed;
        bottom: 30px;
        width: 70%;
        border: 1px solid lightgray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    >form >Button{
        display: none !important;
    }
`;

const ChatInput = ({channelID}) => {
    const [message, setMessage] = useState("");
    const sendMessage = (e) =>{
            e.preventDefault();
            if(!channelID)
            {
                return false;
            }
            db.collection("rooms").doc(channelID).collection("messages").add({
                message: message,
                timeStamp : firebase.firestore.FieldValue.serverTimestamp(),
                user: "Hashaam Khurshid",
                userImage: "https://media-exp1.licdn.com/dms/image/D5603AQHq0Fdmecj05w/profile-displayphoto-shrink_200_200/0/1644952090921?e=1657152000&v=beta&t=btkDE0HGq5OvnVHmpJxpHiR3O0SygdodswFy5lx36F0"
            })  
            setMessage("")

    }

  

  return (
      <ChatInputContainer>  
          <form>
              <input placeholder="Message #ROOM" onChange={(e)=> setMessage(e.target.value)}  value={message}/>
              <Button hidden type='submit' onClick={sendMessage}>SEND</Button>
          </form>
      </ChatInputContainer>
  )
}

export default ChatInput