<!--
 * @Author: 俞志豪
 * @Date: 2022-04-25 14:06:32
 * @LastEditors: yzh
 * @LastEditTime: 2022-04-26 11:15:48
 * @Description: file content
 * @RouteName: 
 * @To: 
 * @Invoke: 
-->
<script setup lang="ts">
const props = defineProps({
    list: {type:Array,default:[{label:1,img:'../../assets/img/logo.jpg'},{label:2,img:'../../assets/img/logo.jpg'}]},
    direction: {type:String,default:'x'},
    height: {type:String,default:'400px'},
    width: {type:String,default:'100%'},
    isCenter: {type:Boolean,default: true}
})

const formatterStyle = (type:string,data:any) => {
    if(type === 'img' && data.img){
        return new URL(data.img,import.meta.url).href
    }
    return ""
}



</script>

<template>
    <div :class="['positioning-scroll',{
        'positioning-scroll-flex':direction === 'x',
        'positioning-scroll-height':direction === 'y',
        'positioning-scroll-width':direction === 'x',
        }]" v-if="list.length">
        <div  v-for="(item,index) in list" :key="item.key ?? index" :class="['positioning-scroll-box',{'positioning-scroll-box-center':isCenter}]" @click="$emit('click',item)">
            <img class="positioning-scroll-box-background" :src="formatterStyle('img',item)"/>
            <div class="positioning-scroll-box-main">
                <div v-if="item.html" v-html="item.html"/>
                <div v-else>{{item.label}}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.positioning-scroll{
    scroll-snap-type: v-bind(direction) mandatory;
    width: v-bind(width);
    overflow: auto;
    position: relative;
    &-height{
        height:v-bind(height);
    }
    &-width{
        width:v-bind(width);
    }
    &-flex{
        display: flex;
    }
    &-box{
        height: v-bind(height);
        min-width: v-bind(width);
        color: #fff;
        scroll-snap-align: center;
        &-background{
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 0;
        }
        &-center{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
        }
        &-main{
            z-index: 1;
        }
    }
}
</style>