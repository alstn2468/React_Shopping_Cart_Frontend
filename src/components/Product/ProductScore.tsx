import * as React from 'react';
import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';

type ProductScoreProp = {
    score: number;
};

const ProductScoreContainer = styled.div`
    font-size: 11px;
    margin: 0px 8px 0px 0px;
    display: flex;
    align-items: center;
    flex: 0 0 auto;
`;

const ProductScoreIcon = styled(AiFillHeart)`
    height: 12px;
    margin-right: 2px;
    fill: rgb(133, 138, 141);
`;

const ProductScoreText = styled.span`
    color: rgb(133, 138, 141);
`;

function ProductScore({ score }: ProductScoreProp): React.ReactElement {
    return (
        <ProductScoreContainer>
            <ProductScoreIcon />
            <ProductScoreText>{score}</ProductScoreText>
        </ProductScoreContainer>
    );
}

export default React.memo(
    ProductScore,
    (prevProps: ProductScoreProp, nextProps: ProductScoreProp): boolean =>
        prevProps.score === nextProps.score,
);
