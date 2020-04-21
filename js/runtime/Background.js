// 背景类

import { DataStore } from "../base/DateStore.js";
import {Sprite} from "../base/Sprite.js";


export class Background extends Sprite{
  constructor(){
    // 获取背景图
    // DataStore.getInstance().res.get("background");
    let img=Sprite.getImage("background");
    // 获取canvas的宽高
    let canvas=DataStore.getInstance().canvas;
    let width=canvas.width;
    let height=canvas.height;
    // console.log(img);
    // 重新父类构造方法,传入图片的相关参数
    super(img,0,0,img.width,img.height,0,0,width,height);
  }
}