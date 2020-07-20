import * as React from 'react';
import styled from 'styled-components';

type CheckBoxProp = {
    isSelected: boolean;
};

type CartCheckBoxProp = {
    isSelected: boolean;
    onCheckBoxClicked: () => void;
};

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
`;

const StyledCheckbox = styled.div<CheckBoxProp>`
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #000000;
    background: ${(props) => (props.isSelected ? '#000000' : '#ffffff')};
    border-radius: 3px;
    transition: all 150ms;

    ${Icon} {
        visibility: ${(props) => (props.isSelected ? 'visible' : 'hidden')};
    }
`;

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
`;

function CartCheckBox({
    isSelected,
    onCheckBoxClicked,
}: CartCheckBoxProp): React.ReactElement {
    return (
        <CheckboxContainer>
            <HiddenCheckbox />
            <StyledCheckbox isSelected={isSelected} onClick={onCheckBoxClicked}>
                <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                </Icon>
            </StyledCheckbox>
        </CheckboxContainer>
    );
}

export default React.memo(
    CartCheckBox,
    (prevProps, nextProps) => prevProps.isSelected === nextProps.isSelected,
);
