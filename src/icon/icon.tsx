/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-01-20 15:27:28
 * @Description: 
 * @GitHub: https://github.com/mengdaoshizhongxinyang
 */
import { defineComponent, h,PropType,Transition } from "vue";
import smile from "./smile";
const icons={
  smile:<smile></smile>
}
export default defineComponent({
  components:{
    smile
  },
  setup(props){
    
    return ()=>h(
      <>
      {
        icons[props.icon]
      }
      </>
    )
  },
  props:{
    icon:{
      type:String as PropType<keyof typeof icons>,
      required:true
    }
  }
})