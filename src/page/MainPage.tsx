import styled from "styled-components";
import { Link } from "react-router-dom";

// components

export default function MainPage() {
  const dom = window.innerHeight;

  return (
    <Layout>
      <LayoutInner>
        <Page height={dom}>
          <IntroductionArea>
            <WrapperBox>
              <TitleText>
                당신 근처의 당근마켓
              </TitleText>
              <SubText>
                중고 거래부터 동네 정보까지, 이웃과 함께해요.<br />
                가깝고 따뜻한 당신의 근처를 만들어요.
              </SubText>
            </WrapperBox>
          </IntroductionArea>
          <ImageArea>
            그림영역
          </ImageArea>
        </Page>
        <SecondPage height={dom}>
          <IntroductionArea>
            <WrapperBox>
              <TitleText>
                우리 동네 중고 직거래 마켓
              </TitleText>
              <SubText>
                동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요
              </SubText>
            </WrapperBox>
          </IntroductionArea>
          <ImageArea>
            그림영역
          </ImageArea>
        </SecondPage>
        <ThirdPage height={dom}>
          <IntroductionArea>
            <WrapperBox>
              <TitleText>
                이웃과 함께 하는 동네생활
              </TitleText>
              <SubText>
                우리 동네의 다양한 이야기를 이웃과 함께 나누어요.
              </SubText>
            </WrapperBox>
          </IntroductionArea>
          <ImageArea>
            그림영역
          </ImageArea>
        </ThirdPage>

      </LayoutInner>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LayoutInner = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
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

const Page = styled.div <{ height: number}>`
  background-color: palegoldenrod;
  display: flex;
  width: 100vw;
  height: ${(props) => props.height + "px"};
  justify-conent: center;
  align-items: center;
`;

const SecondPage = styled.div <{ height: number }>`
  background-color: cornflowerblue;
  display: flex;
  width: 100vw;
  height: ${(props) => props.height + "px"};
  justify-conent: center;
  align-items: center;
`;

const ThirdPage = styled.div <{ height: number }>`
  background-color: darksalmon;
  display: flex;
  width: 100vw;
  height: ${(props) => props.height + "px"};
  justify-conent: center;
  align-items: center;
`;

const IntroductionArea = styled.div`
  display: flex;
  width: 100vw;
  flex: 1;
  height: 100%;
  justify-conent: center;
  align-items: center;
`;

const ImageArea = styled.div`
  display: flex;
  background-color: white;
  width: 100vw;
  height: 100%;
  flex: 1;
  justify-conent: center;
  align-items: center;
`;

const WrapperBox = styled.div`
  display: flex;
  justify-conent: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const TitleText = styled.h1`
  margin-bottom: 1em;
`;

const SubText = styled.span`
  line-height: 2em;

`;