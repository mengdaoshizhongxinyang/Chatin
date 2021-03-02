/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-03-02 11:39:24
 * @Description: 
 */
import axios, { AxiosError, AxiosInstance, AxiosPromise } from "axios";
export namespace HTTPRequest {

}

type Friend={
  nickname:string
  remark:string
  user_id:number
}
type ReturnMessage={
  data:Friend[]
  retcode:number
  status:'error' | 'ok'
}
export class HTTPRequest {
  private request: AxiosInstance;

  constructor(port: string) {
    this.request = axios.create({
      baseURL: `http://localhost:${port}`,
      timeout: 6000
    })
    this.request.interceptors.request.use(config => {
      return config
    }, ()=>{})
    this.request.interceptors.response.use((response) => {
      return response.data
    }, ()=>{})
  }
  
  getFriendsList():AxiosPromise<ReturnMessage>{
    return this.request({
      url: '/get_friend_list',
      method: 'get'
    })
  }
}