import { createStore, applyMiddleware, compose ,} from 'redux';
import thunk from 'redux-thunk';
import getRootReducer from './reducers/getReducer';
import promise from './promise';

export default function configureStore(navReducer) {
    const store = createStore(
        getRootReducer(navReducer),
        undefined,
        applyMiddleware(thunk),
    );

    return store;
}
