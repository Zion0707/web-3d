import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routers } from '_const/index';
import { Provider } from 'react-redux';
import store from '_store/index';
import '_less/main/index.less';

const Index = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                {routers.map((item) => (
                    <Route key={item.path} path={item.path} component={item.component} exact={item.exact} />
                ))}
            </Switch>
        </Router>
    </Provider>
);

export default Index;
