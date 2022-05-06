import { AddOutlined, AppsOutlined, BookmarkBorderOutlined, CreateOutlined, CreateRounded, DraftsOutlined, ExpandLessOutlined, ExpandMoreOutlined, FiberManualRecord, FileCopyOutlined, InboxOutlined, InsertCommentSharp, PeopleAltOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import SidebarOptions from './SidebarOptions';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase/FirebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/FirebaseConfig';

const SidebarContainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 250px;
    margin-top: 80px;
`;
const SidebarHeader = styled.div`
    color : white;
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root{
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 50%;
        cursor: pointer;
    }
`;

const SidebarInfo = styled.div`
    flex:1;

    >h2{
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    >h3{
        display: flex;
        font-size: 13px;
        font-weight: 400;
        margin-bottom: 5px;
        align-items: center;

        > .MuiSvgIcon-root{
            color: green;
            font-size: 12px;
            margin-top: 1px;
            margin-right:2px;
        }
    }
`;

const SidebarDevider = styled.div`
    border-bottom: 1px solid #49274b;
`;



const Sidebar = ({addChannel }) => {
    const [channels,loading,error] = useCollection(db.collection("rooms"))
    const [user] = useAuthState(auth);
    console.log(channels)

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>React Slack-2.0</h2>
                    <h3>
                        <FiberManualRecord />
                        {user?.displayName}
                    </h3>
                </SidebarInfo>
                <CreateRounded />
            </SidebarHeader>

            <SidebarOptions Icon={InsertCommentSharp} title={"Threads"} />
            <SidebarOptions Icon={InboxOutlined} title={"Inbox"} />
            <SidebarOptions Icon={DraftsOutlined} title={"Saved Items"} />
            <SidebarOptions Icon={BookmarkBorderOutlined} title={"Bookmark"} />
            <SidebarOptions Icon={PeopleAltOutlined} title={"People & user groups"} />
            <SidebarOptions Icon={AppsOutlined} title={"Apps"} />
            <SidebarOptions Icon={FileCopyOutlined} title={"File Browser"} />
            <SidebarOptions Icon={ExpandLessOutlined} title={"Show less"} />
            <SidebarDevider />
            <SidebarOptions Icon={ExpandMoreOutlined} title={"Channel"} />
            <SidebarDevider />
            <SidebarOptions Icon={AddOutlined} title={"Add Channel"} addChannel={{ addChannel }} />

            {channels?.docs.map(doc=>(
            <SidebarOptions key={doc.id} id={doc.id} title={doc.data().name} />
            ))}
            
        </SidebarContainer>
    );
}

export default Sidebar