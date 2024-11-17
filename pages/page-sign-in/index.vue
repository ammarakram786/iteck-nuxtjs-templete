<template>
  <main class="signin-page style-5">
    <SignIn />
  </main>
</template>

<script>
import SignIn from '../../components/Style2/Signin';

export default {
  name: 'PageSignin',
  layout: "Main",
  components: {
    SignIn
  },
  head() {
    return {
      titleTemplate: "%s - Page Sign In",
    }
  }
}
</script>
