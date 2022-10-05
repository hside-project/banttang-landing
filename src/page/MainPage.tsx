import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function MainPage() {
    return (
        <Layout>
            <LayoutInner>
                <Text>MainPage</Text>
                <Button to="/login">Go to Login</Button>
                <Button to="/terms">약관</Button>
            </LayoutInner>
        </Layout>
    );
}

const Layout = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const LayoutInner = styled.div`
    display: flex;
    width: 28em;
    height: auto;
    padding: 4em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Button = styled(Link)`
    padding: 0.5em;
    background-color: #999;
    margin: 0.3em;
`;

const Text = styled.span``;
