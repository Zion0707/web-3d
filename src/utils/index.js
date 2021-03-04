/**
 * 动态加载script
 * @param {type: string, desc: script地址} url
 * @param {type: boolean, desc: true->插入到body最后, false->插入到head} injectBody
 */
export const loadScript = (() => {
    const scriptMap = {};
    return (url, attrs, injectBody = true) => {
        if (scriptMap[url]) {
            return Promise.resolve(scriptMap[url]);
        }
        return new Promise((resolve, reject) => {
            scriptMap[url] = 'loading';
            const script = document.createElement('script');

            Object.keys(attrs).forEach((item) => {
                script.setAttribute(item, attrs[item]);
            });

            script.onload = () => {
                scriptMap[url] = 'loaded';
                resolve(scriptMap[url]);
            };
            script.onerror = () => {
                scriptMap[url] = null;
                script.remove();
                reject(scriptMap[url]);
            };
            script.src = url;
            if (injectBody) {
                document.body.appendChild(script);
            } else {
                document.head.appendChild(script);
            }
        });
    };
})();
