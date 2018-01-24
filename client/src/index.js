import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import allReducers from './_redux/reducers'
import {createBrowserHistory} from 'history';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger'
import {Route, Router} from 'react-router';
import action_SetPath from './_redux/actions/navigation/action_SetPath';

const middleware = applyMiddleware(thunk, createLogger({
    collapsed: true,
    diff: true,
    predicate: (getState, action) => action.type.substr(0, 12) !== '@@redux-form'
}));

const store = createStore(allReducers, middleware);

const history = createBrowserHistory();
history.listen((obj) => {
    store.dispatch(action_SetPath(obj.pathname))
});

store.subscribe(() => {
    const redirectPath = store.getState().navigationStore.redirectPath;
    if (redirectPath)
        history.push(redirectPath);
});

ReactDOM.render(<Provider store={store}>
    <Router history={history}>
        <Route exact path='/' component={App}/>
    </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
