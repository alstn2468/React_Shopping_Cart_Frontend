import * as React from 'react';
import styled from 'styled-components';
import { AiOutlineWarning } from 'react-icons/ai';
import logoImage from 'assets/images/logo.png';

const MobileContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #ffffff;

    @media screen and (max-width: 767px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 999;
    }
`;

const MobileWarningIcon = styled(AiOutlineWarning)`
    width: 60px;
    height: 60px;
    color: #000000;
`;

const MobileWarningText = styled.p`
    margin: 5px 0;
    font-weight: bold;
`;

const LogoImage = styled.img`
    width: 150px;
    height: auto;
    margin: 10px 0 20px 0;
`;

function Mobile(): React.ReactElement {
    return (
        <MobileContainer>
            <MobileWarningIcon />
            <LogoImage src={logoImage} />
            <MobileWarningText>
                모바일 환경에서는 사용 불가능 합니다.
            </MobileWarningText>
            <MobileWarningText>
                데스크탑 환경에서 접속해주세요.
            </MobileWarningText>
        </MobileContainer>
    );
}

export default Mobile;
