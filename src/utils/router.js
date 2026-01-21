/**
 * Simple hash-based SPA router
 */

class Router {
  constructor(routes) {
    this.routes = routes
    this.currentRoute = null

    window.addEventListener('hashchange', () => this.handleRoute())
    window.addEventListener('load', () => this.handleRoute())
  }

  handleRoute() {
    const hash = window.location.hash || '#/'
    const path = hash.slice(1) || '/'

    const route = this.routes.find(r => r.path === path) || this.routes.find(r => r.path === '/')

    if (route && route !== this.currentRoute) {
      this.currentRoute = route
      this.render(route)
      this.updateActiveNav()
      window.scrollTo(0, 0)
    }
  }

  render(route) {
    const app = document.querySelector('#app')
    if (app && route.component) {
      app.innerHTML = route.component()

      // Initialize any event listeners after render
      if (route.init) {
        route.init()
      }
    }
  }

  updateActiveNav() {
    const navLinks = document.querySelectorAll('[data-nav-link]')
    const currentPath = window.location.hash || '#/'

    navLinks.forEach(link => {
      const href = link.getAttribute('href')
      if (href === currentPath) {
        link.classList.add('text-mountain-400')
        link.classList.remove('text-snow-400')
      } else {
        link.classList.remove('text-mountain-400')
        link.classList.add('text-snow-400')
      }
    })
  }

  navigate(path) {
    window.location.hash = path
  }
}

export function createRouter(routes) {
  return new Router(routes)
}

export function navigate(path) {
  window.location.hash = path
}
