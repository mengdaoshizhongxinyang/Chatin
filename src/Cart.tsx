import { defineComponent, h } from "vue";
import style from "./Chat.module.css";

export default defineComponent({
  setup(){
    console.log(`"${Object.keys(style).join('"|\n"')}"`)
    return ()=>h(
      <div class={style["chat-body"]}>
        <div class={style['chat-contact-list']}></div>
        <div class={style['chat-border']}></div>
        <div class={style['chat-content']}>
          <div class={style['chat-title']}></div>
          <div class={style['chat-window']}></div>
          <div class={style['chat-enter']}></div>
        </div>
      </div>
    )
  }
})