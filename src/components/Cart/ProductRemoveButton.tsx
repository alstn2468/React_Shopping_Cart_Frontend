import * as React from 'react';
import styled from 'styled-components';
import { MdClear } from 'react-icons/md';

type RemoveProductButton = {
    onButtonClicked: () => void;
};

const Button = styled.button`
    position: absolute;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    width: 30px;
    height: 30px;
    top: 10px;
    right: 15px;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;

const ProductRemoveIcon = styled(MdClear)`
    width: 25px;
    height: 25px;
`;

function ProductRemoveButton({
    onButtonClicked,
}: RemoveProductButton): React.ReactElement {
    return (
        <Button onClick={onButtonClicked}>
            <ProductRemoveIcon />
        </Button>
    );
}

export default ProductRemoveButton;
