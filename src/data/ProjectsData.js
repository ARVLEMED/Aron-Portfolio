const projects = [
  {
    name: 'Sales Performance, Revenue & Customer Sentiment Analysis Dashboard',
    category: 'Data Analytics',
    description:
      'Developed an interactive dashboard to analyze sales performance across models, revenue and customer sentiment (positive, neutral, negative) using Excel and IBM Cognos Analytics. Applied data cleansing, pivot tables, treemaps, and visual storytelling to generate actionable insights.',
    technologies: [
      'Microsoft Excel',
      'IBM Cognos Analytics',
      'Data Visualization',
      'Pivot Tables',
      'Treemaps',
      'Data Storytelling'
    ],
    highlights: [
      'Cleaned and transformed raw customer review data',
      'Built sentiment-based treemaps and KPI dashboards',
      'Presented insights for business decision-making'
    ],
    link: 'https://eu2.ca.analytics.ibm.com/bi/?perspective=dashboard&id=i95FF7F0804094C6B883079CC7DEF113F&objRef=i95FF7F0804094C6B883079CC7DEF113F&options%5BdisableGlassPrefetch%5D=true&options%5Bcollections%5D%5BcanvasExtension%5D%5Bid%5D=com.ibm.bi.dashboard.canvasExtension&options%5Bcollections%5D%5BfeatureExtension%5D%5Bid%5D=com.ibm.bi.dashboard.core-features&options%5Bcollections%5D%5Bbuttons%5D%5Bid%5D=com.ibm.bi.dashboard.buttons&options%5Bcollections%5D%5Bwidget%5D%5Bid%5D=com.ibm.bi.dashboard.widgets&options%5Bcollections%5D%5BcontentFeatureExtension%5D%5Bid%5D=com.ibm.bi.dashboard.content-features&options%5Bcollections%5D%5BsaveServices%5D%5Bid%5D=com.ibm.bi.dashboard.saveServices&options%5Bcollections%5D%5Btemplates%5D%5Bid%5D=com.ibm.bi.dashboard.templates&options%5Bcollections%5D%5BvisualizationExtension%5D%5Bid%5D=com.ibm.bi.dashboard.visualizationExtensionCA&options%5Bcollections%5D%5BboardModel%5D%5Bid%5D=com.ibm.bi.dashboard.boardModelExtension&options%5Bcollections%5D%5BcontentTypes%5D%5Bid%5D=com.ibm.bi.dashboard.contentTypes&options%5Bcollections%5D%5BserviceExtension%5D%5Bid%5D=com.ibm.bi.dashboard.serviceExtension&options%5Bcollections%5D%5BlayoutExtension%5D%5Bid%5D=com.ibm.bi.dashboard.layoutExtension&options%5Bcollections%5D%5BcolorSetExtensions%5D%5Bid%5D=com.ibm.bi.dashboard.colorSetExtensions&options%5Bconfig%5D%5Bproduct%5D=CA&options%5Bconfig%5D%5BeditPropertiesLabel%5D=true&options%5Bconfig%5D%5BenableCustomVisualizations%5D=true&options%5Bconfig%5D%5BassetTags%5D%5B%5D=dashboard&options%5Bconfig%5D%5BfilterDock%5D=true&options%5Bconfig%5D%5BshowMembers%5D=true&options%5Bconfig%5D%5Bupgrades%5D=dashboard-core%2Fjs%2Fdashboard%2Fupgrades&options%5Bconfig%5D%5BassetType%5D=exploration&options%5Bconfig%5D%5BgeoService%5D=CA&options%5Bconfig%5D%5BsmartTitle%5D=true&options%5Bconfig%5D%5BnavigationGroupAction%5D=true&options%5Bconfig%5D%5BenableDataQuality%5D=false&options%5Bconfig%5D%5BmemberCalculation%5D=false&isAuthoringMode=true&boardId=i95FF7F0804094C6B883079CC7DEF113F',
    type: 'capstone'
  },

  {
    name: 'Sales Performance & Revenue Dashboard',
    category: 'Business Intelligence',
    description:
      'Created an Excel-based BI dashboard to track sales performance, revenue trends, and product categories. Used advanced Excel formulas, pivot charts, and data quality checks to support management reporting.',
    technologies: [
      'Microsoft Excel',
      'Data Analysis',
      'Data Quality',
      'Pivot Charts',
      'Business Intelligence'
    ],
    highlights: [
      'Designed executive-friendly dashboard views',
      'Analyzed trends across product categories',
      'Improved reporting accuracy through data validation'
    ],
    link: 'https://excel.cloud.microsoft/open/onedrive/?docId=8CD74BC590B18C54%21s53b9978cc89b4769b9389771e2f13d26&driveId=8CD74BC590B18C54',
    type: 'capstone'
  },
  {
    name: 'MediConnect Frontend',
    description:
      'Dashboard of MediConnect, a website that connects a patient with an ambulance, giving the client the power to book an ambulance, just like an Uber.',
    technologies: ['React', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com/ARVLEMED/MEDICONNECT-FRONTEND',
    liveDemo: 'https://teal-snickerdoodle-476ffb.netlify.app/',
  },
  {
    name: 'CEMA-TASK Frontend',
    description:
      'A React-based web application that helps doctors manage client consultations and health programs. Features client queue, consultation forms, and program management.',
    technologies: ['React', 'CSS', 'Vite', 'Axios'],
    github: 'https://github.com/ARVLEMED/CEMA-SE-TASK-FRONTEND',
    liveDemo: 'https://cemahospitalsystem.netlify.app/',
  },
  {
    name: 'CEMA-TASK Backend',
    description:
      'Flask REST API for healthcare management system. Provides user authentication, client management, consultation tracking, and program enrollment APIs.',
    technologies: ['Flask', 'SQL', 'SQLAlchemy', 'JWT', 'RESTful API', 'Python'],
    github: 'https://github.com/ARVLEMED/CEMA-SE-TASK-BACKEND',
  },
  {
    name: 'ED-TECH-SOLUTION-PROJECT-FRONT-END',
    description:
      'EdTech App for teachers, parents, and admins to manage student results, welfare, and performance tracking.',
    technologies: ['React', 'Redux', 'Tailwind CSS', 'Axios'],
    github: 'https://github.com/ARVLEMED/ED-TECH-SOLUTION-PROJECT-FRONT-END',
    liveDemo: 'https://byte-force-ed-tech.netlify.app/',
  },
  {
    name: 'ED-TECH-SOLUTION-PROJECT-BACK-END',
    description:
      'Flask RESTful API backend for EdTech solution managing users, students, classes, exams, results, and welfare reports.',
    technologies: ['Flask', 'SQL', 'SQLAlchemy', 'JWT', 'RESTful API', 'Python'],
    github: 'https://github.com/ARVLEMED/ED-TECH-SOLUTION-PROJECT-BACK-END',
  },
  {
    name: 'Health Awareness App Frontend',
    description: 'Frontend of a health awareness app with user-friendly UI and real-time data.',
    technologies: ['React', 'Tailwind CSS', 'Auth0'],
    github: 'https://github.com/ARVLEMED/Health-Awareness-App-Frontend',
    liveDemo: 'https://healthawarenessapp.netlify.app/',
  },
  {
    name: 'Health Awareness App Backend',
    description: 'Backend for a health awareness app providing APIs for medical data.',
    technologies: ['Flask', 'SQLAlchemy', 'JWT Authentication'],
    github: 'https://github.com/ARVLEMED/Health-Awareness-App-Backend',
    liveDemo: 'https://health-awareness-app-backend-8.onrender.com',
  },
  {
    name: 'Amazon-JS-Project',
    description: 'An interactive replica of the Amazon shopping web page.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/ARVLEMED/Amazon-JS-Project',
    liveDemo: 'https://arvlemed.github.io/Amazon-JS-Project/',
  },
  {
    name: 'Rock Paper Scissors Game',
    description: 'An interactive Rock Paper Scissors game with randomized results.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/ARVLEMED/Rock-Paper-Scissors-Project-Game',
    liveDemo: 'https://arvlemed.github.io/Rock-Paper-Scissors-Project-Game/',
  },
  {
    name: 'Todo List Simple JS Project',
    description: 'A simple To-Do List application with task management features.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/ARVLEMED/Todo-List-Simple-JS-Project',
    liveDemo: 'https://arvlemed.github.io/Todo-List-Simple-JS-Project/',
  },
  {
    name: 'Itothya Website Project',
    description: 'A static website designed for Itothya Agency with contacts and about.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/ARVLEMED/Itothya-Website-Project',
    liveDemo: 'https://arvlemed.github.io/Itothya-Website-Project/',
  },
  {
    name: 'HTML CSS Project',
    description: 'A replica of a Wikipedia Tribute page.',
    technologies: ['HTML', 'CSS'],
    github: 'https://github.com/ARVLEMED/HTML-CSS-project',
    liveDemo: 'https://arvlemed.github.io/HTML-CSS-project/',
  },
  {
    name: 'Black Jack',
    description: 'A browser-based Black Jack game with interactive gameplay.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/ARVLEMED/Black-Jack',
    liveDemo: 'https://arvlemed.github.io/Black-Jack/',
  },
  {
    name: 'Tasklister Mini Project',
    description: 'A task management app that allows users to create and delete tasks.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/ARVLEMED/phase-1-tasklister-mini-project',
    liveDemo: 'https://arvlemed.github.io/phase-1-tasklister-mini-project/',
  },
  {
    name: 'Menu Project',
    description: 'A simple coffee menu designed for camper cafe.',
    technologies: ['HTML', 'CSS'],
    github: 'https://github.com/ARVLEMED/menu-project/',
    liveDemo: 'https://arvlemed.github.io/menu-project/',
  },
];

export default projects;
