import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    INCREASE_CART_PRODUCT_AMOUNT,
    DECREASE_CART_PRODUCT_AMOUNT,
    SELECT_PRODUCT_AT_CART,
    ADD_COUPON_AT_PRODUCT,
    REMOVE_COUPON_FROM_PRODUCT,
    addProductToCart,
    removeProductFromCart,
    increaseCartProductAmount,
    decreaseCartProductAmount,
    selectProductAtCart,
    addCouponAtProduct,
    removeCouponFromProduct,
} from 'actions/cartAction';
import { ICartItem } from 'models/ICartItem';
import { ICouponItem } from 'models/ICouponItem';

describe('cartAction 액션 테스트', () => {
    const testItem: ICartItem = {
        id: 'test',
        title: 'test',
        coverImage: 'test',
        price: 1,
        score: 1,
        availableCoupon: true,
        amount: 100,
        isSelected: false,
        coupon: null,
    };

    const testCoupon: ICouponItem = {
        type: 'rate',
        title: 'test',
        discountRate: 10,
    };

    it('카트에 상품을 추가하는 액션 테스트', () => {
        const expectedAction = {
            type: ADD_PRODUCT_TO_CART,
            payload: testItem,
        };
        expect(addProductToCart(testItem)).toEqual(expectedAction);
    });

    it('카트에서 상품을 제거하는 액션 테스트', () => {
        const expectedAction = {
            type: REMOVE_PRODUCT_FROM_CART,
            payload: testItem,
        };
        expect(removeProductFromCart(testItem)).toEqual(expectedAction);
    });

    it('카트의 상품 개수를 증가시키는 액션 테스트', () => {
        const expectedAction = {
            type: INCREASE_CART_PRODUCT_AMOUNT,
            payload: 'test',
        };
        expect(increaseCartProductAmount('test')).toEqual(expectedAction);
    });

    it('카트의 상품 개수를 감소시키는 액션 테스트', () => {
        const expectedAction = {
            type: DECREASE_CART_PRODUCT_AMOUNT,
            payload: 'test',
        };
        expect(decreaseCartProductAmount('test')).toEqual(expectedAction);
    });

    it('카트의 상품을 선택, 취소하는 액션 테스트', () => {
        const expectedAction = {
            type: SELECT_PRODUCT_AT_CART,
            payload: 'test',
        };
        expect(selectProductAtCart('test')).toEqual(expectedAction);
    });

    it('카트의 상품에 쿠폰을 적용하는 액션 테스트', () => {
        const expectedAction = {
            type: ADD_COUPON_AT_PRODUCT,
            payload: { productId: 'test', coupon: testCoupon },
        };
        expect(
            addCouponAtProduct({ productId: 'test', coupon: testCoupon }),
        ).toEqual(expectedAction);
    });

    it('카트의 상품의 쿠폰을 제거하는 액션 테스트', () => {
        const expectedAction = {
            type: REMOVE_COUPON_FROM_PRODUCT,
            payload: { productId: 'test', coupon: testCoupon },
        };
        expect(
            removeCouponFromProduct({ productId: 'test', coupon: testCoupon }),
        ).toEqual(expectedAction);
    });
});
