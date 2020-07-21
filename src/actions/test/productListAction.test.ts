import {
    FETCH_PRODUCT_LIST_REQUEST,
    FETCH_PRODUCT_LIST_SUCCESS,
    FETCH_PRODUCT_LIST_FAILURE,
    CHANGE_PRODUCT_LIST_CURRENT_PAGE,
    fetchProductList,
    changeProductListCurrentPage,
} from 'actions/productListAction';
import { IProductItem } from 'models/IProductItem';

describe('couponAction 액션 테스트', () => {
    const testItem: IProductItem = {
        id: 'test',
        title: 'test',
        coverImage: 'test',
        price: 1,
        score: 1,
        availableCoupon: true,
    };

    it('상품 목록을 가져오는 요청 액션 테스트', () => {
        const expectedAction = {
            type: FETCH_PRODUCT_LIST_REQUEST,
        };
        expect(fetchProductList.request()).toEqual(expectedAction);
    });

    it('상품 목록을 가져오는데 성공한 액션 테스트', () => {
        const expectedAction = {
            type: FETCH_PRODUCT_LIST_SUCCESS,
            payload: {
                productItems: [testItem],
                itemCounts: 1,
            },
        };
        expect(
            fetchProductList.success({
                productItems: [testItem],
                itemCounts: 1,
            }),
        ).toEqual(expectedAction);
    });

    it('상품 목록을 가져오는데 실패한 액션 테스트', () => {
        const expectedAction = {
            type: FETCH_PRODUCT_LIST_FAILURE,
            payload: 'error',
        };
        expect(fetchProductList.failure('error')).toEqual(expectedAction);
    });

    it('상품 목록 페이지를 변경하는 액션 테스트', () => {
        const expectedAction = {
            type: CHANGE_PRODUCT_LIST_CURRENT_PAGE,
            payload: 1,
        };
        expect(changeProductListCurrentPage(1)).toEqual(expectedAction);
    });
});
