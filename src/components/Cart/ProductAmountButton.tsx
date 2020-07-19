import * as React from 'react';
import styled from 'styled-components';

type ProductAmountButtonProp = {
    children: string;
    onClickButton: () => void;
    disabled: boolean;
};

const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #000000;
    transition: all 0.5s ease;
    border-radius: 3px;

    &:active {
        background-color: #000000;
        color: #ffffff;
    }

    &:focus {
        outline: none;
    }
`;

function ProductAmountButton({
    children,
    onClickButton,
    disabled,
}: ProductAmountButtonProp): React.ReactElement {
    return (
        <Button disabled={disabled} onClick={onClickButton}>
            {children}
        </Button>
    );
}

export default ProductAmountButton;
