import { ReactNode } from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';

export default function TermNavigation({ children }: { children: ReactNode }) {
    const navigation = useNavigate();

    const tabs = [
        { title: 'Home', path: '/', navigate: () => navigation('/') },
        {
            title: '이용약관',
            path: '/terms/service',
        },
        {
            title: '개인정보 처리방침',
            path: '/terms/privacy',
        },
        {
            title: '위치기반서비스 이용약관',
            path: '/terms/location',
        },
    ];

    const renderNavigationTab = () => {
        const result = tabs.map(({ title, path }, index) => (
            <Button to={path} key={index}>
                <Text>{title}</Text>
            </Button>
        ));
        return result;
    };
    return (
        <>
            <Layout>
                <LayoutInner>
                    <DivideBlock>
                        {/** 로고 */}

                        {/** 좌측 nav 버튼 */}
                        <ButtonWrap>{renderNavigationTab()}</ButtonWrap>
                    </DivideBlock>
                    {/** 우측 nav 버튼 */}
                    <DivideBlock></DivideBlock>
                </LayoutInner>
            </Layout>
            {children}
        </>
    );
}

const Layout = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: 3.5em;
    @media screen and (max-width: 800px) {
        height: 2.5em;
    }
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
    align-items: center;
`;

const ButtonWrap = styled(DivideBlock)`
    padding: 0 0.5em;
`;

const Button = styled(NavLink)`
    display: flex;
    padding: 0 2em;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media screen and (max-width: 800px) {
        padding: 0 0.5em;
    }
`;

const Text = styled.span`
    font-size: 1em;
    font-weight: 500;
    color: white;
    white-space: nowrap;
    @media screen and (max-width: 800px) {
        font-size: 0.8em;
    }
`;
