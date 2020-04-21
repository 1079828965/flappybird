// 图片的基类

import { DataStore } from "./DateStore.js";

export class Sprite{
  constructor(img=null,srcX=0,srcY=0,srcW=0,srcH=0,x=0,y=0,width=0,height=0){
    // 初始化必要的数据
    // this.dataStore=DataStore.getInstance();
    // this.ctx=this.dataStore.ctx;
    this.ctx=DataStore.getInstance().ctx;
    this.img=img;
    this.srcX=srcX;
    this.srcY=srcY;
    this.srcW=srcW;
    this.srcH=srcH;
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
  }
  // 定义一个画图方法
  draw(
    img=this.img,
    srcX=this.srcX,srcY=this.srcY,
    srcW=this.srcW,srcH=this.srcH,
    x=this.x,y=this.y,
    width=this.width,height=this.height){
    this.ctx.drawImage(img,srcX,srcY,srcW,srcH,x,y,width,height);
  }
  // 定义一个静态方法来获取某个图片
  static getImage(key){
    return DataStore.getInstance().res.get(key);
  }
}