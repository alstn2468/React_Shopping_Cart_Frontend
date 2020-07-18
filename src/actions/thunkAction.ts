import { ThunkAction } from 'redux-thunk';
import productItems from 'data/productItems';
import coupons from 'data/coupons';
import { ProductListAction, fetchProductList } from 'actions/productListAction';
import { CouponAction, fetchCouponList } from 'actions/couponAction';
import { CouponState } from 'reducers/couponReducer';
import { ProductListState } from 'reducers/productListReducer';
import { ICouponItem } from 'models/ICouponItem';

export function getProductList(
    page: number,
): ThunkAction<Promise<void>, ProductListState, null, ProductListAction> {
    return async (dispatch) => {
        const { request, success, failure } = fetchProductList;

        dispatch(request());

        try {
            let productList = [...productItems];
            const itemCounts = productList.length;

            await new Promise((resolve) => setTimeout(resolve, 1000));

            productList = productList.sort(
                (productA, productB) => productB.score - productA.score,
            );
            productList = productList.slice((page - 1) * 5, (page - 1) * 5 + 5);

            dispatch(success({ productItems: productList, itemCounts }));
        } catch (e) {
            dispatch(failure(e));
        }
    };
}

export function getCouponList(): ThunkAction<
    Promise<void>,
    CouponState,
    null,
    CouponAction
> {
    return async (dispatch) => {
        const { request, success, failure } = fetchCouponList;

        dispatch(request());

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const couponList: ICouponItem[] = [...coupons];

            dispatch(success({ coupons: couponList }));
        } catch (e) {
            dispatch(failure(e));
        }
    };
}
