/*
 * @Author: mengdaoshizhongxinyang
 * @Date: 2021-01-18 15:33:17
 * @Description: 
 * @GitHub: https://github.com/mengdaoshizhongxinyang
 */
declare module "*.css" {
  type keyArray = "chat-body" | 
  "chat-contact-list" | 
  "chat-contact-avatar-list" | 
  "chat-border" | 
  "chat-content" | 
  "chat-title" | 
  "chat-window" | 
  "chat-enter"
  const less: { [key in keyArray]: string };
  export default less;
}
