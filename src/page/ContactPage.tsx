import { useState } from 'react';
import styled from 'styled-components';

type Props = {
    target: {
        value: string;
        name: string;
    };
};

export default function ContactPage() {
    const [inputData, setInputData] = useState<{
        id?: string;
        password?: string;
    }>({});

    const changeValue = ({ target: { value, name } }: Props): void => {
        setInputData({
            ...inputData,
            [name]: value,
        });
    };

    return (
        <Layout>
            <LayoutInner></LayoutInner>
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
