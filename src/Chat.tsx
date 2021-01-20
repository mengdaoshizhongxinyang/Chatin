import { defineComponent, h, reactive } from "vue";
import style from "./Chat.module.css";
import Icon from "./icon";
export default defineComponent({
  components:{
    Icon
  },
  setup(){
    const data=reactive({content:""})
    let socket = new WebSocket("ws://localhost:8080/ws");
    socket.onmessage = (message:MessageEvent<string>)=>{
      console.log(message.data)
    };
    socket.onopen = function (event) {
      console.log(event)
    };
    socket.onclose = function (event) {
      console.log(event)
    };
    const sendMessage=(message:string)=>{
      if (socket.readyState == WebSocket.OPEN) {
				socket.send(message);
			} else {
				alert("连接没有开启.");
			}
    }
    const handleKeyPress=(e:KeyboardEvent)=>{
      // if(e.key=='Enter'){
      //   sendMessage(data.content)
      // }
    }
    console.log(`"${Object.keys(style).join('"|\n"')}"`)
    return ()=>h(
      <div class={style["chat-body"]}>
        <div class={style['chat-contact-list']}></div>
        <div class={style['chat-border']}>
          <div class={style['chat-border-handle']}></div>
        </div>
        <div class={style['chat-content']}>
          <div class={style['chat-title']}></div>
          <div class={style['chat-window']}>

          </div>
          <div class={style['chat-enter']}>
            <div class={style['chat-image']}>
              <Icon icon="smile"></Icon>
            </div>
            <input type="text" onKeypress={handleKeyPress} v-model={[data.content]}/>
          </div>
        </div>
      </div>
    )
  }
})