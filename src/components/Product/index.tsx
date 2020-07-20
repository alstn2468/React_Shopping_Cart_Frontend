import * as React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { RootState } from 'reducers';
import Helemt from 'components/Helmet';
import Loading from 'components/Loading';
import Pagination from 'components/Pagination';
import ProductItem from 'components/Product/ProductItem';
import { getProductList } from 'actions/thunkAction';
import { ProductListState } from 'reducers/productListReducer';
import { IProductItem } from 'models/IProductItem';

type ProductProp = {
    loading: boolean;
    productItems: IProductItem[];
    currentPage: number;
    itemCounts: number;
};

const ProductContainer = styled.div`
    width: 80%;
    height: auto;
    margin: 0 auto;
    scrollbar-width: none;
`;

const ProductListContainer = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
    padding: 30px;
    text-align: center;
`;

function Product(): React.ReactElement {
    const dispatch = useDispatch();
    const { loading, productItems, currentPage, itemCounts } = useSelector(
        createSelector(
            (state: RootState): ProductListState => state.product,
            (product: ProductListState): ProductProp => ({
                loading: product.loading,
                productItems: product.productItems,
                currentPage: product.currentPage,
                itemCounts: product.itemCounts,
            }),
        ),
    );
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);

    React.useEffect(() => {
        dispatch(getProductList(currentPage));
    }, [currentPage]);

    return (
        <ProductContainer className="route-container">
            <Helemt title="PRODUCT" />
            <ProductListContainer>
                {productItems.map((item) => (
                    <ProductItem
                        key={item.id}
                        isInCart={cartItems.some(
                            (cartItem) => cartItem.id === item.id,
                        )}
                        {...item}
                    />
                ))}
                <Pagination currentPage={currentPage} itemCounts={itemCounts} />
            </ProductListContainer>
            <Loading isLoading={loading} />
        </ProductContainer>
    );
}

export default Product;
