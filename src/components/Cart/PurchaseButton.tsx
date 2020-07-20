import * as React from 'react';
import styled from 'styled-components';

type PurchaseButtonProp = {
    onButtonClicked: () => void;
    children: string;
};

const Button = styled.button`
    margin-top: 20px;
    height: 50px;
    width: 240px;
    font-size: 18px;
    font-weight: 600;
    padding: 2px 0;
    color: #ffffff;
    background-color: #000000;
    border: none;

    &:focus {
        outline: none;
    }
`;

function PurchaseButton({
    onButtonClicked,
    children,
}: PurchaseButtonProp): React.ReactElement {
    return <Button onClick={onButtonClicked}>{children}</Button>;
}

export default React.memo(
    PurchaseButton,
    (prevProps: PurchaseButtonProp, nextProps: PurchaseButtonProp): boolean =>
        prevProps.children === nextProps.children,
);
