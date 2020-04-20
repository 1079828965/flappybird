// 主程序

import { ResourceLoader } from "./js/base/ResourceLoader.js";
import { DataStore } from "./js/base/DateStore.js";

export class Main{
  constructor(){
    console.log("游戏开始");
    // 获取canvas
    this.canvas = document.getElementById("game");
    this.ctx = this.canvas.getContext("2d");
    // 创建资源加载器
    this.loader = new ResourceLoader();
    // 获取变量池
    this.dataStore = DataStore.getInstance();
    // 资源加载成功后调用
    this.loader.onloaded( map => this.onResourceLoaded(map) );
    // this.loader.onloaded( map=>{
    //   let img = map.get("background");
    //   this.ctx.drawImage(img,0,0,img.width,img.height,0,0,this.canvas.width,this.canvas.height);
    // })
  }
  // 资源成功加载后执行的方法
  onResourceLoaded(map){
    // console.log(map);
    // 以属性的形式将数据绑定到变量池中
    this.dataStore.res = map;
    this.dataStore.canvas = this.canvas;
    this.dataStore.ctx = this.ctx;
    // console.log(this.dataStore);
    this.init();
  }

  // 游戏初始化
  init(){
    let img = this.dataStore.res.get("background");
    this.ctx.drawImage(img,0,0,img.width,img.height,0,0,img.width,img.height);
  }
} 