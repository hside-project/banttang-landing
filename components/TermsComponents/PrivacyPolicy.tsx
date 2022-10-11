import styled from 'styled-components';

// data
import praivacyJson from '../../data/terms/praivacyTerms.json';

export default function PrivacyPolicyPage() {
    const formattingString = (str: string) => {
        return str.split('/n').map(data => (
            <>
                {data}
                <br />
            </>
        ));
    };

    const renderHeaderTerm = () => {
        // 약관 헤더
        const { headerTitle, headerDesc } = praivacyJson;

        return (
            <TermsBox>
                <TermTitle>
                    <TermTitleText>{headerTitle}</TermTitleText>
                </TermTitle>
                <TermContent>
                    <TermContetnText>{headerDesc}</TermContetnText>
                </TermContent>
            </TermsBox>
        );
    };

    const renderBodyTerm = () => {
        const bodyData = praivacyJson.body.map(({ title, section }, index) => {
            return (
                <TermsBox key={index}>
                    <TermTitle>
                        <TermTitleText>{formattingString(title)}</TermTitleText>
                    </TermTitle>
                    <TermContent>
                        {section?.map(({ li, desc, table }, i) => {
                            if (desc)
                                return (
                                    <TermContetnText key={i + 'b'}>
                                        {formattingString(desc)}
                                    </TermContetnText>
                                );
                            if (li)
                                return (
                                    <TermContetnText
                                        style={{ margin: 0 }}
                                        key={i + 'c'}>
                                        {formattingString(li)}
                                    </TermContetnText>
                                );
                            if (table)
                                return (
                                    <TableLayout key={i + 'd'}>
                                        {table.map(({ th, tb }, i) => (
                                            <TableLayoutInner key={i}>
                                                <TableHeader>{th}</TableHeader>
                                                {tb.map((item, index) => (
                                                    <TableBody
                                                        key={index + 'a'}>
                                                        {item}
                                                    </TableBody>
                                                ))}
                                            </TableLayoutInner>
                                        ))}
                                    </TableLayout>
                                );
                        })}
                    </TermContent>
                </TermsBox>
            );
        });
        return bodyData;
    };

    const renderTimeStamp = () => {
        const { termTime } = praivacyJson;
        return (
            <TermsBox>
                <TermTitle>
                    <TermTitleText>공고일자</TermTitleText>
                    <TermTitleText>시행일자</TermTitleText>
                </TermTitle>
                <TermContent>
                    <TermContetnText>
                        {termTime.publicAnnouncement}
                    </TermContetnText>
                    <TermContetnText>{termTime.implement}</TermContetnText>
                </TermContent>
            </TermsBox>
        );
    };

    return (
        <Layout>
            <LayoutInner>
                {renderHeaderTerm()}
                {renderBodyTerm()}
                {renderTimeStamp()}
            </LayoutInner>
        </Layout>
    );
}

const TableLayout = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
`;

const TableLayoutInner = styled.div`
    display: flex;
    flex-direction: column;
`;

const TableHeader = styled.div`
    padding: 1em;
    background-color: #fafafa;
    font-weight: 500;
    @media screen and (max-width: 800px) {
        padding: 0.4em;
        line-height: 1.2em;
        font-size: 0.9em;
    }
`;

const TableBody = styled.div`
    padding: 1em;
    @media screen and (max-width: 800px) {
        padding: 0.4em;
        line-height: 1.2em;
        font-size: 0.8em;
        height: 100%;
    }
`;

const Layout = styled.article`
    display: flex;
    flex: 1;
    height: 100%;
`;

const LayoutInner = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 5em 0;
    @media screen and (max-width: 800px) {
        padding: 2em 0;
    }
`;

const TermsBox = styled.section`
    display: flex;
    width: 100%;
    padding: 3em 10em;

    @media screen and (max-width: 800px) {
        padding: 1em;
        flex-direction: column;
    }
`;

const TermTitle = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1em;
    align-items: center;
    @media screen and (max-width: 800px) {
        flex-direction: row;
    }
`;

const TermContent = styled.div`
    display: flex;
    height: auto;
    flex-direction: column;
    flex: 5;
`;

const TermTitleText = styled.h1`
    word-wrap: break-word;
    padding: 1em 0;
    @media screen and (max-width: 800px) {
        line-height: 1.2em;
        padding: 0.5em 0;
        font-size: 1em;
    }
`;
const TermContetnText = styled.span`
    line-height: 1.5em;
    margin: 1em 0;
    @media screen and (max-width: 800px) {
        margin: 0.5em 0;
        font-size: 0.8em;
    }
`;
