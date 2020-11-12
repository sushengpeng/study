### router:只做请求分发，没有业务逻辑
### err是统一的错误处理位置，记录错误，统一err页面。
### middlewares:业务中间件，如用户权限控制
### model只能由它的proxy访问，而proxy能被controller和service访问。
### controller主要逻辑处理
### service作为项目的业务组件。如：redis连接服务，缓存组件，日志组件等，他可以减少controller的负担。
### app:放一次性脚本
![Image text](https://img-blog.csdn.net/20161213210144853?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYmx1ZWJsdWV1dWVldw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)