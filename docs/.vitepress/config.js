/*
 * @Author: 俞志豪
 * @Date: 2022-04-17 17:09:10
 * @LastEditors: yzh
 * @LastEditTime: 2022-04-25 22:13:36
 * @Description: file content
 * @RouteName: 
 * @To: 
 * @Invoke: 
 */


import nav from './nav'
import sidebar from './sidebar'
import fs from 'fs'
import path from 'path'
import Prism from 'prismjs'

module.exports = {
    base:'/',
    title: '锤锤的文档',
    description: '锤锤在顺顺鼓励下写的vitepress文档',
    lang: 'zh-CN',
    head: [['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo.jpg' }]],
    themeConfig: {
        repo: 'yzh940324/vue',
        repoLabel:'GitHub',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '欢迎帮助锤锤改善页面!',
        lastUpdated: '最近更新时间',
        nav,
        sidebar
    },
    markdown: {
        config: (md) => {
            md.use(require('markdown-it-container'), 'demo', {
                validate: function(params) {
                  return !!params.trim().match(/^demo\s*(.*)$/)
                },
                render: function (tokens, idx) {
                    // 开始标签的 nesting 为 1，结束标签的 nesting 为 -1
                    if (tokens[idx].nesting === 1) {
                        // 获取到对应的md文件
                        const data = tokens?.find(f => f?.children?.length)
                        // node读取组件文本
                        const code = fs.readFileSync(path.resolve('',`src/components/${data.content}`),'utf-8')
                        // Prismjs 转换代码 增加换行符并且代码高亮变色显示
                        const html = Prism.highlight(code, Prism.languages.html, 'html');
                        // 配置pre和code标签渲染代码
                        const returnHtml = `<pre><code>${html}</code></pre>`
                        // 开始标签 - encodeURIComponent进行代码格式化 具体demo页面decodeURIComponent解构
                        return `<Demo src="${data?.content}" html="${encodeURIComponent(returnHtml)}">`;
                    } else {
                        // 结束标签
                        return '</Demo>';
                    }
                }
            });
        }
    }
}
