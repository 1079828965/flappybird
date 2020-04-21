// 导演类,控制游戏的流程

import { DataStore } from "./base/DateStore.js";

export class Director{
  constructor(){
    this.dataStore=DataStore.getInstance();
  }
  static getInstance(){
    if(!Director.instance){
      Director.instance=new Director();
    }
    return Director.instance;
  }

  // 游戏开始的方法
  run(){
    // 取出图片开始绘制
    this.dataStore.get("background").draw();
    this.dataStore.get("land").draw();
    
  }
}



