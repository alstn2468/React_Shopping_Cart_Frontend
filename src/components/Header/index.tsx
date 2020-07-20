import * as React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from 'reducers';
import logoImage from 'assets/images/logo.png';
import Item from 'components/Header/Item';

const HeaderContainer = styled.header`
    display: flex;
    flex: 1;
    height: 60px;
    width: 100%;
    padding: 0 3rem;
    box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.12);
`;

const List = styled.ul`
    display: flex;
    flex: 1;
    justify-content: flex-end;
`;

const LogoImageContainer = styled.div`
    flex: 1;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const LogoImage = styled.img`
    width: 150px;
    height: auto;
`;

function Header(): React.ReactElement {
    const { pathname } = useLocation();
    const cartItemCounts = useSelector(
        (state: RootState): number => state.cart.cartItemCounts,
    );

    return (
        <HeaderContainer>
            <LogoImageContainer>
                <LogoImage src={logoImage} />
            </LogoImageContainer>
            <List>
                <Item pathname={pathname} linkTo="/" children="HOME" />
                <Item
                    pathname={pathname}
                    linkTo="/products"
                    children="PRODUCTS"
                />
                <Item
                    pathname={pathname}
                    linkTo="/cart"
                    children={`CART (${cartItemCounts})`}
                />
            </List>
        </HeaderContainer>
    );
}

export default Header;
