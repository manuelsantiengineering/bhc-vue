<template>
  <div id="app">
    <HeaderBar />
    <b-container>
      <main class="column">
        <router-view />
      </main>
    </b-container>
  </div>
</template>

<script>
import HeaderBar from '@/components/header-bar';
import NavBar from '@/components/nav-bar';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: 'App',
  components: { HeaderBar, NavBar },
};
</script>

<style lang="scss">
@import './design/index.scss';
</style>
