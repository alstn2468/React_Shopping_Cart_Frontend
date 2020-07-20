import * as React from 'react';
import styled from 'styled-components';

type PaginationButtonProp = {
    currentPage: number;
    range: number;
    onButtonClicked: () => void;
    children: string | number;
};

type StyledButtonProp = {
    isActive: boolean;
    isFirst: boolean;
    isLast: boolean;
};

const Button = styled.button<StyledButtonProp>`
    height: 100%;
    width: 40px;
    margin: 0 5px;
    color: ${(props) => (props.isActive ? '#ffffff' : '#000000')};
    background-color: ${(props) =>
        props.isActive ? 'rgba(0, 0, 0, 0.7)' : '#f2f2f2'};
    visibility: ${(props) =>
        props.isFirst || props.isLast ? 'hidden' : 'visible'};
    border: none;
    border-radius: 50%;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;

function PaginationButton({
    currentPage,
    range,
    onButtonClicked,
    children,
}: PaginationButtonProp): React.ReactElement {
    return (
        <Button
            disabled={
                (children === '<' && currentPage <= 1) ||
                (children === '>' && currentPage >= range) ||
                children === '...'
            }
            onClick={onButtonClicked}
            isActive={currentPage === children}
            isFirst={currentPage === 1 && children === '<'}
            isLast={currentPage === range && children === '>'}
        >
            {children}
        </Button>
    );
}

export default React.memo(
    PaginationButton,
    (
        prevProps: PaginationButtonProp,
        nextProps: PaginationButtonProp,
    ): boolean =>
        prevProps.currentPage === nextProps.currentPage &&
        prevProps.range === nextProps.range &&
        prevProps.children === nextProps.children,
);
