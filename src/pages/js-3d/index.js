import React, { useEffect, useState, Fragment } from 'react';
import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';
import Script from 'react-load-script';
import { useHistory } from 'react-router-dom';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import '_less/js-3d/index.less';

const Js3d = () => {
    // 随机时间戳
    const [url, setUrl] = useState('');
    const history = useHistory();

    const scriptOnCreate = () => {
        console.log('onCreate');
    };
    const scriptOnError = () => {
        console.log('onError');
    };
    const scriptOnLoad = () => {
        console.log('onLoad');
        // js 加载完毕的时候执行初始化
        if (js3dModel) {
            js3dModel.init({
                THREE,
                TWEEN,
                OrbitControls,
            });
        }
    };

    // 组件卸载处理
    const unComponent = () => {
        document.body.removeChild(document.getElementById('js_load_3d'));
    };

    useEffect(() => {
        // 模拟ajax
        const timer = setTimeout(() => {
            setUrl('/cdn/model/js-3d/index.js?v=' + Date.parse(new Date()));
            clearTimeout(timer);
        }, 300);

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
            {url && (
                <Script
                    url={url}
                    attributes={{ id: 'js_load_3d' }}
                    onCreate={scriptOnCreate}
                    onError={scriptOnError}
                    onLoad={scriptOnLoad}
                />
            )}
            <div id="content"></div>
        </Fragment>
    );
};

export default Js3d;
