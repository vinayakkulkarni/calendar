<template>
<div>
  <div class="mobile-wrapper">
    <!--======= Header =======-->
    <header class="header">
        <div class="container">
            <span>Welcome Back, {{ user.name }}!</span>
            <h1>Calendar Plan</h1>
            <div class="menu-toggle">
                <div>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
        </div>
    </header>
    <!--======= Today =======-->
    <section class="today-box" id="today-box">
        <span class="breadcrumb">Today</span>
        <h3 class="date-title">{{ date.toLocaleString() }}</h3>
        <div class="plus-icon">
            <i class="ion ion-ios-add"></i>
        </div>
    </section>
    <!--======= Upcoming Events =======-->
    <section class="upcoming-events">
      <div class="container">
        <h3>Lastest Events</h3>
        <div class="events-wrapper">
          <router-link
            v-for="event in events"
            :to="{ name: 'EditEvent', params: { id: event.id } }"
            :class="{'active': event.timeago === 'now' }"
            :key="event.id"
            tag="div"
            class="event"
            exact>
            <i class="ion" :class="{'ion-ios-flame hot': event.missed, 'ion-ios-flame done': event.completed, 'ion-ios-radio-button-on icon-in-active-mode': event.timeago === 'now' }"></i>
            <h4 class="event__point">{{ event.time }}</h4>
            <span v-if="event.timeago !== 'now'" class="event__duration">{{ event.timeago }}</span>
            <p class="event__description">{{ event.description }}</p>
          </router-link>
        </div>
        <router-link
          :to="{name: 'CreateEvent'}"
          tag="button"
          class="add-event-button">
          <span class="add-event-button__title">Add Event</span>
          <span class="add-event-button__icon"><i class="ion ion-ios-star-outline"></i></span> 
        </router-link>
      </div>
    </section>
  </div>
  <div v-if="!user.name" style="display: flex; align-items:center;">
    <input type="text" style="border:0;" class="mobile-wrapper" name="name" id="name" v-model="user.name">
  </div>
</div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'VueAwesomeCalendar',
  computed: {
    ...mapState(['user', 'events', 'date']),
  },
};
</script>
<style>
@import url('../assets/styles/ionicons.css');
@import url('../assets/styles/fonts.css');
</style>
<style lang="scss">
@import '../assets/styles/global.scss';
</style>

