import * as React from 'react';
import styled from 'styled-components';

const StyledDivisor = styled.hr`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid rgb(242, 244, 245);
`;

function Divisor(): React.ReactElement {
    return <StyledDivisor />;
}

export default Divisor;
