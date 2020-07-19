import * as React from 'react';
import styled from 'styled-components';

type RemoveCouponButton = {
    onButtonClicked: () => void;
};

const Button = styled.button`
    height: 40px;
    width: 60px;
    font-size: 12px;
    font-weight: 600;
    padding: 2px 0;
    color: #000000;
    background-color: #ffffff;
    border: 1px solid #000000;

    &:focus {
        outline: none;
    }
`;

function RemoveCouponButton({ onButtonClicked }): React.ReactElement {
    return <Button onClick={onButtonClicked}>취소</Button>;
}

export default RemoveCouponButton;
