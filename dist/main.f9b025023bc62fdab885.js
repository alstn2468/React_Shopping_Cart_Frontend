!function(e){function t(t){for(var i,a,l=t[0],c=t[1],d=t[2],u=0,f=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);for(s&&s(t);f.length;)f.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},o={0:0},r=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var s=c;r.push([36,1]),n()}([,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.closeCouponModalDialog=t.openCouponModalDialog=t.fetchCouponList=t.removeCouponFromList=t.addCouponToList=t.CLOSE_COUPON_MODAL_DIALOG=t.OPEN_COUPON_MODAL_DIALOG=t.FETCH_COUPON_LIST_FAILURE=t.FETCH_COUPON_LIST_SUCCESS=t.FETCH_COUPON_LIST_REQUEST=t.REMOVE_COUPON_FROM_LIST=t.ADD_COUPON_TO_LIST=void 0;const i=n(10);t.ADD_COUPON_TO_LIST="ADD_COUPON_TO_LIST",t.REMOVE_COUPON_FROM_LIST="REMOVE_COUPON_FROM_LIST",t.FETCH_COUPON_LIST_REQUEST="FETCH_COUPON_LIST_REQUEST",t.FETCH_COUPON_LIST_SUCCESS="FETCH_COUPON_LIST_SUCCESS",t.FETCH_COUPON_LIST_FAILURE="FETCH_COUPON_LIST_FAILURE",t.OPEN_COUPON_MODAL_DIALOG="OPEN_COUPON_MODAL_DIALOG",t.CLOSE_COUPON_MODAL_DIALOG="CLOSE_COUPON_MODAL_DIALOG";const{createStandardAction:o}=i.deprecated;t.addCouponToList=o(t.ADD_COUPON_TO_LIST)(),t.removeCouponFromList=o(t.REMOVE_COUPON_FROM_LIST)(),t.fetchCouponList=i.createAsyncAction(t.FETCH_COUPON_LIST_REQUEST,t.FETCH_COUPON_LIST_SUCCESS,t.FETCH_COUPON_LIST_FAILURE)(),t.openCouponModalDialog=o(t.OPEN_COUPON_MODAL_DIALOG)(),t.closeCouponModalDialog=o(t.CLOSE_COUPON_MODAL_DIALOG)();t.addCouponToList,t.removeCouponFromList,t.fetchCouponList,t.openCouponModalDialog,t.closeCouponModalDialog},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeCouponFromProduct=t.addCouponAtProduct=t.selectProductAtCart=t.decreaseCartProductAmount=t.increaseCartProductAmount=t.removeProductFromCart=t.addProductToCart=t.REMOVE_COUPON_FROM_PRODUCT=t.ADD_COUPON_AT_PRODUCT=t.SELECT_PRODUCT_AT_CART=t.DECREASE_CART_PRODUCT_AMOUNT=t.INCREASE_CART_PRODUCT_AMOUNT=t.REMOVE_PRODUCT_FROM_CART=t.ADD_PRODUCT_TO_CART=void 0;const i=n(10);t.ADD_PRODUCT_TO_CART="ADD_PRODUCT_TO_CART",t.REMOVE_PRODUCT_FROM_CART="REMOVE_PRODUCT_FROM_CART",t.INCREASE_CART_PRODUCT_AMOUNT="INCREASE_CART_PRODUCT_AMOUNT",t.DECREASE_CART_PRODUCT_AMOUNT="DECREASE_CART_PRODUCT_AMOUNT",t.SELECT_PRODUCT_AT_CART="SELECT_BUYING_PRODUCT_AT_CART",t.ADD_COUPON_AT_PRODUCT="ADD_COUPON_AT_PRODUCT",t.REMOVE_COUPON_FROM_PRODUCT="REMOVE_COUPON_FROM_PRODUCT";const{createStandardAction:o}=i.deprecated;t.addProductToCart=o(t.ADD_PRODUCT_TO_CART)(),t.removeProductFromCart=o(t.REMOVE_PRODUCT_FROM_CART)(),t.increaseCartProductAmount=o(t.INCREASE_CART_PRODUCT_AMOUNT)(),t.decreaseCartProductAmount=o(t.DECREASE_CART_PRODUCT_AMOUNT)(),t.selectProductAtCart=o(t.SELECT_PRODUCT_AT_CART)(),t.addCouponAtProduct=o(t.ADD_COUPON_AT_PRODUCT)(),t.removeCouponFromProduct=o(t.REMOVE_COUPON_FROM_PRODUCT)();t.addProductToCart,t.removeProductFromCart,t.increaseCartProductAmount,t.decreaseCartProductAmount,t.selectProductAtCart,t.addCouponAtProduct,t.removeCouponFromProduct},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.numberWithComma=void 0,t.numberWithComma=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.changeProductListCurrentPage=t.fetchProductList=t.CHANGE_PRODUCT_LIST_CURRENT_PAGE=t.FETCH_PRODUCT_LIST_FAILURE=t.FETCH_PRODUCT_LIST_SUCCESS=t.FETCH_PRODUCT_LIST_REQUEST=void 0;const i=n(10);t.FETCH_PRODUCT_LIST_REQUEST="FETCH_PRODUCT_LIST_REQUEST",t.FETCH_PRODUCT_LIST_SUCCESS="FETCH_PRODUCT_LIST_SUCCESS",t.FETCH_PRODUCT_LIST_FAILURE="FETCH_PRODUCT_LIST_FAILURE",t.CHANGE_PRODUCT_LIST_CURRENT_PAGE="CHANGE_PRODUCT_LIST_CURRENT_PAGE",t.fetchProductList=i.createAsyncAction(t.FETCH_PRODUCT_LIST_REQUEST,t.FETCH_PRODUCT_LIST_SUCCESS,t.FETCH_PRODUCT_LIST_FAILURE)();const{createStandardAction:o}=i.deprecated;t.changeProductListCurrentPage=o(t.CHANGE_PRODUCT_LIST_CURRENT_PAGE)();t.fetchProductList,t.changeProductListCurrentPage},,,,,,,function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function l(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}c((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getCouponList=t.getProductList=void 0;const o=n(56),r=n(57),a=n(20),l=n(11);t.getProductList=function(e){return t=>i(this,void 0,void 0,(function*(){const{request:n,success:i,failure:r}=a.fetchProductList;t(n());try{let n=[...o.default];const r=n.length;yield new Promise(e=>setTimeout(e,1e3)),n=n.sort((e,t)=>t.score-e.score),n=n.slice(5*(e-1),5*(e-1)+5),t(i({productItems:n,itemCounts:r}))}catch(e){t(r(e))}}))},t.getCouponList=function(e){return t=>i(this,void 0,void 0,(function*(){const{request:n,success:i,failure:o}=l.fetchCouponList;t(n());try{yield new Promise(e=>setTimeout(e,1e3));const n=e.map(e=>e.coupon).filter(Boolean).map(e=>e.title),o=[...r.default.filter(e=>!n.includes(e.title))];t(i({coupons:o}))}catch(e){t(o(e))}}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),o=n(58),r=n(59);t.default=function({title:e,description:t}){const n="준비물까지 챙겨주는 온라인 클래스",a="내가 찾던 모든 배움의 시작. 클래스101과 함께 언제 어디서든 즐겨봐요.";return i.createElement(o.Helmet,null,i.createElement("title",null,"클래스101 | ",e||n),i.createElement("meta",{name:"description",content:t||a}),i.createElement("link",{rel:"shortcut icon",href:r.default}),i.createElement("meta",{property:"og:title",content:"클래스101 | "+(e||n)}),i.createElement("meta",{property:"og:description",content:t||a}),i.createElement("meta",{property:"og:image",content:"https://alstn2468.github.io/React_Shopping_Cart_Frontend/images/meta-image.jpg"}),i.createElement("meta",{property:"og:url",content:"https://alstn2468.github.io/React_Shopping_Cart_Frontend/"}),i.createElement("meta",{property:"og:type",content:"website"}),i.createElement("meta",{name:"twitter:title",content:"클래스101 | "+(e||n)}),i.createElement("meta",{name:"twitter:description",content:t||a}),i.createElement("meta",{name:"twitter:image",content:"https://alstn2468.github.io/React_Shopping_Cart_Frontend/images/meta-image.jpg"}))}},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/logo.png"},,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),o=n(18),r=n(41),a=n(7),l=n(71);o.render(i.createElement(a.Provider,{store:l.default},i.createElement(r.default,null)),document.getElementById("root"))},,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),o=n(42),r=n(67),a=n(69),l=n(70);t.default=function(){const{isMobile:e}=l.useDeviceDetect();return i.createElement(i.StrictMode,null,i.createElement(r.default,null),e?i.createElement(a.default,null):i.createElement(o.default,null))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),o=n(21),r=n(47),a=n(51),l=n(28),c=n(60),d=n(61);t.default=function(){return i.createElement(o.HashRouter,null,i.createElement(l.default,null),i.createElement(c.default,null),i.createElement(o.Switch,null,i.createElement(o.Route,{path:"/",exact:!0,component:r.default}),i.createElement(o.Route,{path:"/products",exact:!0,component:d.default}),i.createElement(o.Route,{path:"/cart",exact:!0,component:a.default}),i.createElement(o.Redirect,{path:"*",to:"/"})))}},,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),o=n(4),r=n(49),a=n(50),l=n(21),c=o.default.div`
    display: flex;
    height: calc(100% - 60px);
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
`,d=o.default.video`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: fill;
    background-color: #ffffff;
`,s=o.default.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,u=o.default.div`
    display: inline-block;
    margin-bottom: 50px;
    text-align: center;
`,f=o.default.img`
    height: 60px;
    width: auto;
    margin-bottom: 10px;
`,p=o.default.p`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #ffffff;
    text-align: center;
`,m=o.default(l.Link)`
    width: 300px;
    text-align: center;
    color: #ffffff;
    background-color: transparent;
    font-size: 1.6rem;
    border: 1px solid #ffffff;
    padding: 20px;
    font-weight: bold;
    transition: transform 0.5s ease;

    &:focus {
        outline: none;
    }

    &:hover {
        transform: scale(1.1);
    }
`;t.default=function(){return i.createElement(c,null,i.createElement(d,{autoPlay:!0,muted:!0,loop:!0,src:a.default}),i.createElement(s,null,i.createElement(u,null,i.createElement(f,{src:r.default}),i.createElement(p,null,"준비물까지 챙겨주는 온라인 취미 클래스")),i.createElement(m,{to:"/products"},"지금 바로 시작하기")))}},,function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/main-logo.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"videos/main.mp4"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),o=n(4),r=n(7),a=n(13),l=n(53),c=n(54),d=n(15),s=o.default.div`
    display: flex;
    width: 80%;
    height: 80%;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
`,u=o.default.div`
    width: 100%;
    height: 80%;
    display: flex;
    padding: 20px 0;
    flex-direction: row;
`,f=o.default.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    flex-direction: column;
`,p=o.default(a.AiOutlineShopping)`
    width: 5%;
    height: auto;
    margin: 10px 0;
`,m=o.default.div`
    width: calc(100% - 40px);
    border: 1px solid #c6c6c6;
    color: #000000;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 30px 40px;
`,g=o.default.div`
    display: flex;
    flex-direction: row;
    font-size: 18px;
    color: #000000;
    align-items: center;
    margin: 5px 0;
`,_=o.default.div`
    min-width: 100px;
    text-align: right;
`,C=o.default.div`
    margin-left: 10px;
    min-width: 160px;
    text-align: right;
`,O=o.default.button`
    margin-top: 20px;
    height: 50px;
    width: 240px;
    font-size: 18px;
    font-weight: 600;
    padding: 2px 0;
    color: #ffffff;
    background-color: #000000;
    border: none;

    &:focus {
        outline: none;
    }
`;t.default=function(){const{cartItems:e,price:t,discountPrice:n}=r.useSelector(e=>e.cart);return i.createElement(s,null,e.length>=1?i.createElement(i.Fragment,null,i.createElement(u,null,e.map(e=>i.createElement(l.default,Object.assign({key:e.id},e)))),i.createElement(m,null,i.createElement(g,null,i.createElement(_,null,"상품 금액"),i.createElement(C,null,d.numberWithComma(t),"원")),i.createElement(g,null,i.createElement(_,null,"할인 금액"),i.createElement(C,null,d.numberWithComma(n),"원")),i.createElement(g,null,i.createElement(_,null,"총 금액"),i.createElement(C,null,d.numberWithComma(t-n),"원")),i.createElement(O,{onClick:()=>alert(`총 금액 ${d.numberWithComma(t-n)} 원 구매 완료`)},"구매하기"))):i.createElement(f,null,i.createElement(p,null),"장바구니가 비어있습니다."),i.createElement(c.default,null))}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),o=n(4),r=n(7),a=n(26),l=n(14),c=n(11),d=n(15),s=o.default.div`
    position: relative;
    display: flex;
    width: calc(33.333333% - 40px);
    height: auto;
    justify-content: space-between;
    margin: 20px;
    padding: 20px;
    flex-direction: column;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 1px, rgba(0, 0, 0, 0.03) 0px 2px 5px,
        rgba(0, 0, 0, 0.04) 0px 3px 7px, rgba(0, 0, 0, 0.04) 0px 7px 10px;
    border-radius: 5px;
`,u=o.default.div`
    line-height: 0px;
    height: 20px;
`,f=o.default.div`
    min-width: 20px;
    height: 20px;
    padding-left: 6px;
    padding-right: 6px;
    background-color: ${e=>e.backgroundColor};
    display: inline-flex;
    align-items: center;
    border-radius: 3px;
    flex: 0 0 auto;
    margin-right: 4px;
`,p=o.default.div`
    font-size: 9px;
    line-height: 12px;
    letter-spacing: normal;
    color: ${e=>e.color};
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    margin: 0px;
`,m=o.default.button`
    position: absolute;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    width: 30px;
    height: 30px;
    top: 10px;
    right: 15px;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`,g=o.default(a.MdClear)`
    width: 25px;
    height: 25px;
`,_=o.default.img`
    height: 250px;
    width: 100%;
    border-radius: 5px;
    margin: 8px 0;
`,C=o.default.div``,O=o.default.h2`
    margin-top: 10px;
    font-size: 15px;
    font-weight: 600;
    height: 20px;
`,h=o.default.hr`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid rgb(242, 244, 245);
`,b=o.default.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgb(27, 28, 29);
    font-size: 13px;
    margin-top: 10px;
    margin-bottom: 5px;
`,E=o.default.div`
    color: rgb(27, 28, 29);
`,x=o.default.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`,P=o.default.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #000000;
    transition: all 0.5s ease;
    border-radius: 3px;

    &:active {
        background-color: #000000;
        color: #ffffff;
    }

    &:focus {
        outline: none;
    }
`,T=o.default.div`
    margin: 0 6px;
    width: 10px;
    text-align: center;
`,v=o.default.div`
    display: flex;
    flex-direction: row;
`,y=o.default.button`
    height: 40px;
    width: 120px;
    min-width: 120px;
    font-size: 12px;
    font-weight: 600;
    padding: 2px 0;
    color: #ffffff;
    background-color: #000000;
    border: none;
    cursor: ${e=>e.availableCoupon&&"pointer"};
    visibility: ${e=>!e.availableCoupon&&"hidden"};

    &:focus {
        outline: none;
    }
`,R=o.default.button`
    height: 40px;
    width: 60px;
    font-size: 12px;
    font-weight: 600;
    padding: 2px 0;
    color: #000000;
    background-color: #ffffff;
    border: 1px solid #000000;

    &:focus {
        outline: none;
    }
`,U=o.default.div`
    height: 40px;
    width: calc(100% - 120px);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 16px;
`,A=o.default.input.attrs({type:"checkbox"})`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,S=o.default.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
`,D=o.default.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #000000;
    background: ${e=>e.isSelected?"#000000":"#ffffff"};
    border-radius: 3px;
    transition: all 150ms;

    ${S} {
        visibility: ${e=>e.isSelected?"visible":"hidden"};
    }
`,I=o.default.div`
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
`;t.default=function({id:e,title:t,coverImage:n,price:o,score:a,availableCoupon:L=!0,amount:w,isSelected:j=!1,coupon:M}){const F={id:e,title:t,coverImage:n,price:o,score:a,availableCoupon:L,amount:w,isSelected:j,coupon:M},N=r.useDispatch();return i.createElement(s,null,i.createElement(m,{onClick:()=>N(l.removeProductFromCart(F))},i.createElement(g,null)),i.createElement(u,null,i.createElement(I,null,i.createElement(A,null),i.createElement(D,{isSelected:j,onClick:()=>N(l.selectProductAtCart(e))},i.createElement(S,{viewBox:"0 0 24 24"},i.createElement("polyline",{points:"20 6 9 17 4 12"})))),i.createElement(f,{backgroundColor:"#000000"},i.createElement(p,{color:"#ffffff"},a,"명의 선택")),L&&i.createElement(f,{backgroundColor:"red"},i.createElement(p,{color:"#ffffff"},"쿠폰 적용 가능"))),i.createElement(_,{src:n}),i.createElement(C,null,i.createElement(O,null,t),i.createElement(b,null,i.createElement(E,null,d.numberWithComma(o),"원"),i.createElement(x,null,i.createElement(P,{disabled:w<=1,onClick:()=>N(l.decreaseCartProductAmount(e))},"-"),i.createElement(T,null,w),i.createElement(P,{onClick:()=>N(l.increaseCartProductAmount(e))},"+")))),i.createElement(h,null),i.createElement(v,null,i.createElement(y,{disabled:!L,availableCoupon:L,onClick:()=>N(c.openCouponModalDialog(e))},L?Boolean(M)?""+M.title:"쿠폰 적용하기":"쿠폰 적용 불가"),L&&Boolean(M)&&i.createElement(R,{onClick:()=>{N(l.removeCouponFromProduct({productId:e,coupon:M})),N(c.addCouponToList(M))}},"취소"),i.createElement(U,null,"총 ",d.numberWithComma(o*w)," 원")))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),o=n(7),r=n(4),a=n(13),l=n(55),c=n(11),d=n(27),s=r.default.div`
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`,u=r.default.div`
    width: 400px;
    height: 300px;
    background-color: #ffffff;
    color: #000000;
    border-radius: 10px;
`,f=r.default.div`
    height: 30px;
    width: 100%;
    background-color: #000000;
    border-radius: 10px 10px 0 0;
    padding: 0 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`,p=r.default(a.AiOutlineCloseCircle)`
    fill: #ffffff;
    width: 18px;
    height: auto;
`,m=r.default.button`
    width: 18px;
    height: 18px;
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`,g=r.default.div`
    width: 100%;
    height: 270px;
    padding: 10px 0;
    overflow: auto;
`,_=r.default.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`,C=r.default.div`
    height: 50px;
    width: 50px;
    margin: 0 auto;
    border: 6px solid #000;
    border-top: 6px solid #fff;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`,O=r.default.div`
    margin: 0 auto;
    font-size: 22px;
    color: #000000;
    text-align: center;
    margin: 15px;
`;t.default=function(){const e=o.useDispatch(),{cartItems:t}=o.useSelector(e=>e.cart),{loading:n,isOpen:r,coupons:a,error:h}=o.useSelector(e=>e.coupon);return i.useEffect(()=>{r&&e(d.getCouponList(t))},[r]),r&&i.createElement(s,null,i.createElement(u,null,i.createElement(f,null,i.createElement(m,{onClick:()=>e(c.closeCouponModalDialog())},i.createElement(p,null))),i.createElement(g,null,n?i.createElement(_,null,i.createElement(C,null),i.createElement(O,null,"Loading...")):a.map((e,t)=>i.createElement(l.default,Object.assign({key:"coupon-"+t},e))))))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),o=n(4),r=n(7),a=n(15),l=n(14),c=n(11),d=o.default.div`
    width: 80%;
    height: 80px;
    min-height: min-content;
    border: 1px solid #000000;
    display: flex;
    flex-direction: row;
    margin: 10px auto;
    cursor: pointer;
`,s=o.default.div`
    height: 80px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    color: #ffffff;
    width: 35%;
`,u=o.default.div`
    position: absolute;
    top: calc(50% - 10px);
    width: 25px;
    height: 25px;
    left: -17px;
    background-color: #ffffff;
    border-radius: 100%;
`,f=o.default.div`
    height: 80px;
    width: 65%;
    display: flex;
    justify-content: center;
    align-items: center;
`;t.default=function({type:e,title:t,discountAmount:n,discountRate:o}){const p=r.useDispatch(),{selectedProductId:m}=r.useSelector(e=>e.coupon),g={type:e,title:t,discountAmount:n,discountRate:o};return i.createElement(d,{onDoubleClick:()=>{p(l.addCouponAtProduct({productId:m,coupon:g})),p(c.removeCouponFromList(g)),p(c.closeCouponModalDialog())}},i.createElement(s,null,i.createElement(u,null),"rate"===e?o+" %":a.numberWithComma(n)+"원"),i.createElement(f,null,t))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=[{id:"B9vUv0E0ibc0X55kVVLr",title:"포근한 니트로 만드는 나만의 글씨, 봉봉메이드 니트레터링 클래스",coverImage:"https://cdn.class101.net/images/3a25ecd9-d1ab-4d21-8cc1-522ea711e729",price:56e4,score:200},{id:"81x83ysiEHsHCBoeVh2O",title:"글씨가 주는 소소한 행복, Lettering Together!",coverImage:"https://cdn.class101.net/images/ec0f0c15-aeec-43a3-a0c9-b649b0999f0a",price:32e4,score:300},{id:"ZXV8mCcvbpXKm5J5snUq",title:"붓펜으로 그려낸 보통날, 보통의 글씨",coverImage:"https://cdn.class101.net/images/a363a069-5aaf-40cb-822e-a2cab585c37e",price:24e4,score:350},{id:"tpP45lSwqf1X1yEEFqL4",title:"수놓는 발바닥과 함께 하는 꽁냥꽁냥 고양이 자수",coverImage:"https://cdn.class101.net/images/e6b7bde6-b23d-447f-9cdf-3879caf7eb13",price:9e4,score:120,availableCoupon:!1},{id:"nc9XiAWAN4uhNr6pDqlG",title:"소복소복 바늘 끝에서 피어오르는 자수",coverImage:"https://cdn.class101.net/images/38f79b22-4728-4c16-bee9-966fff07df3f",price:23e4,score:640},{id:"ndHkNPUpGPiF4nmqX0PL",title:"한 땀 한 땀 꽃을 수 놓다 - 보태니컬 입체 프랑스 자수",coverImage:"https://cdn.class101.net/images/132a560b-ba7f-4564-b5f5-709b934f5ddd",price:32e4,score:200},{id:"TQw8gmqYK2KrKcP1ibWb",title:"내가 그리고, 네가 간직할 인공의 아이패드 드로잉",coverImage:"https://cdn.class101.net/images/f926a844-cfeb-4983-a39a-fb55a0b3fd0b",price:32e4,score:190,availableCoupon:!1},{id:"pHr0phFtcWhsgZhSVe9F",title:"글씨 쓰는 김이영과 함께 아이패드에 그려낸 캘리그라피",coverImage:"https://cdn.class101.net/images/864f377f-93d9-4520-94de-19ca142c432f",price:123e3,score:453},{id:"4tVyp15jKUO6sfUvLnBc",title:"또 다른 나를 그리다, 동글의 아이패드 캐릭터 드로잉",coverImage:"https://cdn.class101.net/images/0a6a86b9-f1ed-4b90-9d53-cbbb0413989d",price:345e3,score:300,availableCoupon:!1},{id:"CNCwXwHP7FUip83z5VEH",title:"평범한 일상에 색을 더하는 시간, 자토의 아이패드 드로잉",coverImage:"https://cdn.class101.net/images/9e7be50d-72f1-4c93-80d6-c6b95b42bd40",price:5e4,score:300},{id:"vgrdHO9bLqNxDYt4Q7vZ",title:"리노와 아이패드로 시작하는 디지털캘리그라피",coverImage:"https://cdn.class101.net/images/1ea53728-c3f7-4fe9-a485-88c9a130b3b4",price:564e3,score:150},{id:"gGFsFvhrKlvZpjLRfmNY",title:"디지털로 만들어내는 아날로그 감성, 해란의 아이패드 드로잉",coverImage:"https://cdn.class101.net/images/cbadec97-d306-4669-bbcf-eef5d1a9d261",price:23e4,score:220}]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=[{type:"rate",title:"10% 할인 쿠폰",discountRate:10},{type:"amount",title:"10,000원 할인 쿠폰",discountAmount:1e4},{type:"amount",title:"20,000원 할인 쿠폰",discountAmount:2e4},{type:"rate",title:"5% 할인 쿠폰",discountRate:5}]},,function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/favicon.ico"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),o=n(4),r=n(7),a=n(21),l=n(29),c=o.default.header`
    display: flex;
    flex: 1;
    height: 60px;
    width: 100%;
    padding: 0 3rem;
    box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.12);
`,d=o.default.ul`
    display: flex;
    flex: 1;
    justify-content: flex-end;
`,s=o.default.li`
    width: 100px;
    height: 60px;
    text-align: center;
    border-bottom: 3px solid
        ${e=>e.current?"#000000":"transparent"};
    transition: border-bottom 0.5s ease-in-out;

    &:focus {
        outline: none;
    }
`,u=o.default(a.Link)`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    &:hover {
        font-weight: 600;
    }
`,f=o.default.div`
    flex: 1;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`,p=o.default.img`
    width: 150px;
    height: auto;
`;t.default=a.withRouter((function({location:{pathname:e}}){const{cartItemCounts:t}=r.useSelector(e=>e.cart);return i.createElement(c,null,i.createElement(f,null,i.createElement(p,{src:l.default})),i.createElement(d,null,i.createElement(s,{current:"/"===e},i.createElement(u,{to:"/"},"HOME")),i.createElement(s,{current:"/products"===e},i.createElement(u,{to:"/products"},"PRODUCTS")),i.createElement(s,{current:"/cart"===e},i.createElement(u,{to:"/cart"},"CART (",t,")"))))}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),o=n(4),r=n(7),a=n(28),l=n(62),c=n(63),d=n(64),s=n(27),u=o.default.div`
    width: 80%;
    height: auto;
    margin: 0 auto;
    scrollbar-width: none;
`,f=o.default.ul`
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
    padding: 30px;
    text-align: center;
`;t.default=function(){const e=r.useDispatch(),{loading:t,productItems:n,currentPage:o,itemCounts:p}=r.useSelector(e=>e.product),{cartItems:m}=r.useSelector(e=>e.cart);return i.useEffect(()=>{e(s.getProductList(o))},[o]),i.createElement(u,{className:"route-container"},i.createElement(a.default,{title:"PRODUCT"}),i.createElement(f,null,n.map(e=>i.createElement(d.default,Object.assign({key:e.id,isInCart:m.some(t=>t.id===e.id)},e))),i.createElement(c.default,{currentPage:o,range:Math.ceil(p/5)})),i.createElement(l.default,{isLoading:t}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),o=n(4),r=o.default.div`
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.8s ease;
    display: ${e=>e.isLoading?"flex":"none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`,a=o.default.div`
    height: 80px;
    width: 80px;
    border: 6px solid #fff;
    border-top: 6px solid #000;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`,l=o.default.div`
    font-size: 28px;
    color: #fff;
    margin: 15px;
`;t.default=function({isLoading:e}){return i.createElement(r,{isLoading:e},i.createElement(a,null),i.createElement(l,null,"Loading..."))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),o=n(4),r=n(7),a=n(20),l=o.default.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`,c=o.default.button`
    height: 100%;
    width: 40px;
    margin: 0 5px;
    color: ${e=>e.isActive?"#ffffff":"#000000"};
    background-color: ${e=>e.isActive?"rgba(0, 0, 0, 0.7)":"#f2f2f2"};
    visibility: ${e=>e.isFirst||e.isLast?"hidden":"visible"};
    border: none;
    border-radius: 50%;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;t.default=function({currentPage:e,range:t}){const n=r.useDispatch();let o=null;switch(!0){case t<7:o=[...new Array(t)].map((e,t)=>t+1);break;case e<4:o=[1,2,3,4,5,"...",t];break;case e>t-4:o=[1,"...",t-4,t-3,t-2,t-1,t];break;default:o=[1,"...",e-1,e,e+1,"...",t]}return 0!==t&&i.createElement(l,null,i.createElement(c,{disabled:e<=1,onClick:()=>n(a.changeProductListCurrentPage(e-1)),isActive:!1,isFirst:1===e,isLast:!1},"<"),o.map(t=>i.createElement(c,{key:t,disabled:"..."===t,onClick:()=>"number"==typeof t&&n(a.changeProductListCurrentPage(t)),isActive:e===t,isFirst:!1,isLast:!1},t)),i.createElement(c,{disabled:e>=t,onClick:()=>n(a.changeProductListCurrentPage(e+1)),isActive:!1,isFirst:!1,isLast:e===t},">"))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),o=n(4),r=n(7),a=n(65),l=n(13),c=n(66),d=n(26),s=n(14),u=n(15),f=o.default.div`
    width: 100%;
    height: 240px;
    border-radius: 10px;
    overflow: hidden;
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
`,p=o.default.img`
    width: 100%;
    height: 240px;
    object-fit: cover;
    transition: transform 0.4s ease;
`,m=o.default.li`
    display: inline-flex;
    min-width: 30%;
    flex: 1;
    height: auto;
    flex-direction: column;
    margin: 15px;
    cursor: pointer;
    overflow: hidden;
    position: relative;

    &:hover {
        ${p} {
            transform: scale(1.1);
            border-radius: 10px;
        }

        ${f} {
            border-radius: 10px;
        }
    }
`,g=o.default.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`,_=o.default.h2`
    font-size: 14px;
    margin: 10px 0 5px 0;
    height: 20px;
`,C=o.default.div`
    font-size: 11px;
    margin: 0px 8px 0px 0px;
    display: flex;
    align-items: center;
    flex: 0 0 auto;
`,O=o.default(l.AiFillHeart)`
    height: 12px;
    margin-right: 2px;
    fill: rgb(133, 138, 141);
`,h=o.default.span`
    color: rgb(133, 138, 141);
`,b=o.default.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`,E=o.default.div`
    display: flex;
    align-items: center;
`,x=o.default.div`
    display: inline-flex;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: -0.15px;
    color: ${e=>e.color};
    font-weight: bold;
    text-decoration: ${e=>e.availableCoupon?"line-through":"none"};
`,P=o.default(c.RiCoupon2Line)`
    fill: red;
    height: 14px;
    margin-left: 6px;
    margin-right: 2px;
`,T=o.default.hr`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid rgb(242, 244, 245);
`,v=o.default.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 30px;
    background: ${e=>e.isPointer?"#000000":"#c2c2c2"};
    color: #ffffff;
    border-radius: 5px;
    padding: 0 8px;
    border: 1px solid #ffffff;
    cursor: ${e=>e.isPointer&&"pointer"};

    &:focus {
        outline: none;
    }
`,y=o.default(a.FaCartPlus)`
    display: inline-block;
    width: 1rem;
    height: 1rem;
    fill: #ffffff;
    margin-right: 4px;
`,R=o.default(d.MdRemoveShoppingCart)`
    display: inline-block;
    width: 1rem;
    height: 1rem;
    fill: #ffffff;
    margin-right: 4px;
`;t.default=function({id:e,title:t,coverImage:n,price:o,score:a,availableCoupon:l=!0,isInCart:c=!1}){const d={id:e,title:t,coverImage:n,price:o,score:a,availableCoupon:l,amount:1,isSelected:!1},{cartItemCounts:U}=r.useSelector(e=>e.cart),A=r.useDispatch();return i.createElement(m,null,i.createElement(f,null,i.createElement(p,{src:n})),i.createElement(g,null,i.createElement(_,null,t),i.createElement(C,null,i.createElement(O,null),i.createElement(h,null,a)),i.createElement(T,null),i.createElement(b,null,i.createElement(E,null,i.createElement(x,{availableCoupon:l,color:"rgb(27, 28, 29)"},u.numberWithComma(o),"원"),l&&i.createElement(i.Fragment,null,i.createElement(P,null),i.createElement(x,{availableCoupon:!1,color:"red"},"쿠폰 적용 가능"))),i.createElement(v,{onClick:c?()=>A(s.removeProductFromCart(d)):()=>A(s.addProductToCart(d)),isPointer:c||U<3},c?i.createElement(i.Fragment,null,i.createElement(R,null),"카트에서 빼기"):i.createElement(i.Fragment,null,i.createElement(y,null),U>=3?"카드가 가득참":"카드에 담기")))))}},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(68),o=n(4).createGlobalStyle`
    ${i.default};
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        border-radius: 0;
        text-decoration: none;
        color:#000000;
        user-select: none;
    }

    html {
        width: 100%;
        height: 100%;
        overflow: scroll;
        background: #ffffff;
        transition: all 0.2s ease;
    }

    body {
      background: #ffffff;
      color: #000000;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      transition: all 0.25s linear;
    }

    #root {
        width: 100%;
        height: 100%;
    }
`;t.default=o},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),o=n(4),r=n(13),a=n(29),l=o.default.div`
    width: 100%;
    height: 100vh;
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #ffffff;

    @media screen and (max-width: 767px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 999;
    }
`,c=o.default(r.AiOutlineWarning)`
    width: 60px;
    height: 60px;
    color: #000000;
`,d=o.default.p`
    margin: 5px 0;
    font-weight: bold;
`,s=o.default.img`
    width: 150px;
    height: auto;
    margin: 10px 0 20px 0;
`;t.default=function(){return i.createElement(l,null,i.createElement(c,null),i.createElement(s,{src:a.default}),i.createElement(d,null,"모바일 환경에서는 사용 불가능 합니다."),i.createElement(d,null,"데스크탑 환경에서 접속해주세요."))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDeviceDetect=void 0;const i=n(1);t.useDeviceDetect=function(){const[e,t]=i.useState(!1);return i.useEffect(()=>{const e=void 0===window.navigator?"":navigator.userAgent,n=Boolean(e.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));t(n)},[]),{isMobile:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(72),o=n(12),r=(n(73),n(74)),a=o.createStore(r.default,o.applyMiddleware(i.default));t.default=a},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(12),o=n(75),r=n(76),a=n(78),l=i.combineReducers({product:o.default,cart:r.default,coupon:a.default});t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(20),o=n(10).createReducer({loading:!1,currentPage:1,productItems:[],itemCounts:0,error:null},{[i.FETCH_PRODUCT_LIST_REQUEST]:e=>Object.assign(Object.assign({},e),{loading:!0}),[i.FETCH_PRODUCT_LIST_SUCCESS]:(e,t)=>Object.assign(Object.assign(Object.assign({},e),{loading:!1}),t.payload),[i.FETCH_PRODUCT_LIST_FAILURE]:(e,t)=>Object.assign(Object.assign({},e),{loading:!1,error:t.payload}),[i.CHANGE_PRODUCT_LIST_CURRENT_PAGE]:(e,t)=>Object.assign(Object.assign({},e),{currentPage:t.payload})});t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(14),o=n(10),r=n(77),a=o.createReducer({cartItemCounts:0,cartItems:[],price:0,discountPrice:0,error:null},{[i.ADD_PRODUCT_TO_CART]:(e,t)=>e.cartItemCounts>=3?e:Object.assign(Object.assign({},e),{cartItems:[...e.cartItems,t.payload],cartItemCounts:e.cartItemCounts+1}),[i.REMOVE_PRODUCT_FROM_CART]:(e,t)=>{const n=t.payload,{coupon:i}=e.cartItems.find(e=>e.id===n.id);return Object.assign(Object.assign({},e),{cartItems:[...e.cartItems.filter(e=>e.id!==n.id)],cartItemCounts:e.cartItemCounts-1,price:e.price-n.price*n.amount,discountPrice:e.discountPrice-(i?r.applyCoupon(n.price,i):0)})},[i.INCREASE_CART_PRODUCT_AMOUNT]:(e,t)=>{let n;const i=e.cartItems.map(e=>e.id===t.payload?(n=e,Object.assign(Object.assign({},e),{amount:e.amount+1})):Object.assign({},e));return Object.assign(Object.assign({},e),{cartItems:i,price:e.price+(n.isSelected?n.price:0),discountPrice:e.discountPrice+(n.coupon&&!n.isSelected?r.applyCoupon(n.price,n.coupon):0)})},[i.DECREASE_CART_PRODUCT_AMOUNT]:(e,t)=>{let n;const i=e.cartItems.map(e=>e.id===t.payload?(n=e,Object.assign(Object.assign({},e),{amount:e.amount-1})):Object.assign({},e));return Object.assign(Object.assign({},e),{cartItems:i,price:e.price-(n.isSelected?n.price:0),discountPrice:e.discountPrice-(n.coupon&&!n.isSelected?r.applyCoupon(n.price,n.coupon):0)})},[i.SELECT_PRODUCT_AT_CART]:(e,t)=>{const n=e.cartItems.find(e=>e.id===t.payload),i=e.cartItems.map(e=>e.id===t.payload?Object.assign(Object.assign({},e),{isSelected:!e.isSelected}):Object.assign({},e)),o=n.coupon?r.applyCoupon(n.price,n.coupon):0;return Object.assign(Object.assign({},e),{cartItems:i,price:e.price+(n.isSelected?-n.price*n.amount:n.price*n.amount),discountPrice:e.discountPrice+(n.isSelected?-o:o)})},[i.ADD_COUPON_AT_PRODUCT]:(e,t)=>{const n=Object.assign(Object.assign({},e.cartItems.find(e=>e.id===t.payload.productId)),{coupon:t.payload.coupon});return Object.assign(Object.assign({},e),{cartItems:e.cartItems.map(e=>e.id===t.payload.productId?Object.assign(Object.assign({},n),{isSelected:!0}):Object.assign({},e)),price:e.price+(n.isSelected?0:n.price*n.amount),discountPrice:e.discountPrice+r.applyCoupon(n.price,t.payload.coupon)})},[i.REMOVE_COUPON_FROM_PRODUCT]:(e,t)=>{const n=e.cartItems.find(e=>e.id===t.payload.productId);return Object.assign(Object.assign({},e),{cartItems:e.cartItems.map(e=>e.id===t.payload.productId?Object.assign(Object.assign({},n),{coupon:null}):Object.assign({},e)),discountPrice:e.discountPrice-r.applyCoupon(n.price,t.payload.coupon)})}});t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.applyCoupon=void 0,t.applyCoupon=function(e,t){const{type:n,discountRate:i,discountAmount:o}=t;return"rate"===n?Math.floor(e*(i/100)):o}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(11),o=n(10).createReducer({loading:!1,isOpen:!1,coupons:[],selectedProductId:"",error:null},{[i.ADD_COUPON_TO_LIST]:(e,t)=>Object.assign(Object.assign({},e),{coupons:[...e.coupons,t.payload]}),[i.REMOVE_COUPON_FROM_LIST]:(e,t)=>Object.assign(Object.assign({},e),{coupons:[...e.coupons.filter(e=>e.title!==t.payload.title)]}),[i.FETCH_COUPON_LIST_REQUEST]:e=>Object.assign(Object.assign({},e),{loading:!0}),[i.FETCH_COUPON_LIST_SUCCESS]:(e,t)=>Object.assign(Object.assign(Object.assign({},e),{loading:!1}),t.payload),[i.FETCH_COUPON_LIST_FAILURE]:(e,t)=>Object.assign(Object.assign({},e),{loading:!1,error:t.payload}),[i.OPEN_COUPON_MODAL_DIALOG]:(e,t)=>Object.assign(Object.assign({},e),{isOpen:!0,selectedProductId:t.payload}),[i.CLOSE_COUPON_MODAL_DIALOG]:e=>Object.assign(Object.assign({},e),{isOpen:!1,selectedProductId:""})});t.default=o}]);