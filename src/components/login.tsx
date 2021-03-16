/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-03-16 15:26:42
 * @Description: 
 */
import { defineComponent,h } from "vue";
import { PropTypes } from "@/utils/proptypes";
import style from "./login.module.css";
import Input from "./input/input";
export default defineComponent({
  props:{
    login:PropTypes.func<((user:string,password:string)=>void)>((user:string="",password:string="")=>{})
  },
  setup(){
    return ()=>h(
      <div class={style['chat-login']}>
        <div class={style['chat-login-top']}>
          {/* <div class={style['chat-login-top-avatar']}></div>
          <div class={style['wave']}></div> */}
        </div>
        <div class={style['chat-login-form']}>
          <div class={style['chat-login-form-item']}>
            <Input test="2"></Input>
          </div>
          <div class={style['chat-login-form-item']}>
          </div>
          <button></button>
        </div>
      </div>
    )
  }
})