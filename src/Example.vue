<template>
  <div id="app">
    <ChatTypeBox/>
  </div>
</template>

<script>
import ChatTypeBox from './components/VueChatAutosizeTypebox'
export default {
  name: 'app',
  components: {
    ChatTypeBox
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

