import React from 'react';
import styled from 'styled-components';
import {
    useNavigate,
    Link,
    BrowserRouter,
    Route,
    NavLink,
} from 'react-router-dom';
import ServiceTermsPage from './ServiceTerm';

export default function Navigation() {
    const navigationMove = (type: '') => {};
    const navigation = useNavigate();
    return (
        <Layout>
            <LayoutInner>
                {/** 좌측 nav 버튼 */}
                <DivideBlock>
                    {/* <NavLink 
                        to="/terms/service"
                        style={({ isActive }) => ({ color: isActive ? 'black' : 'white' })}
                    >
                        <Text>이용약관</Text>
                    </NavLink>
                    <NavLink to="/terms/privacy">
                        <Text>개인정보 처리방침</Text>
                    </NavLink>
                    <NavLink to="/terms/location">
                        <Text>위치기반서비스 이용약관</Text>
                    </NavLink> */}
                    <Button onClick={() => navigation('/terms/service')}>
                        <Text>이용약관</Text>
                    </Button>
                    <Button onClick={() => navigation('/terms/privacy')}>
                        <Text>개인정보 처리방침</Text>
                    </Button>
                    <Button onClick={() => navigation('/terms/location')}>
                        <Text>위치기반서비스 이용약관</Text>
                    </Button>
                </DivideBlock>
                {/** 우측 nav 버튼 */}
                <DivideBlock></DivideBlock>
            </LayoutInner>
        </Layout>
    );
}

const Layout = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: 3.5em;
`;

const LayoutInner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background-color: #ff9600;
`;

const DivideBlock = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
`;

const Button = styled.button`
    display: flex;
    padding: 0 2em;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const Text = styled.span`
    font-size: 1.2em;
    font-weight: 500;
    color: white;
`;
