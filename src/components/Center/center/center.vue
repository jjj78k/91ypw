<template>
<div>
    <BottomBar></BottomBar>
    <div class="mindex">
       个人中心页面
     
    </div>
      <User></User>
      <Function></Function>
    </div>
</template>

<script>
import BottomBar from '../../BottomBar/BottomBar'
import User from '../user/user'
import Function from '../function/function'
export default{
components: {
    User,
    Function,
    BottomBar
}
}
</script>
<style>
.mindex{ position: absolute; top: 50%;text-align: center; width: 100%}


</style>
