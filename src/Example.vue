<template>
  <div id="app">
    <h1>Example Chat Autosize Typebox</h1>
    <table style="text-align: left;" width="200">
      <th>Action</th>
      <th>Short cut key</th>
      <tr>
        <td>Send</td>
        <td>:enter</td>
      </tr>
      <tr>
        <td>New Line</td>
        <td>:shift+enter</td>
      </tr>
    </table>
    <br>
    <b >Install</b>
    <pre style="text-align: left;" v-highlightjs="install"><code class="javascript"></code></pre>
    <b>Usage</b>
    <pre v-highlightjs="sourcecode"><code class="html"></code></pre>

    <div style="width: 300px;">
      <ChatTypeBox v-model="text" @send="send"/>
    </div>
  </div>
</template>

<script>
import ChatTypeBox from './components/VueChatAutosizeTypebox';
export default {
  name: 'app',
  components: {
    ChatTypeBox
  },
  data() {
    return {
      text: '',
      sourcecode: `<ChatTypeBox v-model="text" @send="send"/>`,
      install: `
      import Vue from 'vue'
      import ChatTypeBox from 'vue-chat-autosize-typebox'

      Vue.component('ChatTypeBox', ChatTypeBox)
      `
    };
  },
  methods: {
    send(text) {
      alert(text);
      this.text = '';
    }
  }
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 768px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
}
</style>
