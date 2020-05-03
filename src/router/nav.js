export const sidebar = [
  { 
    icon: 'mdi-view-dashboard', 
    text: 'Dashboard' 
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
        text: 'Student'
      },
      {
        text: 'Teacher'
      },
      {
        text: 'Admin'
      }
    ]
  }
]
