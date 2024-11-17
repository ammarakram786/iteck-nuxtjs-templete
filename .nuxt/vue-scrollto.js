import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {"duration":1000})

export default function (ctx, inject) {
    inject('scrollTo', VueScrollTo.scrollTo)
}
