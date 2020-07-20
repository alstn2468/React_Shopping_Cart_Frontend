import thunk from 'redux-thunk';
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'reducers';

const store: Store = createStore(
    rootReducer,
    process.env.NODE_ENV === 'development'
        ? composeWithDevTools(applyMiddleware(thunk))
        : applyMiddleware(thunk),
);

export default store;
