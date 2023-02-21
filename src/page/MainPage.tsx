import styled from "styled-components";
import {Link} from "react-router-dom";

// components

export default function MainPage() {
    const dom = window.innerHeight;

    return (
        <Layout>
            <LayoutInner>
                <Page height={dom} color = {"bisque"}>
                    <IntroductionArea>
                        <WrapperBox>
                            <TitleText>
                                함께 사요 반땅!
                            </TitleText>
                            <SubText>
                                딱 하나만 필요할때! <br/>
                                혼자 사기엔 너무 많은 물건들<br/>
                                이웃들과 나눠서 구매해요<br/>
                            </SubText>
                        </WrapperBox>
                    </IntroductionArea>
                    <ImageArea>
                        <LandingImage src="imgs/landing-img1.png" />
                    </ImageArea>
                </Page>
                <Page height={dom} color={"white"}>
                    <IntroductionArea>
                        <WrapperBox>
                            <TitleText>
                                더이상 남기지 않아요!
                            </TitleText>
                            <SubText>
                                혼자먹기 너무 많은 배달음식,<br/>
                                배달비는 줄이고 음식물 쓰레기는 줄여요!<br/>
                            </SubText>
                        </WrapperBox>
                    </IntroductionArea>
                    <ImageArea>
                        <LandingDoubleImage src="imgs/landing-img2.png" />
                    </ImageArea>
                </Page>
                <Page height={dom} color = {"bisque"}>
                    <IntroductionArea>
                        <WrapperBox>
                            <TitleText>
                                가까운 사람들과 거래해요
                            </TitleText>
                            <SubText>
                                내 위치 기반 가까운 글들이 보여요
                            </SubText>
                        </WrapperBox>
                    </IntroductionArea>
                    <ImageArea>
                        <LandingImage src="imgs/landing-img3.png" />
                    </ImageArea>
                </Page>
                <Page height={dom} color={"white"}>
                    <IntroductionArea>
                        <WrapperBox>
                            <TitleText>
                                반땅 함께하러 가기
                            </TitleText>
                            <SubText>
                                play store 다운로드
                                (app store 출시예정)
                            </SubText>
                        </WrapperBox>
                    </IntroductionArea>
                    <ImageArea>
                        <QrImage src="imgs/banttang_qrcode.png"  />
                    </ImageArea>
                </Page>

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

const Page = styled.div <{ height: number , color: String}>`
  display: flex;
  background-color: ${(props) => props.color};
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

const LandingImage = styled.img`
  display: flex;
  width: 400px;
  margin : auto;
  object-fit: contain;
`

const LandingDoubleImage = styled.img`
  display: flex;
  width: 700px;
  margin : auto;
  object-fit: contain;
`

const QrImage = styled.img`
  display: flex;
  width: 300px;
  margin : auto;
  object-fit: contain;
`