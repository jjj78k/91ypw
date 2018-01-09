<template>
  <div class="bottomBar">
        <div class="bar_icon">
      <router-link to="/" exact>
              
           <div class="bar_icon_item">
               <i class="iconfont" style="padding-left:5px">&#xe67d;</i>
               <span>首页</span>
           </div>
         </router-link>
          <router-link to="/buisner">
           <div class="bar_icon_item">
               <i class="iconfont">&#xe61b;</i>
               <span>商圈</span>
           </div>
            </router-link>
            <router-link to="/order">
          <div class="bar_icon_item">
               <i class="iconfont">&#xe6d2;</i>
               <span>订单</span>
           </div> 
            </router-link>
            <router-link to="/center">
          <div class="bar_icon_item">
               <i class="iconfont">&#xe625;</i>
               <span>个人中心</span>
           </div>
            </router-link>
       </div>

  </div>
</template>

<script>
// import "../../../public/css/iconfont/iconfont.css";
// import "../../../public/css/until.css";
export default {};
</script>

<style>
.bottomBar {
  height: 60px;
  width: 100%;
  background: #FFFFFF;
  position: fixed;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
}
.bar_icon {
  padding: 2% 3%;
  display: flex;
  justify-content: space-between;
  height: 100%;
  border-top: 1px solid #e5e5e5;
  box-sizing: border-box;
}
.bar_icon_item {
  height: 100%;
  width: 100%;
  text-align: center;
}
.bar_icon_item a{color: #333; text-align: center; display: block; width: 23%;text-decoration: none!important}
.bar_icon_item   i {
  font-size: 24px;
  text-align: center;
display: block;

}
.bar_icon_item  span {
  display: block;
  text-align: center;
  font-size: 14px;

}
.router-link-active{ color: #f9431c}
</style>
