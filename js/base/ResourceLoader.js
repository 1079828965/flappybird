// 资源加载器,保证图片资源加载成功后再渲染图片

import { Resources } from "./Resources.js";

export class ResourceLoader{
  constructor(){
    // 创建资源集合
    this.map = new Map(Resources);
    // console.log(this.map);
    // 将map中的字符串的值替换为对应路径的图片对象
    for(let [key,val] of this.map){
      // console.log(key,val);
      const img = new Image(); 
      img.src = val; // 将图片的src属性设置为对应路径
      this.map.set(key,img); // 将key原来的字符串替换为图片对象
    }
    // console.log(this.map);
  }

  // 图片全部加载完成的方法
  onloaded(callback){
    let count = 0; // 统计已经加载成功的图片的数量
    for(let img of this.map.values()){
      img.onload = ()=>{
        count++;
        if(count>=this.map.size){
          callback(this.map);
        }
      }
    }
  }
} 