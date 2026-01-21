import './style.css'
import { createRouter } from './utils/router.js'
import { HomePage, initHomePage } from './pages/home.js'
import { PortfolioPage, initPortfolioPage } from './pages/portfolio.js'
import { DiscoverPage, initDiscoverPage } from './pages/discover.js'
import { ContactPage, initContactPage } from './pages/contact.js'

// Define routes
const routes = [
  {
    path: '/',
    component: HomePage,
    init: initHomePage
  },
  {
    path: '/portfolio',
    component: PortfolioPage,
    init: initPortfolioPage
  },
  {
    path: '/discover',
    component: DiscoverPage,
    init: initDiscoverPage
  },
  {
    path: '/contact',
    component: ContactPage,
    init: initContactPage
  }
]

// Initialize router
createRouter(routes)
