// 定义食物类
class Food {
  // 定义一个属性来表示食物所对应的元素
  element: HTMLElement;
  constructor() {
    // 获取页面中的food元素！表示它肯定存在
    this.element = document.getElementById('food')!;
  }
  get X() {
    return this.element.offsetLeft;
  }
  get Y() {
    return this.element.offsetTop;
  }
  getPosition() {
    return Math.round(Math.random() * 29) * 10
  }
  // 修改食物的位置
  change(bodies: HTMLCollectionOf<HTMLElement>) {
    // 生成一个随机的位置
    // 食物的位置范围为0-290
    let top = this.getPosition();
    let left = this.getPosition();
    // 食物与身体重合时重新生成
    for (let i = 0; i < bodies.length; i++) {
      if (left === bodies[i].offsetLeft && top === bodies[i].offsetTop) {
        this.change(bodies);
        break;
      }
    }
    this.element.style.top = top + 'px';
    this.element.style.left = left + 'px';
  }
}
export default Food;