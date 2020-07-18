import * as React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { FaCartPlus } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { RiCoupon2Line } from 'react-icons/ri';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { RootState } from 'reducers';
import { ICartItem } from 'src/models/ICartItem';
import {
    ProductPriceProps,
    ProductItemProps,
    ProductButtonProps,
} from 'components/Product/ProductProps';
import { addProductToCart, removeProductFromCart } from 'actions/cartAction';
import { numberWithComma } from 'utils/numberWithComma';

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

const ProductScore = styled.div`
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

const ProductBottomContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

const ProductPriceContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ProductPrice = styled.div<ProductPriceProps>`
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

const Divisor = styled.hr`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid rgb(242, 244, 245);
`;

const ProductButton = styled.button<ProductButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 30px;
    background: ${(prop) => (prop.isPointer ? '#000000' : '#c2c2c2')};
    color: #ffffff;
    border-radius: 5px;
    padding: 0 8px;
    border: 1px solid #ffffff;
    cursor: ${(prop) => prop.isPointer && 'pointer'};

    &:focus {
        outline: none;
    }
`;

const AddCartIcon = styled(FaCartPlus)`
    display: inline-block;
    width: 1rem;
    height: 1rem;
    fill: #ffffff;
    margin-right: 4px;
`;

const RemoveCartIcon = styled(MdRemoveShoppingCart)`
    display: inline-block;
    width: 1rem;
    height: 1rem;
    fill: #ffffff;
    margin-right: 4px;
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
    const { cartItemCounts } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    return (
        <ProductItemContainer>
            <ProductImageContainer>
                <ProductImage src={coverImage} />
            </ProductImageContainer>
            <ProductDetailContainer>
                <ProductTitle>{title}</ProductTitle>
                <ProductScore>
                    <ProductScoreIcon />
                    <ProductScoreText>{score}</ProductScoreText>
                </ProductScore>
                <Divisor />
                <ProductBottomContainer>
                    <ProductPriceContainer>
                        <ProductPrice
                            availableCoupon={availableCoupon}
                            color="rgb(27, 28, 29)"
                        >
                            {numberWithComma(price)}원
                        </ProductPrice>
                        {availableCoupon && (
                            <>
                                <CouponIcon />
                                <ProductPrice
                                    availableCoupon={false}
                                    color="red"
                                >
                                    쿠폰 적용 가능
                                </ProductPrice>
                            </>
                        )}
                    </ProductPriceContainer>
                    <ProductButton
                        onClick={
                            isInCart
                                ? () => dispatch(removeProductFromCart(item))
                                : () => dispatch(addProductToCart(item))
                        }
                        isPointer={isInCart || cartItemCounts < 3}
                    >
                        {isInCart ? (
                            <>
                                <RemoveCartIcon />
                                카트에서 빼기
                            </>
                        ) : (
                            <>
                                <AddCartIcon />
                                {cartItemCounts >= 3
                                    ? '카드가 가득참'
                                    : '카드에 담기'}
                            </>
                        )}
                    </ProductButton>
                </ProductBottomContainer>
            </ProductDetailContainer>
        </ProductItemContainer>
    );
}

export default ProductItem;
