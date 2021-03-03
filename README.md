# webpack-for-react

```
webpack react项目配置
```

1、dist 生产文件 nginx 配置

```
server {
    listen 8885;

    root /yourserve/webpack-for-react/dist;
    index index.html index.htm;

    location / {
        try_files $uri $uri/ /index.html;
    }

    error_page 500 502 503 504 /500.html;
    client_max_body_size 20M;
    keepalive_timeout 10;
}
```
