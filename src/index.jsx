import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import "./index.less";
import { store } from './reducers';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

