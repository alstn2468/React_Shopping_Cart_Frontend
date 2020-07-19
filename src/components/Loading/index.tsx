import * as React from 'react';
import styled from 'styled-components';

type LoadingProps = {
    isLoading: boolean;
};

const LoadingContainer = styled.div<LoadingProps>`
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.8s ease;
    display: ${(prop) => (prop.isLoading ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const Loader = styled.div`
    height: 80px;
    width: 80px;
    border: 6px solid #fff;
    border-top: 6px solid #000;
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
    font-size: 28px;
    color: #fff;
    margin: 15px;
`;

function Loading({ isLoading }: LoadingProps): React.ReactElement {
    return (
        <LoadingContainer isLoading={isLoading}>
            <Loader />
            <LoadingText>Loading...</LoadingText>
        </LoadingContainer>
    );
}

export default Loading;
