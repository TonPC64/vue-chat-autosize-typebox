<template>
  <div id="app">
    <h1>Example Chat Autosize Typebox</h1>
    <ChatTypeBox v-model="text"/>
    {{text}}
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
      text: ''
    }
  }
}
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  width: 90vw;
}
</style>


