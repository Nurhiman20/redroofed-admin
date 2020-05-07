export const sidebar = [
  { 
    icon: 'mdi-view-dashboard', 
    text: 'Dashboard',
    to: '/dashboard'
  }
]

export const mainMenu = [
  {
    icon: 'mdi-format-list-checks',
    text: 'List of Presence'
  },
  { 
    icon: 'mdi-account-group', 
    text: 'Member',
    children: [
      {
        text: 'Student',
        to: '/member/student'
      },
      {
        text: 'Teacher',
        to: '/member/teacher'
      },
      {
        text: 'Admin',
        to: '/member/admin'
      }
    ]
  }
]
