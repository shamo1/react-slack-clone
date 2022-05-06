import { Avatar } from '@material-ui/core'
import { AccessTime, HelpOutline, SearchOutlined } from '@material-ui/icons'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components'
import { auth } from '../firebase/FirebaseConfig';


// StyledComponents
const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
`;

// header left style
const HeaderLeft = styled.div`
    display: flex;
    flex: 0.3;
    align-items: center;
    margin: 10px;

    > .MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 30px;
        cursor: pointer;
    }
`;

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    :hover{
        opacity: 0.8;
    }
`;

// header middle style
const HeaderMiddle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0.4;
    opacity: 1;
    color: gray;
    border: 1px gray solid;
    border-radius: 6px;

    > input{
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        color: gray;
        outline: none;
    }
`;

// header right style
const Headerright = styled.div`
    display: flex;
    flex: 0.3;
    align-items: flex-end;

    > .MuiSvgIcon-root{
        margin: auto;
        margin-right: 20px;
        cursor: pointer;
    }
`;

//  Header Component
const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <HeaderContainer>

                {/* Header Left Section */}
                <HeaderLeft >
                    <HeaderAvatar 
                    alt={user?.displayName}
                    src={user?.photoURL} />
                    <AccessTime />
                </HeaderLeft>

                {/* Header Middle section */}
                <HeaderMiddle>
                    <SearchOutlined />
                    <input placeholder='Search USERS,GROUPS,TEAMS in Slack-2.0' />
                </HeaderMiddle>

                {/* Header Right Section */}
                <Headerright>
                    <HelpOutline />
                </Headerright>

            </HeaderContainer>
        </div>
    )
}

export default Header