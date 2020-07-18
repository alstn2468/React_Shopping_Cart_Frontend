import * as React from 'react';
import { Helmet as BaseHelmet } from 'react-helmet';
import Favicon from 'assets/images/favicon.ico';
import { HelmetProps } from 'components/Helmet/HelmetProps';

function Helmet({ title, description }: HelmetProps): React.ReactElement {
    const baseTitle = '준비물까지 챙겨주는 온라인 클래스';
    const baseDescription =
        '내가 찾던 모든 배움의 시작. 클래스101과 함께 언제 어디서든 즐겨봐요.';

    return (
        <BaseHelmet>
            <title>클래스101 | {title ? title : baseTitle}</title>
            <meta
                name="description"
                content={description ? description : baseDescription}
            />
            <link rel="shortcut icon" href={Favicon} />

            <meta
                property="og:title"
                content={`클래스101 | ${title ? title : baseTitle}`}
            />
            <meta
                property="og:description"
                content={description ? description : baseDescription}
            />
            <meta
                property="og:image"
                content="https://alstn2468.github.io/React_Shopping_Cart_Frontend/images/meta-image.jpg"
            />

            <meta
                name="twitter:title"
                content={`클래스101 | ${title ? title : baseTitle}`}
            />
            <meta
                name="twitter:description"
                content={description ? description : baseDescription}
            />
            <meta
                name="twitter:image"
                content="https://alstn2468.github.io/React_Shopping_Cart_Frontend/images/meta-image.jpg"
            />
        </BaseHelmet>
    );
}

export default Helmet;
