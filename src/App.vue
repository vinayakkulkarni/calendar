<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Calendar from './components/Calendar';

export default {
  name: 'app',
  components: {
    Calendar,
  },
};
</script>
