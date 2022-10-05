import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

// routers
import MainRouter from '../router/MainRouter';
import TermsRouter from '../router/TermsRouter';

// styled
import GlobalStyle from '../styles/GlobalStyle';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <BrowserRouter>
                    <MainRouter />
                    <TermsRouter />
                </BrowserRouter>
            </Layout>
        </ThemeProvider>
    );
};

const Layout = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
`;

export default App;
