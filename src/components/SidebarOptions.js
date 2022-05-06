import React from 'react'
import styled from "styled-components"
import { db } from '../firebase/FirebaseConfig';
import { enterRoom, selectRoomID } from '../features/AppSlice';
import { useDispatch, useSelector } from 'react-redux';

const SidebarOptionContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;
    :hover{
        opacity: 0.9;
        background-color: #340c36;
    }
    > h3{
        font-size: 14px;
        overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
   `;

// Trendings   
const SidebarOptionCancle = styled.div`
    margin-bottom: 10px;
    justify-content: center;
    >h3{
    font-size: 14px;
    padding: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
    > h3 > span{
        padding: 15px;
    }`;



const SidebarOptions = ({ Icon, title, addChannel,id }) => {
    const dispatch  = useDispatch();
    const addNewChannel = () => {
        const channelName = prompt("Please enter channel name");
        if (channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
    }
    
    const selectChannel = () => { 
        if(id){
            dispatch(enterRoom({
                roomID : id
            }))
        }
        console.log(id);
    }
    return (
        <SidebarOptionContainer onClick={addChannel ? addNewChannel : selectChannel}>
            {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
            {Icon ? (<h3>{title}</h3>) : (<SidebarOptionCancle>
                <h3><span>#</span>{title}</h3>
            </SidebarOptionCancle>)}
        </SidebarOptionContainer>
    )
}

export default SidebarOptions