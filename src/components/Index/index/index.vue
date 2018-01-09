<template>

    <div>
       <BottomBar></BottomBar>
       <div class="mindex">首页组件模块</div> 
       <search ></search>
       <advtpl></advtpl>
       <message></message>
       <seckil></seckil>
       <button id="gologin" @click="gologin">登录</button>
    </div>
</template>

<script>
import BottomBar from '../../BottomBar/BottomBar'
import search  from '../search/search'
import advtpl  from '../adv/adv'
import message  from '../message/message'
import seckil  from '../seckil/seckil'

export default{
    components: {
        search,
        advtpl,
        message,
        seckil,
        BottomBar
    },
    methods: {
        gologin(){
            this.$router.push({name:'login',params:{id:5,name:'gc'}})
        }
    }

}
</script>
<style>
.mindex{ position: absolute; top: 50%;text-align: center; width: 100%}

</style>
