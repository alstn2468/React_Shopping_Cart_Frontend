import cartReducer from 'reducers/cartReducer';
import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    INCREASE_CART_PRODUCT_AMOUNT,
    DECREASE_CART_PRODUCT_AMOUNT,
    SELECT_PRODUCT_AT_CART,
    ADD_COUPON_AT_PRODUCT,
    REMOVE_COUPON_FROM_PRODUCT,
} from 'actions/cartAction';
import { ICartItem } from 'models/ICartItem';
import { ICouponItem } from 'models/ICouponItem';

describe('cartReducer 리듀서 테스트', () => {
    const testItems1: ICartItem = {
        id: 'test',
        title: 'test',
        coverImage: 'test',
        price: 1000,
        score: 1,
        availableCoupon: true,
        amount: 1,
        isSelected: false,
        coupon: null,
    };

    const testItems2: ICartItem = {
        id: 'test2',
        title: 'test2',
        coverImage: 'test2',
        price: 10000,
        score: 1,
        availableCoupon: false,
        amount: 1,
        isSelected: false,
        coupon: null,
    };

    const testCoupon: ICouponItem = {
        type: 'amount',
        title: '테스트쿠폰',
        discountAmount: 500,
    };

    it('카트에 상품을 추가하는 액션 테스트', () => {
        expect(
            cartReducer(
                {
                    cartItemCounts: 0,
                    cartItems: [],
                    price: 0,
                    discountPrice: 0,
                    error: null,
                },
                {
                    type: ADD_PRODUCT_TO_CART,
                    payload: { ...testItems1 },
                },
            ),
        ).toEqual({
            cartItemCounts: 1,
            cartItems: [{ ...testItems1 }],
            price: 0,
            discountPrice: 0,
            error: null,
        });
    });

    it('카트가 가득 찼을 때 카트에 상품을 추가하는 액션 테스트', () => {
        expect(
            cartReducer(
                {
                    cartItemCounts: 3,
                    cartItems: [
                        { ...testItems1 },
                        { ...testItems2 },
                        { ...testItems1 },
                    ],
                    price: 0,
                    discountPrice: 0,
                    error: null,
                },
                {
                    type: ADD_PRODUCT_TO_CART,
                    payload: { ...testItems1 },
                },
            ),
        ).toEqual({
            cartItemCounts: 3,
            cartItems: [
                { ...testItems1 },
                { ...testItems2 },
                { ...testItems1 },
            ],
            price: 0,
            discountPrice: 0,
            error: null,
        });
    });

    it('카트에서 상품을 제거하는 액션 테스트', () => {
        expect(
            cartReducer(
                {
                    cartItemCounts: 1,
                    cartItems: [{ ...testItems1 }],
                    price: 0,
                    discountPrice: 0,
                    error: null,
                },
                {
                    type: REMOVE_PRODUCT_FROM_CART,
                    payload: { ...testItems1 },
                },
            ),
        ).toEqual({
            cartItemCounts: 0,
            cartItems: [],
            price: 0,
            discountPrice: 0,
            error: null,
        });
    });

    it('카트에서 선택된 상품을 제거하는 액션 테스트', () => {
        expect(
            cartReducer(
                {
                    cartItemCounts: 1,
                    cartItems: [{ ...testItems1, isSelected: true }],
                    price: 1000,
                    discountPrice: 0,
                    error: null,
                },
                {
                    type: REMOVE_PRODUCT_FROM_CART,
                    payload: { ...testItems1, isSelected: true },
                },
            ),
        ).toEqual({
            cartItemCounts: 0,
            cartItems: [],
            price: 0,
            discountPrice: 0,
            error: null,
        });
    });

    it('카트에서 선택된 쿠폰이 있는 상품을 제거하는 액션 테스트', () => {
        expect(
            cartReducer(
                {
                    cartItemCounts: 1,
                    cartItems: [
                        { ...testItems1, isSelected: true, coupon: testCoupon },
                    ],
                    price: 1000,
                    discountPrice: 500,
                    error: null,
                },
                {
                    type: REMOVE_PRODUCT_FROM_CART,
                    payload: {
                        ...testItems1,
                        isSelected: true,
                        coupon: testCoupon,
                    },
                },
            ),
        ).toEqual({
            cartItemCounts: 0,
            cartItems: [],
            price: 0,
            discountPrice: 0,
            error: null,
        });
    });

    it('카트의 상품 개수를 증가시키는 액션 테스트', () => {
        expect(
            cartReducer(
                {
                    cartItemCounts: 1,
                    cartItems: [{ ...testItems1 }, { ...testItems2 }],
                    price: 0,
                    discountPrice: 0,
                    error: null,
                },
                {
                    type: INCREASE_CART_PRODUCT_AMOUNT,
                    payload: 'test',
                },
            ),
        ).toEqual({
            cartItemCounts: 1,
            cartItems: [
                { ...testItems1, amount: testItems1.amount + 1 },
                { ...testItems2 },
            ],
            price: 0,
            discountPrice: 0,
            error: null,
        });
    });

    it('카트의 선택된 상품 개수를 증가시키는 액션 테스트', () => {
        expect(
            cartReducer(
                {
                    cartItemCounts: 1,
                    cartItems: [
                        { ...testItems1, isSelected: true },
                        { ...testItems2 },
                    ],
                    price: 1000,
                    discountPrice: 0,
                    error: null,
                },
                {
                    type: INCREASE_CART_PRODUCT_AMOUNT,
                    payload: 'test',
                },
            ),
        ).toEqual({
            cartItemCounts: 1,
            cartItems: [
                {
                    ...testItems1,
                    isSelected: true,
                    amount: testItems1.amount + 1,
                },
                { ...testItems2 },
            ],
            price: 1000 * 2,
            discountPrice: 0,
            error: null,
        });
    });

    it('카트의 선택된 쿠폰이 있는 상품 개수를 증가시키는 액션 테스트', () => {
        expect(
            cartReducer(
                {
                    cartItemCounts: 1,
                    cartItems: [
                        { ...testItems1, isSelected: true, coupon: testCoupon },
                        { ...testItems2 },
                    ],
                    price: 1000,
                    discountPrice: 500,
                    error: null,
                },
                {
                    type: INCREASE_CART_PRODUCT_AMOUNT,
                    payload: 'test',
                },
            ),
        ).toEqual({
            cartItemCounts: 1,
            cartItems: [
                {
                    ...testItems1,
                    isSelected: true,
                    amount: testItems1.amount + 1,
                    coupon: testCoupon,
                },
                { ...testItems2 },
            ],
            price: 1000 * 2,
            discountPrice: 500,
            error: null,
        });
    });

    it('카트의 선택되지 않은 쿠폰이 있는 상품 개수를 증가시키는 액션 테스트', () => {
        expect(
            cartReducer(
                {
                    cartItemCounts: 1,
                    cartItems: [
                        { ...testItems1, coupon: testCoupon },
                        { ...testItems2 },
                    ],
                    price: 0,
                    discountPrice: 0,
                    error: null,
                },
                {
                    type: INCREASE_CART_PRODUCT_AMOUNT,
                    payload: 'test',
                },
            ),
        ).toEqual({
            cartItemCounts: 1,
            cartItems: [
                {
                    ...testItems1,
                    amount: testItems1.amount + 1,
                    coupon: testCoupon,
                },
                { ...testItems2 },
            ],
            price: 0,
            discountPrice: 0,
            error: null,
        });
    });

    it('카트의 상품 개수를 감소시키는 액션 테스트', () => {
        expect(
            cartReducer(
                {
                    cartItemCounts: 1,
                    cartItems: [
                        { ...testItems1, amount: testItems1.amount + 1 },
                        { ...testItems2 },
                    ],
                    price: 0,
                    discountPrice: 0,
                    error: null,
                },
                {
                    type: DECREASE_CART_PRODUCT_AMOUNT,
                    payload: 'test',
                },
            ),
        ).toEqual({
            cartItemCounts: 1,
            cartItems: [{ ...testItems1 }, { ...testItems2 }],
            price: 0,
            discountPrice: 0,
            error: null,
        });
    });

    it('카트의 선택된 쿠폰이 있는 상품 개수를 감소시키는 액션 테스트', () => {
        expect(
            cartReducer(
                {
                    cartItemCounts: 1,
                    cartItems: [
                        {
                            ...testItems1,
                            isSelected: true,
                            coupon: testCoupon,
                            amount: testItems1.amount + 1,
                        },
                        { ...testItems2 },
                    ],
                    price: 1000 * 2,
                    discountPrice: 500,
                    error: null,
                },
                {
                    type: DECREASE_CART_PRODUCT_AMOUNT,
                    payload: 'test',
                },
            ),
        ).toEqual({
            cartItemCounts: 1,
            cartItems: [
                {
                    ...testItems1,
                    isSelected: true,
                    amount: testItems1.amount,
                    coupon: testCoupon,
                },
                { ...testItems2 },
            ],
            price: 1000,
            discountPrice: 500,
            error: null,
        });
    });

    it('카트의 선택되지 않은 쿠폰이 있는 상품 개수를 감소시키는 액션 테스트', () => {
        expect(
            cartReducer(
                {
                    cartItemCounts: 1,
                    cartItems: [
                        {
                            ...testItems1,
                            coupon: testCoupon,
                            amount: testItems1.amount + 1,
                        },
                        { ...testItems2 },
                    ],
                    price: 0,
                    discountPrice: 0,
                    error: null,
                },
                {
                    type: DECREASE_CART_PRODUCT_AMOUNT,
                    payload: 'test',
                },
            ),
        ).toEqual({
            cartItemCounts: 1,
            cartItems: [
                {
                    ...testItems1,
                    amount: testItems1.amount,
                    coupon: testCoupon,
                },
                { ...testItems2 },
            ],
            price: 0,
            discountPrice: 0,
            error: null,
        });
    });

    it('카트의 상품을 선택하는 액션 테스트', () => {
        expect(
            cartReducer(
                {
                    cartItemCounts: 1,
                    cartItems: [{ ...testItems1 }, { ...testItems2 }],
                    price: 0,
                    discountPrice: 0,
                    error: null,
                },
                {
                    type: SELECT_PRODUCT_AT_CART,
                    payload: 'test',
                },
            ),
        ).toEqual({
            cartItemCounts: 1,
            cartItems: [{ ...testItems1, isSelected: true }, { ...testItems2 }],
            price: 1000,
            discountPrice: 0,
            error: null,
        });
    });

    it('카트의 쿠폰이 있는 상품을 선택하는 액션 테스트', () => {
        expect(
            cartReducer(
                {
                    cartItemCounts: 1,
                    cartItems: [
                        { ...testItems1, coupon: testCoupon },
                        { ...testItems2 },
                    ],
                    price: 0,
                    discountPrice: 0,
                    error: null,
                },
                {
                    type: SELECT_PRODUCT_AT_CART,
                    payload: 'test',
                },
            ),
        ).toEqual({
            cartItemCounts: 1,
            cartItems: [
                { ...testItems1, isSelected: true, coupon: testCoupon },
                { ...testItems2 },
            ],
            price: 1000,
            discountPrice: 500,
            error: null,
        });
    });

    it('카트의 상품을 취소하는 액션 테스트', () => {
        expect(
            cartReducer(
                {
                    cartItemCounts: 1,
                    cartItems: [
                        { ...testItems1, isSelected: true },
                        { ...testItems2 },
                    ],
                    price: 1000,
                    discountPrice: 0,
                    error: null,
                },
                {
                    type: SELECT_PRODUCT_AT_CART,
                    payload: 'test',
                },
            ),
        ).toEqual({
            cartItemCounts: 1,
            cartItems: [
                { ...testItems1, isSelected: false },
                { ...testItems2 },
            ],
            price: 0,
            discountPrice: 0,
            error: null,
        });
    });

    it('카트의 상품에 쿠폰을 추가하는 액션 테스트', () => {
        expect(
            cartReducer(
                {
                    cartItemCounts: 1,
                    cartItems: [{ ...testItems1 }, { ...testItems2 }],
                    price: 0,
                    discountPrice: 0,
                    error: null,
                },
                {
                    type: ADD_COUPON_AT_PRODUCT,
                    payload: { productId: 'test', coupon: testCoupon },
                },
            ),
        ).toEqual({
            cartItemCounts: 1,
            cartItems: [
                { ...testItems1, isSelected: true, coupon: testCoupon },
                { ...testItems2 },
            ],
            price: 1000,
            discountPrice: 500,
            error: null,
        });
    });

    it('카트의 선택된 상품에 쿠폰을 추가하는 액션 테스트', () => {
        expect(
            cartReducer(
                {
                    cartItemCounts: 1,
                    cartItems: [
                        { ...testItems1, isSelected: true },
                        { ...testItems2 },
                    ],
                    price: 1000,
                    discountPrice: 0,
                    error: null,
                },
                {
                    type: ADD_COUPON_AT_PRODUCT,
                    payload: { productId: 'test', coupon: testCoupon },
                },
            ),
        ).toEqual({
            cartItemCounts: 1,
            cartItems: [
                { ...testItems1, isSelected: true, coupon: testCoupon },
                { ...testItems2 },
            ],
            price: 1000,
            discountPrice: 500,
            error: null,
        });
    });

    it('카트의 상품에 쿠폰을 제거하는 액션 테스트', () => {
        expect(
            cartReducer(
                {
                    cartItemCounts: 1,
                    cartItems: [
                        { ...testItems1, isSelected: true, coupon: testCoupon },
                        { ...testItems2 },
                    ],
                    price: 1000,
                    discountPrice: 500,
                    error: null,
                },
                {
                    type: REMOVE_COUPON_FROM_PRODUCT,
                    payload: { productId: 'test', coupon: testCoupon },
                },
            ),
        ).toEqual({
            cartItemCounts: 1,
            cartItems: [{ ...testItems1, isSelected: true }, { ...testItems2 }],
            price: 1000,
            discountPrice: 0,
            error: null,
        });
    });
});
