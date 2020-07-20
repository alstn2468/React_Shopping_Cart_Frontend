import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type ItemProp = {
    pathname: string;
    linkTo: string;
    children: string;
};

type LinkItemProp = {
    current: boolean;
};

const LinkItem = styled.li<LinkItemProp>`
    width: 100px;
    height: 60px;
    text-align: center;
    border-bottom: 3px solid
        ${(props) => (props.current ? '#000000' : 'transparent')};
    transition: border-bottom 0.5s ease-in-out;

    &:focus {
        outline: none;
    }
`;

const SLink = styled(Link)`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    &:hover {
        font-weight: 600;
    }
`;

function Item({ pathname, linkTo, children }: ItemProp): React.ReactElement {
    return (
        <LinkItem current={pathname === linkTo}>
            <SLink to={linkTo}>{children}</SLink>
        </LinkItem>
    );
}
export default React.memo(
    Item,
    (prevProps: ItemProp, nextProps: ItemProp): boolean =>
        prevProps.children === nextProps.children &&
        prevProps.pathname === nextProps.pathname,
);
