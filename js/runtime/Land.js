// 地板类

import { Sprite } from "../base/Sprite.js";
import { DataStore } from "../base/DateStore.js";

export class Land extends Sprite{
  constructor(){
    // 获取地板图
    let img = Sprite.getImage("land");
    // 获取canvas的宽高
    let canvas = DataStore.getInstance().canvas;
    let height = canvas.height;
    // 重写父类构造方法,传入图片的相关参数
    let y = height - img.height;
    super(img,0,0,img.width,img.height,0,y,img.width,img.height);
  }
  // 重写父类的draw方法,让地板动起来
  draw(){
    let landX = this.x - 2;
    // 重写draw方法,其他参数不变,只改变第六个参数
    super.draw(this.img,this.srcX,this.srcY,this.srcW,this.srcH,landX,this.y,this.width,this.height);
  }
}