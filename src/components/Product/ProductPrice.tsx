import * as React from 'react';
import styled from 'styled-components';
import { RiCoupon2Line } from 'react-icons/ri';
import { numberWithComma } from 'utils/numberWithComma';

type ProductPriceTextProps = {
    availableCoupon: boolean;
    color: string;
};

type ProductPriceProp = {
    price: number;
    availableCoupon: boolean;
};

const ProductPriceContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ProductPriceText = styled.div<ProductPriceTextProps>`
    display: inline-flex;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: -0.15px;
    color: ${(props) => props.color};
    font-weight: bold;
    text-decoration: ${(props) =>
        props.availableCoupon ? 'line-through' : 'none'};
`;

const CouponIcon = styled(RiCoupon2Line)`
    fill: red;
    height: 14px;
    margin-left: 6px;
    margin-right: 2px;
`;

function ProductPrice({
    price,
    availableCoupon,
}: ProductPriceProp): React.ReactElement {
    return (
        <ProductPriceContainer>
            <ProductPriceText
                availableCoupon={availableCoupon}
                color="rgb(27, 28, 29)"
            >
                {numberWithComma(price)}원
            </ProductPriceText>
            {availableCoupon && (
                <>
                    <CouponIcon />
                    <ProductPriceText availableCoupon={false} color="red">
                        쿠폰 적용 가능
                    </ProductPriceText>
                </>
            )}
        </ProductPriceContainer>
    );
}

export default React.memo(
    ProductPrice,
    (prevProps: ProductPriceProp, nextProps: ProductPriceProp): boolean =>
        prevProps.price === nextProps.price &&
        prevProps.availableCoupon === nextProps.availableCoupon,
);
