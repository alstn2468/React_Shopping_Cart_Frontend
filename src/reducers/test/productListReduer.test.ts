import productListReducer from 'reducers/productListReducer';
import {
    CHANGE_PRODUCT_LIST_CURRENT_PAGE,
    FETCH_PRODUCT_LIST_REQUEST,
    FETCH_PRODUCT_LIST_SUCCESS,
    FETCH_PRODUCT_LIST_FAILURE,
} from 'actions/productListAction';
import { IProductItem } from 'models/IProductItem';

describe('productListReducer 리듀서 테스트', () => {
    const testItem: IProductItem = {
        id: 'test',
        title: 'test',
        coverImage: 'test',
        price: 1,
        score: 1,
        availableCoupon: true,
    };

    it('상품 목록 현재 페이지 번호를 바꾸는 액션 테스트', () => {
        expect(
            productListReducer(
                {
                    loading: false,
                    currentPage: 1,
                    productItems: [],
                    itemCounts: 0,
                    error: null,
                },
                {
                    type: CHANGE_PRODUCT_LIST_CURRENT_PAGE,
                    payload: 2,
                },
            ),
        ).toEqual({
            loading: false,
            currentPage: 2,
            productItems: [],
            itemCounts: 0,
            error: null,
        });
    });

    it('상품 목록을 요청하는 액션 테스트', () => {
        expect(
            productListReducer(
                {
                    loading: false,
                    currentPage: 1,
                    productItems: [],
                    itemCounts: 0,
                    error: null,
                },
                {
                    type: FETCH_PRODUCT_LIST_REQUEST,
                    payload: null,
                },
            ),
        ).toEqual({
            loading: true,
            currentPage: 1,
            productItems: [],
            itemCounts: 0,
            error: null,
        });
    });

    it('상품 목록 요청을 성공하는 액션 테스트', () => {
        expect(
            productListReducer(
                {
                    loading: true,
                    currentPage: 1,
                    productItems: [],
                    itemCounts: 0,
                    error: null,
                },
                {
                    type: FETCH_PRODUCT_LIST_SUCCESS,
                    payload: { productItems: [{ ...testItem }], itemCounts: 1 },
                },
            ),
        ).toEqual({
            loading: false,
            currentPage: 1,
            productItems: [{ ...testItem }],
            itemCounts: 1,
            error: null,
        });
    });

    it('상품 목록 요청을 실패하는 액션 테스트', () => {
        expect(
            productListReducer(
                {
                    loading: true,
                    currentPage: 1,
                    productItems: [],
                    itemCounts: 0,
                    error: null,
                },
                {
                    type: FETCH_PRODUCT_LIST_FAILURE,
                    payload: 'error',
                },
            ),
        ).toEqual({
            loading: false,
            currentPage: 1,
            productItems: [],
            itemCounts: 0,
            error: 'error',
        });
    });
});
