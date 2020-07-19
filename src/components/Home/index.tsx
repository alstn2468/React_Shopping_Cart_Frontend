import * as React from 'react';
import styled from 'styled-components';
import MainLogo from 'assets/images/main-logo.png';
import MainVideo from 'assets/videos/main.mp4';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
    display: flex;
    height: calc(100% - 60px);
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
`;

const HomeVideo = styled.video`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: fill;
    background-color: #ffffff;
`;

const LogoContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const HomeTextContainer = styled.div`
    display: inline-block;
    margin-bottom: 50px;
    text-align: center;
`;

const LogoImage = styled.img`
    height: 60px;
    width: auto;
    margin-bottom: 10px;
`;

const HomeText = styled.p`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #ffffff;
    text-align: center;
`;

const ProductButton = styled(Link)`
    width: 300px;
    text-align: center;
    color: #ffffff;
    background-color: transparent;
    font-size: 1.6rem;
    border: 1px solid #ffffff;
    padding: 20px;
    font-weight: bold;
    transition: transform 0.5s ease;

    &:focus {
        outline: none;
    }

    &:hover {
        transform: scale(1.1);
    }
`;

function Home() {
    return (
        <HomeContainer>
            <HomeVideo autoPlay muted loop>
                <source src={MainVideo} type="video/mp4"></source>
            </HomeVideo>
            <LogoContainer>
                <HomeTextContainer>
                    <LogoImage src={MainLogo} />
                    <HomeText>준비물까지 챙겨주는 온라인 취미 클래스</HomeText>
                </HomeTextContainer>
                <ProductButton to="/products">지금 바로 시작하기</ProductButton>
            </LogoContainer>
        </HomeContainer>
    );
}

export default Home;
