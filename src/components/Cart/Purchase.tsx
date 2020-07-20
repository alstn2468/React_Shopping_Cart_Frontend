import * as React from 'react';
import styled from 'styled-components';
import PurchaseButton from 'components/Cart/PurchaseButton';
import { numberWithComma } from 'utils/numberWithComma';

type PurchaseProp = {
    price: number;
    discountPrice: number;
};

const PurchaseContainer = styled.div`
    width: calc(100% - 40px);
    border: 1px solid #c6c6c6;
    color: #000000;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 30px 40px;
`;

const PurchaseTextContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 18px;
    color: #000000;
    align-items: center;
    margin: 5px 0;
`;

const PurchaseTextLabel = styled.div`
    min-width: 100px;
    text-align: right;
`;

const PurchaseText = styled.div`
    margin-left: 10px;
    min-width: 160px;
    text-align: right;
`;

function Purchase({ price, discountPrice }: PurchaseProp): React.ReactElement {
    return (
        <PurchaseContainer>
            <PurchaseTextContainer>
                <PurchaseTextLabel>상품 금액</PurchaseTextLabel>
                <PurchaseText>{numberWithComma(price)}원</PurchaseText>
            </PurchaseTextContainer>
            <PurchaseTextContainer>
                <PurchaseTextLabel>할인 금액</PurchaseTextLabel>
                <PurchaseText>{numberWithComma(discountPrice)}원</PurchaseText>
            </PurchaseTextContainer>
            <PurchaseTextContainer>
                <PurchaseTextLabel>총 금액</PurchaseTextLabel>
                <PurchaseText>
                    {numberWithComma(price - discountPrice)}원
                </PurchaseText>
            </PurchaseTextContainer>
            <PurchaseButton
                onButtonClicked={() =>
                    alert(
                        `총 금액 ${numberWithComma(
                            price - discountPrice,
                        )} 원 구매 완료`,
                    )
                }
                children="구매하기"
            />
        </PurchaseContainer>
    );
}

export default React.memo(
    Purchase,
    (prevProps: PurchaseProp, nextProps: PurchaseProp): boolean =>
        prevProps.price === nextProps.price &&
        prevProps.discountPrice === nextProps.discountPrice,
);
