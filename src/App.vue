<template>
  <header class="header">
    <p class="logo">Жилфонд</p>
    <p class="user">Пользователь</p>
  </header>
  <div class="app-wrapper">
    <SideBar/>
    <router-view/>
  </div>
  <loader v-if="employeeStore.state.isLoading" object="#ff0000" color1="#ffffff" color2="#17fd3d" size="5" speed="2" bg="#343a40" objectbg="#999793" opacity="80" disableScrolling="true" name="spinning"></loader>
</template>

<script setup>
  import SideBar from './components/SideBar.vue'
  import router from './router';
  import employeeStore from './store';
  import { onMounted } from 'vue';

  onMounted(() => {
    router.push('/')
  })
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
* {
  font-family: 'Montserrat', sans-serif;
  color: #333333;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app{
  max-width: 1266px;
  margin: 0 auto;
  padding-top: 50px;
}
.app-wrapper{
  height: 575px;
  display: flex;
  box-shadow: 0px 0px 10px 0px #0000001A;
  margin-top: 26px;
}
.header{
  display: flex;
  justify-content: space-between;
}
.logo{
  color: #E31F24;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
}
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 100px;
}

::-webkit-scrollbar-thumb {
  background-color: #767676;
  border-radius: 100px;
}
</style>
