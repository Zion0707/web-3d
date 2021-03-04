import React, { useEffect, useState, Fragment } from 'react';
import { message } from 'antd';
// import Script from 'react-load-script';
import { useHistory } from 'react-router-dom';
import { loadScript } from '_utils';
import '_less/js-3d/index.less';

const Js3d = () => {
    const history = useHistory();

    // 外部cdn调用函数（加载）
    window.model3dLoad = () => {
        console.log('3d 模型已加载');
    };

    // 外部cdn调用函数（事件）
    window.model3dEvent = (name) => {
        // console.log(name);
        message.warning(`点击了${name}`);
    };

    const init = () => {
        // 模拟ajax
        const timer = setTimeout(() => {
            loadScript('/cdn/model/item1/src/index.min.js?v=' + Date.parse(new Date()), { id: 'model_3d_js' });
            clearTimeout(timer);
        });
    };

    // 组件卸载
    const unComponent = () => {
        document.body.removeChild(document.getElementById('model_3d_js'));
    };

    useEffect(() => {
        init();
        return unComponent;
    }, []);

    return (
        <Fragment>
            <button
                onClick={() => {
                    history.push('/');
                }}
            >
                Back Home Page
            </button>
            <div id="content"></div>
        </Fragment>
    );
};

export default Js3d;
