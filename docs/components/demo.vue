<!--
 * @Author: 俞志豪
 * @Date: 2022-04-19 22:16:47
 * @LastEditors: yzh
 * @LastEditTime: 2022-04-26 10:15:11
 * @Description: file content
 * @RouteName: 
 * @To: 
 * @Invoke: 
-->
<script setup>
import {onMounted,shallowRef} from 'vue'
import {ElCollapse,ElCollapseItem} from 'element-plus'

const props = defineProps({
    src: {type:String,required:true},
    html: {type:String,required: true}
})

// 动态代码绑定实例
const DemoComponent = shallowRef()
// 是否展示源代码
const isHide = shallowRef()
// 获取组件路由下所有模板
const modules = import.meta.globEager('../../src/components/*/*.vue')

onMounted(() => {
    // 外部组件相对路径
    const path = `../../src/components/${props.src}`
    // 动态组件赋值
    DemoComponent.value = modules[path].default
})


</script>

<template>
    <component v-if="DemoComponent" :is="DemoComponent" />
    <ElCollapse v-model="isHide" @change="handerHide">
        <ElCollapseItem name="0">
            <template #title>{{isHide?.[0]  == 0 ? '隐藏' :'查看' }}源代码</template>
            <div v-html="decodeURIComponent(html)"/>
        </ElCollapseItem>
    </ElCollapse>
</template>

<style scoped>
:deep(.el-collapse-item){
    user-select: none;
}
:deep(.el-collapse-item) > div{
    border: 1px solid #fff;
    background-color: #282c34;
    color: #eee;
}

:deep(.el-collapse-item__header) {
    width: 100%;
    padding: 0 10px;
}
:deep(.el-collapse-item) > div:first-child{
    display: flex;
    justify-content: center;
    align-items: center;
}

:deep(.el-collapse-item) > div:last-child{
    overflow:auto;
}

:deep(.el-collapse-item__header){
    font-size: 18px;
    background-color: #282c34;
    color: #eee;
}

code{
    background-color: transparent !important;
}
</style>

