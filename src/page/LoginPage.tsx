import { useState } from 'react';
import styled from 'styled-components';

type Props = {
    target: {
        value: string;
        name: string;
    };
};

export default function LoginPage() {
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

    const inputArr = [
        {
            name: 'id',
            value: inputData.id || '',
        },
        {
            name: 'password',
            value: inputData.password || '',
            type: 'password',
        },
    ];

    const loginHandler = () => {
        console.log(`good===> ${inputArr}`);
    };

    return (
        <Layout>
            <LayoutInner>
                <TitleBox>
                    <Line />
                    <Text>test</Text>
                    <Line />
                </TitleBox>
                {inputArr.map((props, index) => (
                    <UserInput
                        key={index}
                        {...props}
                        onChange={e =>
                            changeValue({
                                target: e.target,
                            })
                        }
                    />
                ))}
                <Button onClick={loginHandler}>로그인</Button>
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
    flex-direction: column;
    max-width: 18em;
    width: 100%;
    height: 500px;
    border: 1px solid #999;
    border-radius: 0.5em;
    padding: 1em;
`;

const UserInput = styled.input`
    margin: 0.5em 0;
    padding: 0.2em 0.3em;
    border: 1px solid #999;
`;

const Button = styled.button`
    justify-content: center;
    align-items: center;
    padding: 0.2em 0.4em;
    border-radius: 0.4em;
    background: #999;
`;

const TitleBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: auto;
`;

const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: red;
`;

const Text = styled.span`
    font-size: 1.5em;
    font-weight: 700;
    color: blue;
    padding: 0 0.4em 0 0.4em;
`;
