import { useEffect, useState, ReactNode } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

export default function MainNavigation({ children }: { children: ReactNode }) {
    const navigation = useNavigate();
    const locatate = useLocation();

    const [locataion, setLocataion] = useState('');

    const tabArray = [
        { title: '서비스 소개', navigate: () => navigation('/'), path: '/' },

        {
            title: '약관 소개',
            navigate: () => navigation('/terms/service'),
            path: '/terms/service',
        },
    ];

    const renderTabs = () => {
        const tabs = tabArray.map(({ title, navigate, path }, index) => (
            <Tab onClick={navigate} isFoucs={locataion === path} key={index}>
                {title}
            </Tab>
        ));
        return tabs;
    };

    useEffect(() => {
        if (!locatate?.pathname) return;

        setLocataion(locatate.pathname);
    }, [locatate]);

    return (
        <>
            <Layout>
                <LayoutInner>{renderTabs()}</LayoutInner>
            </Layout>
            {children}
        </>
    );
}

const Layout = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: 3em;
    overflow: hidden;
`;

const LayoutInner = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #999;
`;

const Tab = styled.button<{ isFoucs: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em 1em;
    font-weight: ${({ isFoucs }) => (isFoucs ? 700 : 500)};
    color: ${({ isFoucs }) => (isFoucs ? 'white' : '#333')};
`;
