import * as React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'reducers';
import { ICartItem } from 'models/ICartItem';
import { IProductItem } from 'models/IProductItem';
import Divisor from 'components/Common/Divisor';
import ProductScore from 'components/Product/ProductScore';
import ProductPrice from 'components/Product/ProductPrice';
import ProductButton from 'components/Product/ProductButton';
import { addProductToCart, removeProductFromCart } from 'actions/cartAction';

interface ProductItemProps extends IProductItem {
    isInCart: boolean;
}

const ProductImageContainer = styled.div`
    width: 100%;
    height: 240px;
    border-radius: 10px;
    overflow: hidden;
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
`;

const ProductImage = styled.img`
    width: 100%;
    height: 240px;
    object-fit: cover;
    transition: transform 0.4s ease;
`;

const ProductItemContainer = styled.li`
    display: inline-flex;
    min-width: 30%;
    flex: 1;
    height: auto;
    flex-direction: column;
    margin: 15px;
    cursor: pointer;
    overflow: hidden;
    position: relative;

    &:hover {
        ${ProductImage} {
            transform: scale(1.1);
            border-radius: 10px;
        }

        ${ProductImageContainer} {
            border-radius: 10px;
        }
    }
`;

const ProductDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ProductTitle = styled.h2`
    font-size: 14px;
    margin: 10px 0 5px 0;
    height: 20px;
`;

const ProductBottomContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

function ProductItem({
    id,
    title,
    coverImage,
    price,
    score,
    availableCoupon = true,
    isInCart = false,
}: ProductItemProps): React.ReactElement {
    const item: ICartItem = {
        id,
        title,
        coverImage,
        price,
        score,
        availableCoupon,
        amount: 1,
        isSelected: false,
    };
    const cartItemCounts = useSelector(
        (state: RootState) => state.cart.cartItemCounts,
    );
    const dispatch = useDispatch();

    function onButtonClicked() {
        isInCart
            ? dispatch(removeProductFromCart(item))
            : dispatch(addProductToCart(item));
    }

    return (
        <ProductItemContainer>
            <ProductImageContainer>
                <ProductImage src={coverImage} />
            </ProductImageContainer>
            <ProductDetailContainer>
                <ProductTitle>{title}</ProductTitle>
                <ProductScore score={score} />
                <Divisor />
                <ProductBottomContainer>
                    <ProductPrice
                        price={price}
                        availableCoupon={availableCoupon}
                    />
                    <ProductButton
                        isInCart={isInCart}
                        cartItemCounts={cartItemCounts}
                        onButtonClicked={onButtonClicked}
                    />
                </ProductBottomContainer>
            </ProductDetailContainer>
        </ProductItemContainer>
    );
}

export default ProductItem;
