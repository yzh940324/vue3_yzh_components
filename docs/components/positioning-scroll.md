<!--
 * @Author: 俞志豪
 * @Date: 2022-04-19 14:44:55
 * @LastEditors: yzh
 * @LastEditTime: 2022-04-26 11:20:01
 * @Description: file content
 * @RouteName: 
 * @To: 
 * @Invoke: 
-->

::: demo

Snap/positioning-scroll.vue

:::

## positioning-scroll 属性

<table align="center">
    <tr>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
    </tr>
    <tr>
        <td>list</td>
        <td>定位滚动列表,x轴需要配置（width,direction:x）,y轴需要配置（height,direction:y）</td>
        <td>array</td>
        <td>-</td>
        <td>[]</td>
    </tr>
    <tr>
        <td>direction</td>
        <td>定位滚动的方向</td>
        <td>string</td>
        <td>x,y</td>
        <td>x</td>
    </tr>
    <tr>
        <td>height</td>
        <td>模块高度</td>
        <td>string</td>
        <td>-</td>
        <td>400px</td>
    </tr>
    <tr>
        <td>width</td>
        <td>模块宽度</td>
        <td>string</td>
        <td>-</td>
        <td>100%</td>
    </tr>
    <tr>
        <td>isCenter</td>
        <td>模块中心内容是否居中</td>
        <td>boolean</td>
        <td>true,false</td>
        <td>true</td>
    </tr>
</table>

## positioning-scroll 事件

<table align="center">
    <tr>
        <th>事件名</th>
        <th>说明</th>
        <th>回调参数</th>
    </tr>
    <tr>
        <td>click</td>
        <td>点击当前模块触发</td>
        <td>data</td>
    </tr>
</table>