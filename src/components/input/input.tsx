/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-03-16 17:24:46
 * @Description: 
 */
import { defineComponent, h } from "vue";
type Props={
  test:string
}
export default defineComponent<Props,{},{}>({
  setup(props){
    return ()=>h(
      <div>{props.test}</div>
    )
  }
})