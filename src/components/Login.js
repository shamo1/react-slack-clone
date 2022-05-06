import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase/FirebaseConfig';

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`;


const LoginInnerContianer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    >p {
        text-decoration: underline;
        cursor: pointer;
        :hover{
            color: blue;
        }
    }
    > img{
        object-fit: cover;
        height: 100px;
        margin: 20px;
    } > Button{
        background-color: green;
        color: white;
        margin-top: 10px;
        text-transform: inherit !important;
        :hover{
            background: green;
            opacity: 0.8;
        }
        
    }
`;


const imgUrl = "http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png";


const Login = () => {

    // Signin method
    const Signin = (e) =>{
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error)=>alert(error.message));
    }

    return (
        <LoginContainer>
            <LoginInnerContianer>
                <img src={imgUrl} alt="" />
                <h1>Sign in to the Slack 2.0</h1>
                <p>daily.developer.com/slack2.0</p>
                <Button onClick={Signin}> Sign in with Google</Button>
            </LoginInnerContianer>
        </LoginContainer>
    )
}

export default Login