import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// styled
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';

// pages
import TermsPage from '@/page/TermsPage';
import MainPage from '@/page/MainPage';
import ContactPage from '@/page/ContactPage';

// components
import Header from './Common/Header';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                {/* {headerDivider()} */}
                <BrowserRouter>
                    <Header>
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/terms/*" element={<TermsPage />} />
                        </Routes>
                    </Header>
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
