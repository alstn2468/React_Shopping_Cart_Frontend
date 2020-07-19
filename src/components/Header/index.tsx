import * as React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { RootState } from 'reducers';
import logoImage from 'assets/images/logo.png';

type ItemProps = {
    current: boolean;
};

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

const Item = styled.li<ItemProps>`
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

function Header({
    location: { pathname },
}: RouteComponentProps): React.ReactElement {
    const { cartItemCounts } = useSelector((state: RootState) => state.cart);

    return (
        <HeaderContainer>
            <LogoImageContainer>
                <LogoImage src={logoImage} />
            </LogoImageContainer>
            <List>
                <Item current={pathname === '/'}>
                    <SLink to="/">HOME</SLink>
                </Item>
                <Item current={pathname === '/products'}>
                    <SLink to="/products">PRODUCTS</SLink>
                </Item>
                <Item current={pathname === '/cart'}>
                    <SLink to="/cart">CART ({cartItemCounts})</SLink>
                </Item>
            </List>
        </HeaderContainer>
    );
}

export default withRouter(Header);
