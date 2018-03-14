<template>
  <div>
    <textarea v-autosize placeholder="Type a message" class="typing" @keydown.enter='send' v-model="input" rows="1" maxlength="640"></textarea>
  </div>
</template>

<script>
import autosize from 'autosize'

export default {
  name: 'VueChatAutosizeTypebox',
  directives: {
    autosize: {
      bind: function (el) {
        autosize(el)
      },
      componentUpdated: function (el) {
        autosize.update(el)
      },
      unbind: function(el) {
        autosize.destroy(el)
      }
    }
  },
  data () {
    return {
      input: ''
    }
  },
  methods: {
    send (e) {
      const shifted = e.shiftKey
      if (!shifted) {
        e.preventDefault()
        const text = this.input + ''
        this.$set(this, 'input', '')
        e.target.style.height = '21px'
        this.sendMsg(text)
      }
    },
    sendMsg (text) {
      console.log(text)
    }
  }
}
</script>

<style scoped>
  .typing {
    width: 100%;
    overflow-y: auto;
    flex-wrap: nowrap;
    max-height: 164px;
    resize: vertical;
  }
</style>
