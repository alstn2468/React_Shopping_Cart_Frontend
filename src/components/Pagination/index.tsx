import * as React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'reducers';
import { changeProductListCurrentPage } from 'actions/productListAction';
import PaginationButton from 'components/Pagination/PaginationButton';
import { generatePaginationPatter } from 'utils/generatePaginationPattern';
import { createSelector } from 'reselect';
import { ProductListState } from 'reducers/productListReducer';

type PaginationProp = {
    currentPage: number;
    itemCounts: number;
};

const PaginationContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

function Pagination(): React.ReactElement {
    const dispatch = useDispatch();
    const { currentPage, itemCounts } = useSelector(
        createSelector(
            (state: RootState): ProductListState => state.product,
            (product: ProductListState): PaginationProp => ({
                currentPage: product.currentPage,
                itemCounts: product.itemCounts,
            }),
        ),
    );
    const range = Math.ceil(itemCounts / 5);
    const pattern = generatePaginationPatter(range, currentPage);

    return (
        range !== 0 && (
            <PaginationContainer>
                <PaginationButton
                    onButtonClicked={() =>
                        dispatch(changeProductListCurrentPage(currentPage - 1))
                    }
                    currentPage={currentPage}
                    range={range}
                    children="<"
                />
                {pattern.map((label: number | string) => (
                    <PaginationButton
                        key={`pagination-${label}-button`}
                        onButtonClicked={() =>
                            typeof label === 'number' &&
                            dispatch(changeProductListCurrentPage(label))
                        }
                        children={label}
                        currentPage={currentPage}
                        range={range}
                    />
                ))}
                <PaginationButton
                    onButtonClicked={() =>
                        dispatch(changeProductListCurrentPage(currentPage + 1))
                    }
                    currentPage={currentPage}
                    range={range}
                    children=">"
                />
            </PaginationContainer>
        )
    );
}

export default Pagination;
