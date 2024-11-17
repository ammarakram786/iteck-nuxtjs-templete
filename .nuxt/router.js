import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _076e7c7f = () => interopDefault(import('..\\pages\\home-app-landing\\index.vue' /* webpackChunkName: "pages/home-app-landing/index" */))
const _fdb69592 = () => interopDefault(import('..\\pages\\home-app-landing-onePage\\index.vue' /* webpackChunkName: "pages/home-app-landing-onePage/index" */))
const _657334e8 = () => interopDefault(import('..\\pages\\home-cloud-hosting\\index.vue' /* webpackChunkName: "pages/home-cloud-hosting/index" */))
const _240d3aa9 = () => interopDefault(import('..\\pages\\home-crypto\\index.vue' /* webpackChunkName: "pages/home-crypto/index" */))
const _78c90954 = () => interopDefault(import('..\\pages\\home-cyber-security\\index.vue' /* webpackChunkName: "pages/home-cyber-security/index" */))
const _27af1ccb = () => interopDefault(import('..\\pages\\home-data-analysis\\index.vue' /* webpackChunkName: "pages/home-data-analysis/index" */))
const _b31f5720 = () => interopDefault(import('..\\pages\\home-digital-agency\\index.vue' /* webpackChunkName: "pages/home-digital-agency/index" */))
const _c667e7b0 = () => interopDefault(import('..\\pages\\home-digital-agency-onePage\\index.vue' /* webpackChunkName: "pages/home-digital-agency-onePage/index" */))
const _0e6429cc = () => interopDefault(import('..\\pages\\home-freelance-personal\\index.vue' /* webpackChunkName: "pages/home-freelance-personal/index" */))
const _a39dfdf6 = () => interopDefault(import('..\\pages\\home-help-desk\\index.vue' /* webpackChunkName: "pages/home-help-desk/index" */))
const _0e076312 = () => interopDefault(import('..\\pages\\home-it-solutions\\index.vue' /* webpackChunkName: "pages/home-it-solutions/index" */))
const _0ec358ca = () => interopDefault(import('..\\pages\\home-it-solutions-onePage\\index.vue' /* webpackChunkName: "pages/home-it-solutions-onePage/index" */))
const _3fcb0760 = () => interopDefault(import('..\\pages\\home-it-solutions2\\index.vue' /* webpackChunkName: "pages/home-it-solutions2/index" */))
const _1b5bdf98 = () => interopDefault(import('..\\pages\\home-marketing-startup\\index.vue' /* webpackChunkName: "pages/home-marketing-startup/index" */))
const _0db07828 = () => interopDefault(import('..\\pages\\home-marketing-startup-onePage\\index.vue' /* webpackChunkName: "pages/home-marketing-startup-onePage/index" */))
const _40724fd0 = () => interopDefault(import('..\\pages\\home-nft-marketplace\\index.vue' /* webpackChunkName: "pages/home-nft-marketplace/index" */))
const _414d9ad7 = () => interopDefault(import('..\\pages\\home-payment-solutions\\index.vue' /* webpackChunkName: "pages/home-payment-solutions/index" */))
const _c46e079e = () => interopDefault(import('..\\pages\\home-saas-technology\\index.vue' /* webpackChunkName: "pages/home-saas-technology/index" */))
const _282562e9 = () => interopDefault(import('..\\pages\\home-saas-technology-onePage\\index.vue' /* webpackChunkName: "pages/home-saas-technology-onePage/index" */))
const _93d46f98 = () => interopDefault(import('..\\pages\\home-shop-modern\\index.vue' /* webpackChunkName: "pages/home-shop-modern/index" */))
const _51afc15a = () => interopDefault(import('..\\pages\\home-software-company\\index.vue' /* webpackChunkName: "pages/home-software-company/index" */))
const _c26f77ea = () => interopDefault(import('..\\pages\\home-software-company-onePage\\index.vue' /* webpackChunkName: "pages/home-software-company-onePage/index" */))
const _244db83c = () => interopDefault(import('..\\pages\\page-404\\index.vue' /* webpackChunkName: "pages/page-404/index" */))
const _158382e8 = () => interopDefault(import('..\\pages\\page-about-2\\index.vue' /* webpackChunkName: "pages/page-about-2/index" */))
const _2c987305 = () => interopDefault(import('..\\pages\\page-about-5\\index.vue' /* webpackChunkName: "pages/page-about-5/index" */))
const _fc509cce = () => interopDefault(import('..\\pages\\page-about-app\\index.vue' /* webpackChunkName: "pages/page-about-app/index" */))
const _480908b0 = () => interopDefault(import('..\\pages\\page-blog-5\\index.vue' /* webpackChunkName: "pages/page-blog-5/index" */))
const _27f2ba7e = () => interopDefault(import('..\\pages\\page-blog-5-left-sidebar\\index.vue' /* webpackChunkName: "pages/page-blog-5-left-sidebar/index" */))
const _6bb21064 = () => interopDefault(import('..\\pages\\page-blog-5-wide\\index.vue' /* webpackChunkName: "pages/page-blog-5-wide/index" */))
const _f90ceef8 = () => interopDefault(import('..\\pages\\page-blog-app\\index.vue' /* webpackChunkName: "pages/page-blog-app/index" */))
const _4d710926 = () => interopDefault(import('..\\pages\\page-blog-app-left-sidebar\\index.vue' /* webpackChunkName: "pages/page-blog-app-left-sidebar/index" */))
const _110755e0 = () => interopDefault(import('..\\pages\\page-blog-app-wide\\index.vue' /* webpackChunkName: "pages/page-blog-app-wide/index" */))
const _57606a32 = () => interopDefault(import('..\\pages\\page-career-details\\index.vue' /* webpackChunkName: "pages/page-career-details/index" */))
const _767cc2dd = () => interopDefault(import('..\\pages\\page-careers-5\\index.vue' /* webpackChunkName: "pages/page-careers-5/index" */))
const _143b6700 = () => interopDefault(import('..\\pages\\page-comming-soon-5\\index.vue' /* webpackChunkName: "pages/page-comming-soon-5/index" */))
const _7535ad52 = () => interopDefault(import('..\\pages\\page-contact-5\\index.vue' /* webpackChunkName: "pages/page-contact-5/index" */))
const _180f8ca6 = () => interopDefault(import('..\\pages\\page-contact-app\\index.vue' /* webpackChunkName: "pages/page-contact-app/index" */))
const _04aade1c = () => interopDefault(import('..\\pages\\page-faq-5\\index.vue' /* webpackChunkName: "pages/page-faq-5/index" */))
const _54f4612a = () => interopDefault(import('..\\pages\\page-portfolio-5\\index.vue' /* webpackChunkName: "pages/page-portfolio-5/index" */))
const _02f0aa7e = () => interopDefault(import('..\\pages\\page-portfolio-app\\index.vue' /* webpackChunkName: "pages/page-portfolio-app/index" */))
const _0a73e63a = () => interopDefault(import('..\\pages\\page-product-5\\index.vue' /* webpackChunkName: "pages/page-product-5/index" */))
const _7b064bf7 = () => interopDefault(import('..\\pages\\page-product-app\\index.vue' /* webpackChunkName: "pages/page-product-app/index" */))
const _fa555d18 = () => interopDefault(import('..\\pages\\page-services-5\\index.vue' /* webpackChunkName: "pages/page-services-5/index" */))
const _3c56b048 = () => interopDefault(import('..\\pages\\page-services-app\\index.vue' /* webpackChunkName: "pages/page-services-app/index" */))
const _69e91fc2 = () => interopDefault(import('..\\pages\\page-services-details-5\\index.vue' /* webpackChunkName: "pages/page-services-details-5/index" */))
const _0dd565dc = () => interopDefault(import('..\\pages\\page-shop-5\\index.vue' /* webpackChunkName: "pages/page-shop-5/index" */))
const _07a34ab0 = () => interopDefault(import('..\\pages\\page-shop-app\\index.vue' /* webpackChunkName: "pages/page-shop-app/index" */))
const _aa9dfc76 = () => interopDefault(import('..\\pages\\page-sign-in\\index.vue' /* webpackChunkName: "pages/page-sign-in/index" */))
const _4de99ae6 = () => interopDefault(import('..\\pages\\page-single-post-5\\index.vue' /* webpackChunkName: "pages/page-single-post-5/index" */))
const _10062804 = () => interopDefault(import('..\\pages\\page-single-post-5-left-sidebar\\index.vue' /* webpackChunkName: "pages/page-single-post-5-left-sidebar/index" */))
const _c87eeeb2 = () => interopDefault(import('..\\pages\\page-single-post-5-wide\\index.vue' /* webpackChunkName: "pages/page-single-post-5-wide/index" */))
const _46cea1be = () => interopDefault(import('..\\pages\\page-single-post-app\\index.vue' /* webpackChunkName: "pages/page-single-post-app/index" */))
const _090a8820 = () => interopDefault(import('..\\pages\\page-single-post-app-left-sidebar\\index.vue' /* webpackChunkName: "pages/page-single-post-app-left-sidebar/index" */))
const _5dcdc893 = () => interopDefault(import('..\\pages\\page-single-post-app-wide\\index.vue' /* webpackChunkName: "pages/page-single-post-app-wide/index" */))
const _51a862fe = () => interopDefault(import('..\\pages\\page-single-project-5\\index.vue' /* webpackChunkName: "pages/page-single-project-5/index" */))
const _baa8f15c = () => interopDefault(import('..\\pages\\page-single-project-app\\index.vue' /* webpackChunkName: "pages/page-single-project-app/index" */))
const _20bf8254 = () => interopDefault(import('..\\pages\\rtl-home-app-landing-onePage\\index.vue' /* webpackChunkName: "pages/rtl-home-app-landing-onePage/index" */))
const _ecf0fede = () => interopDefault(import('..\\pages\\rtl-home-marketing-startup\\index.vue' /* webpackChunkName: "pages/rtl-home-marketing-startup/index" */))
const _58c98749 = () => interopDefault(import('..\\pages\\rtl-home-marketing-startup-onePage\\index.vue' /* webpackChunkName: "pages/rtl-home-marketing-startup-onePage/index" */))
const _35003a4a = () => interopDefault(import('..\\pages\\rtl-page-about\\index.vue' /* webpackChunkName: "pages/rtl-page-about/index" */))
const _9ea5b14a = () => interopDefault(import('..\\pages\\rtl-page-blog\\index.vue' /* webpackChunkName: "pages/rtl-page-blog/index" */))
const _3b67bed2 = () => interopDefault(import('..\\pages\\rtl-page-contact\\index.vue' /* webpackChunkName: "pages/rtl-page-contact/index" */))
const _c2b791a2 = () => interopDefault(import('..\\pages\\rtl-page-portfolio\\index.vue' /* webpackChunkName: "pages/rtl-page-portfolio/index" */))
const _8e3d9f30 = () => interopDefault(import('..\\pages\\rtl-page-product\\index.vue' /* webpackChunkName: "pages/rtl-page-product/index" */))
const _df1650c2 = () => interopDefault(import('..\\pages\\rtl-page-services\\index.vue' /* webpackChunkName: "pages/rtl-page-services/index" */))
const _6606df87 = () => interopDefault(import('..\\pages\\rtl-page-shop\\index.vue' /* webpackChunkName: "pages/rtl-page-shop/index" */))
const _56e42212 = () => interopDefault(import('..\\pages\\rtl-page-single-post\\index.vue' /* webpackChunkName: "pages/rtl-page-single-post/index" */))
const _f471952e = () => interopDefault(import('..\\pages\\rtl-page-single-project\\index.vue' /* webpackChunkName: "pages/rtl-page-single-project/index" */))
const _7e4d371c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/home-app-landing",
    component: _076e7c7f,
    name: "home-app-landing"
  }, {
    path: "/home-app-landing-onePage",
    component: _fdb69592,
    name: "home-app-landing-onePage"
  }, {
    path: "/home-cloud-hosting",
    component: _657334e8,
    name: "home-cloud-hosting"
  }, {
    path: "/home-crypto",
    component: _240d3aa9,
    name: "home-crypto"
  }, {
    path: "/home-cyber-security",
    component: _78c90954,
    name: "home-cyber-security"
  }, {
    path: "/home-data-analysis",
    component: _27af1ccb,
    name: "home-data-analysis"
  }, {
    path: "/home-digital-agency",
    component: _b31f5720,
    name: "home-digital-agency"
  }, {
    path: "/home-digital-agency-onePage",
    component: _c667e7b0,
    name: "home-digital-agency-onePage"
  }, {
    path: "/home-freelance-personal",
    component: _0e6429cc,
    name: "home-freelance-personal"
  }, {
    path: "/home-help-desk",
    component: _a39dfdf6,
    name: "home-help-desk"
  }, {
    path: "/home-it-solutions",
    component: _0e076312,
    name: "home-it-solutions"
  }, {
    path: "/home-it-solutions-onePage",
    component: _0ec358ca,
    name: "home-it-solutions-onePage"
  }, {
    path: "/home-it-solutions2",
    component: _3fcb0760,
    name: "home-it-solutions2"
  }, {
    path: "/home-marketing-startup",
    component: _1b5bdf98,
    name: "home-marketing-startup"
  }, {
    path: "/home-marketing-startup-onePage",
    component: _0db07828,
    name: "home-marketing-startup-onePage"
  }, {
    path: "/home-nft-marketplace",
    component: _40724fd0,
    name: "home-nft-marketplace"
  }, {
    path: "/home-payment-solutions",
    component: _414d9ad7,
    name: "home-payment-solutions"
  }, {
    path: "/home-saas-technology",
    component: _c46e079e,
    name: "home-saas-technology"
  }, {
    path: "/home-saas-technology-onePage",
    component: _282562e9,
    name: "home-saas-technology-onePage"
  }, {
    path: "/home-shop-modern",
    component: _93d46f98,
    name: "home-shop-modern"
  }, {
    path: "/home-software-company",
    component: _51afc15a,
    name: "home-software-company"
  }, {
    path: "/home-software-company-onePage",
    component: _c26f77ea,
    name: "home-software-company-onePage"
  }, {
    path: "/page-404",
    component: _244db83c,
    name: "page-404"
  }, {
    path: "/page-about-2",
    component: _158382e8,
    name: "page-about-2"
  }, {
    path: "/page-about-5",
    component: _2c987305,
    name: "page-about-5"
  }, {
    path: "/page-about-app",
    component: _fc509cce,
    name: "page-about-app"
  }, {
    path: "/page-blog-5",
    component: _480908b0,
    name: "page-blog-5"
  }, {
    path: "/page-blog-5-left-sidebar",
    component: _27f2ba7e,
    name: "page-blog-5-left-sidebar"
  }, {
    path: "/page-blog-5-wide",
    component: _6bb21064,
    name: "page-blog-5-wide"
  }, {
    path: "/page-blog-app",
    component: _f90ceef8,
    name: "page-blog-app"
  }, {
    path: "/page-blog-app-left-sidebar",
    component: _4d710926,
    name: "page-blog-app-left-sidebar"
  }, {
    path: "/page-blog-app-wide",
    component: _110755e0,
    name: "page-blog-app-wide"
  }, {
    path: "/page-career-details",
    component: _57606a32,
    name: "page-career-details"
  }, {
    path: "/page-careers-5",
    component: _767cc2dd,
    name: "page-careers-5"
  }, {
    path: "/page-comming-soon-5",
    component: _143b6700,
    name: "page-comming-soon-5"
  }, {
    path: "/page-contact-5",
    component: _7535ad52,
    name: "page-contact-5"
  }, {
    path: "/page-contact-app",
    component: _180f8ca6,
    name: "page-contact-app"
  }, {
    path: "/page-faq-5",
    component: _04aade1c,
    name: "page-faq-5"
  }, {
    path: "/page-portfolio-5",
    component: _54f4612a,
    name: "page-portfolio-5"
  }, {
    path: "/page-portfolio-app",
    component: _02f0aa7e,
    name: "page-portfolio-app"
  }, {
    path: "/page-product-5",
    component: _0a73e63a,
    name: "page-product-5"
  }, {
    path: "/page-product-app",
    component: _7b064bf7,
    name: "page-product-app"
  }, {
    path: "/page-services-5",
    component: _fa555d18,
    name: "page-services-5"
  }, {
    path: "/page-services-app",
    component: _3c56b048,
    name: "page-services-app"
  }, {
    path: "/page-services-details-5",
    component: _69e91fc2,
    name: "page-services-details-5"
  }, {
    path: "/page-shop-5",
    component: _0dd565dc,
    name: "page-shop-5"
  }, {
    path: "/page-shop-app",
    component: _07a34ab0,
    name: "page-shop-app"
  }, {
    path: "/page-sign-in",
    component: _aa9dfc76,
    name: "page-sign-in"
  }, {
    path: "/page-single-post-5",
    component: _4de99ae6,
    name: "page-single-post-5"
  }, {
    path: "/page-single-post-5-left-sidebar",
    component: _10062804,
    name: "page-single-post-5-left-sidebar"
  }, {
    path: "/page-single-post-5-wide",
    component: _c87eeeb2,
    name: "page-single-post-5-wide"
  }, {
    path: "/page-single-post-app",
    component: _46cea1be,
    name: "page-single-post-app"
  }, {
    path: "/page-single-post-app-left-sidebar",
    component: _090a8820,
    name: "page-single-post-app-left-sidebar"
  }, {
    path: "/page-single-post-app-wide",
    component: _5dcdc893,
    name: "page-single-post-app-wide"
  }, {
    path: "/page-single-project-5",
    component: _51a862fe,
    name: "page-single-project-5"
  }, {
    path: "/page-single-project-app",
    component: _baa8f15c,
    name: "page-single-project-app"
  }, {
    path: "/rtl-home-app-landing-onePage",
    component: _20bf8254,
    name: "rtl-home-app-landing-onePage"
  }, {
    path: "/rtl-home-marketing-startup",
    component: _ecf0fede,
    name: "rtl-home-marketing-startup"
  }, {
    path: "/rtl-home-marketing-startup-onePage",
    component: _58c98749,
    name: "rtl-home-marketing-startup-onePage"
  }, {
    path: "/rtl-page-about",
    component: _35003a4a,
    name: "rtl-page-about"
  }, {
    path: "/rtl-page-blog",
    component: _9ea5b14a,
    name: "rtl-page-blog"
  }, {
    path: "/rtl-page-contact",
    component: _3b67bed2,
    name: "rtl-page-contact"
  }, {
    path: "/rtl-page-portfolio",
    component: _c2b791a2,
    name: "rtl-page-portfolio"
  }, {
    path: "/rtl-page-product",
    component: _8e3d9f30,
    name: "rtl-page-product"
  }, {
    path: "/rtl-page-services",
    component: _df1650c2,
    name: "rtl-page-services"
  }, {
    path: "/rtl-page-shop",
    component: _6606df87,
    name: "rtl-page-shop"
  }, {
    path: "/rtl-page-single-post",
    component: _56e42212,
    name: "rtl-page-single-post"
  }, {
    path: "/rtl-page-single-project",
    component: _f471952e,
    name: "rtl-page-single-project"
  }, {
    path: "/",
    component: _7e4d371c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
