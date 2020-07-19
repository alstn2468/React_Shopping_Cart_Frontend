import * as React from 'react';
import styled from 'styled-components';

interface BadgeProp {
    backgroundColor: string;
}

interface BadgeTextProp {
    color: string;
}

interface IProductBadge extends BadgeProp, BadgeTextProp {
    children: string;
}

const Badge = styled.div<BadgeProp>`
    min-width: 20px;
    height: 20px;
    padding-left: 6px;
    padding-right: 6px;
    background-color: ${(prop) => prop.backgroundColor};
    display: inline-flex;
    align-items: center;
    border-radius: 3px;
    flex: 0 0 auto;
    margin-right: 4px;
`;

const BadgeText = styled.div<BadgeTextProp>`
    font-size: 9px;
    line-height: 12px;
    letter-spacing: normal;
    color: ${(prop) => prop.color};
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    margin: 0px;
`;

function ProductBadge({
    backgroundColor,
    color,
    children,
}: IProductBadge): React.ReactElement {
    return (
        <Badge backgroundColor={backgroundColor}>
            <BadgeText color={color}>{children}</BadgeText>
        </Badge>
    );
}

export default ProductBadge;
