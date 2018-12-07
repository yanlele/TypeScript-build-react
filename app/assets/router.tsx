import {LocaleProvider} from 'antd';
import {createBrowserHistory} from 'history';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Route, Router, Switch} from 'react-router';

// Set language package: pack in "webpack.config.js" alias
// @ts-ignore: next
import localeAntd from 'localeAntd';

// import base style
import './style/app.less';

import store from './store';

export const routerHistory = createBrowserHistory();

import NotFoundPage from './pages/not_found';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

// import asyncLoadComponent from './components/page_loader';
import Home from './pages/home/index'

export default (
    <LocaleProvider locale={zh_CN}>
        <Provider store={store}>
                <Router history={routerHistory}>
                    <Switch>
                        <Route
                            exect
                            component={NotFoundPage} />
                        <Route
                            exect
                            path="/home"
                            component={Home}/>
                    </Switch>
                </Router>
        </Provider>
    </LocaleProvider>
);
