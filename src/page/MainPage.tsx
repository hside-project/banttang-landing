import styled from "styled-components";
import {Link} from "react-router-dom";

export default function MainPage() {
    const landingimg1 = 'https://user-images.githubusercontent.com/120109736/220337106-59b11312-276d-43bf-9197-8d78f9b34575.png'
    const landingimg2 = 'https://user-images.githubusercontent.com/120109736/220337116-5df63e10-0efb-4b65-95e4-e4e40f469728.png'
    const landingimg3 = 'https://user-images.githubusercontent.com/120109736/220337125-ef460486-4692-4fa3-a423-b7c76d87269f.png'
    const banttang_qrcode = 'https://user-images.githubusercontent.com/120109736/220337135-ffc7bbe6-e266-41e7-aa7f-7f5cb6a5640c.png'
    const dom = window.innerHeight;

    return (
        <Layout>
            <LayoutInner>
                <Page height={dom} color={"bisque"}>
                    <IntroductionArea>
                        <WrapperBox>
                            <TitleText>
                                함께 사요 반땅땅!
                            </TitleText>
                            <SubText>
                                딱 하나만 필요할때! <br/>
                                혼자 사기엔 너무 많은 물건들<br/>
                                이웃들과 나눠서 구매해요<br/>
                            </SubText>
                        </WrapperBox>
                    </IntroductionArea>
                    <ImageArea>
                        <LandingImage src={landingimg1}/>
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
                        <LandingDoubleImage src={landingimg2}/>
                    </ImageArea>
                </Page>
                <Page height={dom} color={"bisque"}>
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
                        <LandingImage src={landingimg3}/>
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
                        <QrImage src={banttang_qrcode}/>
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

const Page = styled.div <{ height: number, color: String }>`
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
  width: 50%;
  margin: auto;
  object-fit: contain;
`

const LandingDoubleImage = styled.img`
  display: flex;
  width: 80%;
  margin: auto;
  object-fit: contain;
`

const QrImage = styled.img`
  display: flex;
  width: 50%;
  margin: auto;
  object-fit: contain;
`