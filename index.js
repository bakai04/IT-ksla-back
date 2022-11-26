import http from "http";
import EventEmitter from "events";
const PORT = process.env.PORT || 5000;

const emitter = new EventEmitter();


class Router {
  constructor(){
    this.endpoints={}
  }

  request(method = "GET", path, handler){
    if(!this.endpoints[path]){
      this.endpoints[path] = {}
    }

    const endpoint = this.endpoints[path];
    
    if(endpoint[method]){
      throw new Error(`[${method}] по адресу ${path} не существует`);
    }

    endpoint[method] = handler;
    emitter.on(`[${path}]:[${method}]`, (req, resp)=>{
      handler(req, resp)
    })
  }
  
  get(path, handler){
    this.request("GET", path, handler);
  }

  put(path, handler){
    this.request("PUT", path, handler);
  }

  delete(path, handler){
    this.request("DELETE", path, handler);
  }

  post(path, handler){
    this.request("POST", path, handler);
  }
}

const router = new Router ();

router.get("/activists", (req, resp)=>{
  resp.end("werwefsvzvx")
})

router.get("/admin", (req, resp)=>{
  resp.end("werwefsvzvx")
})

const server = http.createServer((req, resp)=>{
  const emitted = emitter.emit(`[${req.url}]:[${req.method}]`, req, resp);
  if(!emitted){
    req.end("asd")
  }  
})

server.listen(PORT, ()=>console.log(`server succesful started on port - ${PORT}`));