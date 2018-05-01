# vue-chat-autosize-typebox

[![NPM version](https://img.shields.io/npm/v/vue-chat-autosize-typebox.svg?style=flat)](https://npmjs.com/package/vue-highlighter)
[![NPM downloads](https://img.shields.io/npm/dm/vue-chat-autosize-typebox.svg?style=flat)](https://npmjs.com/package/vue-highlighter)
[![Build Status](https://travis-ci.org/TonPC64/vue-chat-autosize-typebox.svg?branch=master)](https://travis-ci.org/TonPC64/vue-chat-autosize-typebox)

> Vue component of typebox chat with autosize.

## [DEMO](http://vue-chat-autosize-typebox.surge.sh/)

<p style="text-align: center;">
  <img src="./images/example.gif"/>
</p>

## Install

```js
import Vue from 'vue';
import ChatTypeBox from 'vue-chat-autosize-typebox';

Vue.component('ChatTypeBox', ChatTypeBox);
```

## Usage

```html
<ChatTypeBox v-model="text" @send="send"/>
```

## Events

| Name | defualt parameter | Description                                          |
| :--- | :---------------- | ---------------------------------------------------- |
| send | (text)            | emit trim message to event, if empty string not send |

## Props

| Name        | Type   | Default             | Description                    |
| :---------- | :----- | :------------------ | :----------------------------- |
| v-model     | string |                     | binding data (required)        |
| maxHight    | Number | 164                 | max height of typebox          |
| minHeight   | Number | 18                  | min height of typebox          |
| maxLength   | Number | 640                 | limit length of message        |
| placeholder | string | 'Type a message...' | placeholder message in typebox |
