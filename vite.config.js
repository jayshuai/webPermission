import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    server: {
        host: true,
        open: true,//服务启动时自动在浏览器中打开应用
        // 反向代理配置
        proxy: { //配置多个代理
            'api': {
                target: 'http://1.116.64.64:5004/api2/',
                changeOrigin: true,
                PathRewrite: {
                    '^api': ''
                }
            }
        }
    },
    css: {
        // postCss 共享配置
        postcss: {
            plugins: [//扩展插件
                {
                    postcssPlugin: 'internal:charset-removal',
                    AtRule: {//大写AtRule
                        charset: (atRule) => {
                            //char set字符集
                            if (atRule.name === 'charset') {
                                atRule.remove();//删除
                            }
                        }
                    }
                }
            ]
        }
    }
})