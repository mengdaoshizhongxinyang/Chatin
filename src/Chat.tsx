import { defineComponent, h, reactive } from "vue";
import style from "./Chat.module.css";
import Icon from "./icon";
import {HTTPRequest} from "./utils/httpRequest";
import Login from "./components/login";
export default defineComponent({
  components:{
    Icon
  },
  setup(){
    const data=reactive({content:"",chatRecord:[] as string[]})
    // let socket = new WebSocket("ws://localhost:8080/ws");
    // socket.onmessage = (message:MessageEvent<string>)=>{
    //   data.chatRecord.push(message.data)
    //   console.log(message.data)
    // };
    // socket.onopen = function (event) {
    //   console.log(event)
    // };
    // socket.onclose = function (event) {
    //   console.log(event)
    // };
    const sendMessage=(message:string)=>{
      // if (socket.readyState == WebSocket.OPEN) {
			// 	socket.send(message);
			// } else {
			// 	alert("连接没有开启.");
			// }
    }
    const httpRequest=new HTTPRequest('8080')
    httpRequest.getFriendsList().then(res=>{
      console.log(res)
    })
    const handleKeyPress=(e:KeyboardEvent)=>{
      if(e.key=='Enter'){
        sendMessage(data.content)
      }
    }
    return ()=>h(
      <div class={style["chat-body"]}>
        <div class={style["chat-mask"]}>
          <Login></Login>
        </div>


        <div class={style['chat-contact-list']}></div>
        <div class={style['chat-border']}>
          <div class={style['chat-border-handle']}></div>
        </div>
        <div class={style['chat-content']}>
          <div class={style['chat-title']}></div>
          <div class={style['chat-window']}>
            {
              data.chatRecord.map(item=>{
                return <div>{item}</div>
              })
            }
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