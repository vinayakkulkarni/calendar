<template>
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
          <form method="POST" style="padding: 10%;">
            <input type="text" name="event" id="event" style="padding: 2px; border: 1px solid #404; transition: ease-out 0.2s; color: #333; border-radius: 5px;" placeholder="Event Name" />
            <input type="date" name="date" style="padding: 2px; border: 1px solid #404; transition: ease-out 0.2s; color: #333; border-radius: 5px;" id="date" />
          </form>
        </div>
        <div class="events-wrapper">
          <div class="event" :class="{'active': event.timeago === 'now' }" v-for="event in calendar.events" :key="event.id">
            <i class="ion" :class="{'ion-ios-flame hot': event.missed, 'ion-ios-flame done': event.completed, 'ion-ios-radio-button-on icon-in-active-mode': event.timeago === 'now' }"></i>
            <h4 class="event__point">{{ event.time }}</h4>
            <span v-if="event.timeago !== 'now'" class="event__duration">{{ event.timeago }}</span>
            <p class="event__description">{{ event.description }}</p>
          </div>
        </div>
        <button class="add-event-button">
          <span class="add-event-button__title">Save Event</span>
          <span class="add-event-button__icon"><i class="ion ion-ios-calendar"></i></span> 
        </button>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'CreateEvent',
  data() {
    return {
      user: {
        name: 'Vinayak',
      },
      calendar: {
        events: [],
      },
      date: new Date(),
    };
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
