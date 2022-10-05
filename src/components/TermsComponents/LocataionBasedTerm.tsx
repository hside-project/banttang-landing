import styled from 'styled-components';

// data
import serviceJson from '../../data/terms/locationBasedTerms.json';

export default function LocationBasedTermsPage() {
    const renderHeaderTerm = () => {
        // 약관 헤더
        const { headerTitle, headerDesc } = serviceJson;
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
        const bodyData = serviceJson.body.map(({ title, section }, index) => {
            return (
                <TermsBox key={index}>
                    <TermTitle>
                        <TermTitleText>{title}</TermTitleText>
                    </TermTitle>
                    <TermContent>
                        {section?.map(({ li, desc }, i) => {
                            if (desc)
                                return (
                                    <TermContetnText key={i}>
                                        {desc}
                                    </TermContetnText>
                                );
                            if (li)
                                return (
                                    <TermContetnText
                                        style={{ margin: 0 }}
                                        key={i}>
                                        {li}
                                    </TermContetnText>
                                );
                        })}
                    </TermContent>
                </TermsBox>
            );
        });
        return bodyData;
    };

    const renderTimeStamp = () => {
        const { termTime } = serviceJson;
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
`;

const TermsBox = styled.section`
    display: flex;
    width: 100%;
    padding: 3em 10em;
`;

const TermTitle = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1em;
    justify-content: center;
    align-items: center;
`;

const TermContent = styled.div`
    display: flex;
    height: auto;
    flex-direction: column;
    flex: 3;
`;

const TermTitleText = styled.h1`
    word-wrap: break-word;
    padding: 1em 0;
`;
const TermContetnText = styled.span`
    line-height: 1.5em;
    margin: 1em 0;
`;
