### React Shopping Cart

#### Department of Computer Software Engineering

---

#### [김민수](https://github.com/alstn2468)

#### [ [Facebook](https://www.facebook.com/profile.php?id=100003769223078) ] [ [Github](https://github.com/alstn2468) ] [ [LinkedIn](https://www.linkedin.com/in/minsu-kim-336289160/) ] [ [Blog](https://alstn2468.github.io/) ]<br/>

### To Do

-   [x] Set up Typescript, React webpack config
-   [x] Set up redux, redux-thunk config
-   [x] Set up styled-components
-   [x] Implement product list page
-   [x] Implement shopping cart page
-   [x] Implement pagination component
-   [x] Implement coupon dialong component
-   [x] Sort product list by product score
-   [x] Implement redux actions, reducers
-   [x] Redux asynchronous action processing
-   [x] Split components
-   [x] Write util function test case
-   [ ] Write redux action, reducer test case
-   [ ] Write component test case

### 변경한 요구사항

**쿠폰**

-   Before

등록한 하나의 쿠폰만 총 금액에서 계산되도록 설정

-   After

쿠폰 등록이 가능한 각각의 항목에 쿠폰을 등록할 수 있으나 1개의 수량에만 적용이되도록 설정<br/>
이미 등록된 쿠폰은 쿠폰 목록 모달에 보이지 않으며 다른 상품에 등록할 수 없도록 설정

**메인 화면**

-   Before

따로 메인 화면으로 주로 사용되는 `/` route에 관한 요구사항이 없음

-   After

`/` route에 광고 영상과 `/products` route로 이동할 수 있는 버튼 추가

**모바일 감지**

-   Before

반응형, 적응형 웹에 대한 다른 요구사항이 없음

-   After

User-Agent를 이용해 모바일 환경에서는 볼 수 없도록 설정
