import { InfoOutlined, StarOutline } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectRoomID } from '../features/AppSlice';
import ChatInput from './ChatInput';

const ChatContainer = styled.div`
        flex: 0.7;
        flex-grow: 1;
        overflow: scroll;
        margin-top: 80px;
        margin-left: 10px;
        margin-right: 10px;
    `;

const ChatHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    > h4{
        text-transform: lowercase;
        display: flex;
        margin-right: 10px;
    }
    > h4 > .MuiSvgIcon-root{
        font-size: 18px;
    }
`;
const HeaderRight = styled.div`
   
   >p{
    display: flex;
    align-items: center;
   }

    >p > .MuiSvgIcon-root{
        font-size: 18px;
        margin-right: 10px;
        cursor: pointer;
    }
`;


// Chat_Section
const ChatMessage = styled.div``;



const Chats = () => {

    const roomID = useSelector(selectRoomID);
    
    return (
   <ChatContainer>
      <>
      <ChatHeader>
          {/* Chat Header */}
           <HeaderLeft>
               <h4> <strong>#Room-Chat</strong> </h4>
               <StarOutline/>
           </HeaderLeft>

           <HeaderRight>
                <p>
                    <InfoOutlined/>
                    Details
                </p>
           </HeaderRight>
       </ChatHeader>

       {/* Chat Section */}
        <ChatMessage>
        </ChatMessage>
        <ChatInput channelID={roomID} />

      </>
   </ChatContainer>
  )
}

export default Chats