// 变量池,用于保存游戏过程中用到的数据

export class DataStore{
  constructor(){
    this.map = new Map();
    // console.log("创建了一个变量池");
  }
  // 单例
  // 保证所有人拿到的变量池是同一个变量池
  // static修饰的方法(静态方法)只能由类来调用
  static getInstance(){
    // 先判断DataStore.instance有没有值
    if(!DataStore.instance){ // 如果没有值,则new一个出来
      DataStore.instance = new DataStore();
    }
    // 如果有值,则直接返回原来的值
    return DataStore.instance;
  }

  // 存数据
  put(key,val){
    this.map.set(key,val);
    return this;
  }

  // 取数据
  get(key){
    return this.map.get(key);
  }

  // 销毁数据(销毁的是put方法保存的数据)
  destroy(){
    for(let val of this.map.values()){
      val = null;
    }
  }
}