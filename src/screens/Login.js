import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { darkModeVar, isLoggedInVar } from "../apollo";

const Title = styled.h1`
    color: ${(props) => props.theme.fontColor};
`;

const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const WhiteBox = styled.div`
    background-color: white;
    border: 1px solid ${(props) => props.theme.borderColor};
    width: 100%;
`;

const TopBox = styled(WhiteBox)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 35px 40px 25px 40px;
    margin-bottom: 10px;
    form {
        margin-top: 35px;
        width: 100%;
        display: flex;
        justify-items: center;
        flex-direction: column;
        align-items: center;
    }
`;

const Input = styled.input`
    width: 100%;
    padding: 7px;
    border-radius: 3px;
    background-color: #fafafa;
    border: 0.5px solid rgb(219, 219, 219);
    margin-top: 5px;
    box-sizing: border-box;
    &::placeholder {
        font-size: 12px;
    }
`;

const Button = styled.input`
    border: none;
    border-radius: 3px;
    margin-top: 12px;
    background-color: ${(props) => props.theme.accent};
    color: white;
    text-align: center;
    padding: 8px 0px;
    font-weight: 600;
    width: 100%;
`;

const BottomBox = styled(WhiteBox)`
    padding: 20px 0px;
    text-align: center;
    a {
        font-weight: 600;
        margin-left: 5px;
        color: #0095f6;
    }
`;

const Wrapper = styled.div`
    max-width: 350px;
    width: 100%;
`;

const Seperator = styled.div`
    margin: 20px 0px 30px 0px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    div {
        width: 100%;
        height: 1px;
        background-color: rgb(219, 219, 219);
    }
    span {
        margin: 0px 10px;
        font-weight: 600;
        font-size: 12px;
        color: #8e8e8e;
    }
`;

const FacebookLogin = styled.div`
    color: #385285;
    span {
        margin-left: 10px;
        font-weight: 600;
    }
`;

function Login() {
    return (
        <Container>
            <Wrapper>
                <TopBox>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </div>
                    <form>
                        <Input type="text" placeholder="Username"/>
                        <Input type="password" placeholder="Password"/>
                        <Button type="submit" value="Log in"/>
                    </form>
                    <Seperator>
                        <div></div>
                        <span>OR</span>
                        <div></div>
                    </Seperator>
                    <FacebookLogin>
                        <FontAwesomeIcon icon={faFacebookSquare} />
                        <span>Log in with Facebook</span>
                    </FacebookLogin>
                </TopBox>
                <BottomBox>
                    <span> Don't have an account?</span>
                    <Link to="/sign-up">Sign up</Link> 
                </BottomBox>
            </Wrapper>
        </Container>
    );
}
export default Login;