import * as React from 'react';
import RootRouter from 'components/Router';
import GlobalStyles from 'components/GlobalStyles';
import Mobile from 'components/Mobile';

function App(): React.ReactElement {
    return (
        <React.StrictMode>
            <GlobalStyles />
            <RootRouter />
            <Mobile />
        </React.StrictMode>
    );
}

export default App;
