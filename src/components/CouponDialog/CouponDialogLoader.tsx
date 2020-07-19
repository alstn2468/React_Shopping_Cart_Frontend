import * as React from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Loader = styled.div`
    height: 50px;
    width: 50px;
    margin: 0 auto;
    border: 6px solid #000;
    border-top: 6px solid #fff;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

const LoadingText = styled.div`
    margin: 0 auto;
    font-size: 22px;
    color: #000000;
    text-align: center;
    margin: 15px;
`;

function CouponDialogLoader(): React.ReactElement {
    return (
        <LoaderContainer>
            <Loader />
            <LoadingText>Loading...</LoadingText>
        </LoaderContainer>
    );
}

export default CouponDialogLoader;
