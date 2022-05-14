class Snake {
  // 蛇头的元素
  head: HTMLElement;
  // 蛇身元素
  // 数组断言HTMLCollectionOf<HTMLElement>
  bodies: HTMLCollectionOf<HTMLElement>;
  // 蛇容器
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
  }
  // 获取蛇头的横坐标
  get X() {
    return this.head.offsetLeft;
  }
  // 获取蛇头的纵坐标
  get Y() {
    return this.head.offsetTop;
  }
  // 获取蛇头的横坐标
  set X(value: number) {
    // 仠不变时，直接返回
    if (this.X === value) {
      return;
    }
    // X值的小范围是0-290；
    if (value < 0 || value > 290) {
      // 撞墙了
      throw new Error('撞墙了');
    }
    // 修改x时，是在修改水平坐标，蛇在左右移动，不能向右掉头，反之亦然
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      // 如果发生掉头，让蛇反方向运动
      if (value > this.X) {
        value = this.X - 10;
      } else {
        value = this.X + 10;
      }
    }
    this.moveBody();
    this.head.style.left = value + 'px';
    this.checkHeadBody();
  }
  // 获取蛇头的纵坐标
  set Y(value: number) {
    if (this.Y === value) {
      return;
    }
    // X值的小范围是0-290；
    if (value < 0 || value > 290) {
      // 撞墙了
      throw new Error('撞墙了');
    }
    // 修改y时，是在修改垂直方向坐标，蛇在垂直移动，不能向上掉头，反之亦然
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      // 如果发生掉头，让蛇反方向运动
      if (value > this.Y) {
        value = this.Y - 10;
      } else {
        value = this.Y + 10;
      }
    }
    this.moveBody();
    this.head.style.top = value + 'px';
    this.checkHeadBody();
  }
  // 吃食物后身体增加
  addBody() {
    this.element.insertAdjacentHTML('beforeend', "<div></div>");
  }
  // 身体移动
  /**
   * 将后边的身体设为前边身体的位置
   */
  moveBody() {
    // 遍历获所有的身体
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      (this.bodies[i] as HTMLElement).style.left = x + 'px';
      (this.bodies[i] as HTMLElement).style.top = y + 'px';
    }
  }
  checkHeadBody() {
    for (let i = 1; i < this.bodies.length; i++) {
      if (this.X === this.bodies[i].offsetLeft && this.Y === this.bodies[i].offsetTop) {
        throw new Error('撞到自己了');
      }
    }
  }
  reStart() {
    this.element.innerHTML = "<div></div>";
    this.head = document.querySelector('#snake > div') as HTMLElement;
  }
}
export default Snake;