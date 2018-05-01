<template>
  <textarea
  v-autosize="{maxHeight, minHeight}"
  :placeholder="placeholder"
  class="typing"
  @keydown.enter='send'
  v-model="input"
  :rows="1"
  :maxlength="maxLength"></textarea>
</template>

<script>
import autosize from 'autosize';

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
      default: 18
    },
    maxLength: {
      type: Number,
      default: 640
    },
    placeholder: {
      type: String,
      default: 'Type a message...'
    }
  },
  directives: {
    autosize: {
      bind: function(el, data) {
        autosize(el);
        el.style.maxHeight = `${data.value.maxHeight}px`;
        el.style.minHeight = `${data.value.minHeight}px`;
      },
      componentUpdated: function(el, data) {
        el.style.maxHeight = `${data.value.maxHeight}px`;
        el.style.minHeight = `${data.value.minHeight}px`;
        autosize.update(el);
      },
      unbind: function(el) {
        autosize.destroy(el);
      }
    }
  },
  computed: {
    input: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  },
  methods: {
    send(e) {
      const shifted = e.shiftKey;
      if (!shifted) {
        e.preventDefault();
        const text = (this.input + '').trim();
        e.target.style.height = `${this.minHeight}px`;
        if (text !== '') {
          this.$emit('send', text);
        }
      }
    }
  }
};
</script>

<style scoped>
.typing {
  width: 100%;
  overflow-y: auto;
  flex-wrap: nowrap;
  resize: none;
  padding: 0px;
}
.typing:focus {
  outline: none;
}
</style>
