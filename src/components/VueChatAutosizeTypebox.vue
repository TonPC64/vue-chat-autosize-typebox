<template>
  <div>
    <textarea
    v-autosize="maxHeight"
    :placeholder="placeholder"
    class="typing"
    @keydown.enter='send'
    v-model="input"
    rows="1"
    maxlength="640"></textarea>
  </div>
</template>

<script>
import autosize from 'autosize'

export default {
  name: 'vueChatAutosizeTypebox',
  props: {
    value: {
      type: String,
      require: true
    },
    maxHeight: {
      type: Number,
      default: 164
    },
    minHeight: {
      type: Number,
      default: 21
    },
    placeholder: {
      type: String,
      default: 'Type a message...'
    }
  },
  directives: {
    autosize: {
      bind: function (el, data) {
        autosize(el)
        el.style.maxHeight = `${data.value}px`
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
    return {}
  },
  computed: {
    input: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    send (e) {
      const shifted = e.shiftKey
      if (!shifted) {
        e.preventDefault()
        const text = this.input + ''
        this.$set(this, 'input', '')
        e.target.style.height = `${this.minHeight}px`
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
    resize: none;
  }
  .typing:focus {
    outline: none;
  }
</style>
