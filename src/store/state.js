const state = {
  date: new Date(),
  user: {
    name: 'Vinayak',
  },
  user_loading: false,
  events: [
    {
      id: 1,
      time: '11:00 am',
      timeago: 'in 30 minutes.',
      missed: true,
      completed: false,
      description: 'Monday briefing with the team',
    },
    {
      id: 2,
      time: '12:00 pm',
      timeago: 'in 1 hour.',
      missed: false,
      completed: true,
      description: "Lunch with Paul McCartney, @Burgers' House!",
    },
    {
      id: 3,
      time: '14:00 pm',
      timeago: 'now',
      missed: null,
      completed: null,
      description: 'Meet clients from project.',
    },
    {
      id: 4,
      time: '20:45 pm',
      timeago: 'in 5 hours 45 minutes.',
      missed: null,
      completed: null,
      description: 'Watch Mr.Robot',
    },
    {
      id: 5,
      time: '23:15 pm',
      timeago: 'in 9 hours 15 minutes.',
      missed: null,
      completed: null,
      description: 'Skype meeting with Dave.',
    },
  ],
};

export default state;
