import * as React from 'react';
import styled from 'styled-components';
import { FaCartPlus } from 'react-icons/fa';
import { MdRemoveShoppingCart } from 'react-icons/md';

type ProductButtonProp = {
    isInCart: boolean;
    cartItemCounts: number;
    onButtonClicked: () => void;
};

type StyledButtonProp = {
    isPointer: boolean;
};

const Button = styled.button<StyledButtonProp>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
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

function ProductButton({
    isInCart,
    onButtonClicked,
    cartItemCounts,
}: ProductButtonProp): React.ReactElement {
    return (
        <Button
            onClick={onButtonClicked}
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
                    {cartItemCounts >= 3 ? '카드가 가득참' : '카드에 담기'}
                </>
            )}
        </Button>
    );
}

export default React.memo(
    ProductButton,
    (prevProps: ProductButtonProp, nextProps: ProductButtonProp): boolean =>
        prevProps.isInCart === nextProps.isInCart
            ? !prevProps.isInCart && !nextProps.isInCart
                ? nextProps.cartItemCounts < 3 && prevProps.cartItemCounts < 3
                : true
            : false,
);
