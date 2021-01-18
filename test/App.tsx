import { defineComponent, h,reactive } from "vue";
import Chat from "../index";
import "./App.css";
export default defineComponent({
  components:Chat,
  setup(){
    return ()=>h(
      <div style="background:#555;width:100%;height:100%">
        <Chat></Chat>
      </div>
    )
  }
})