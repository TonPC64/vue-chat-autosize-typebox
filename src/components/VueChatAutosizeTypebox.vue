<template>
  <div>
    <textarea v-autosize placeholder="Type a message" class="typing" @keydown.enter='send' v-model="input" rows="1" maxlength="640"></textarea>
  </div>
</template>

<script>
import autosize from 'autosize'
export default {
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
    async send (e) {
      const shifted = e.shiftKey
      if (!shifted) {
        e.preventDefault()
        const text = this.input + ''
        this.$set(this, 'input', '')
        e.target.style.height = '21px'
        await this.sendMsg(text)
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
    width: calc(100% - 20px);
    overflow-y: scroll;
    flex-wrap: nowrap;
    padding: 0px;
    margin: auto 10px;
    max-height: 164px;

    resize: vertical;
    border: 0;
    border-radius: 6px;
    background-color: ghostwhite;
    /* padding: 0 10px; */
    font-size: 1rem;
    box-sizing: border-box;

  }

  .typing:focus {
    outline: none;
  }
</style>
