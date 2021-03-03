import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
        404页面
        <br />
        <Link to="/">
            <Button type="primary" size="small">
                回到首页
            </Button>
        </Link>
    </div>
);

export default NotFound;
