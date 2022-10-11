import styled from 'styled-components';
import { Link } from 'react-router-dom';

// components

export default function MainPage() {
    return (
        <Layout>
            <LayoutInner>
                <Text>랜딩페이지</Text>
            </LayoutInner>
        </Layout>
    );
}

const Layout = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LayoutInner = styled.div`
    display: flex;
`;

const Button = styled(Link)`
    padding: 0.5em;
    background-color: #999;
    margin: 0.3em;
`;

const Text = styled.span`
    font-size: 2em;
    font-weight: 700;
`;
