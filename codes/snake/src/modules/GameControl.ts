import Food from "./Food";
import Snake from "./Snake";
import ScorePanel from "./ScorePanel";
import Audio from 'ts-audio';
// 游戏控制器，控制其他所有类
class GameControl {
  // 定义三个属性
  // 蛇
  snake: Snake;
  // 食物
  food: Food;
  // 记分盘
  scorePanel: ScorePanel;
  // 蛇的移动方向
  direction: string = 'Right';
  // 是否还活着
  isLive = true;
  reStartEle: HTMLElement;
  over: HTMLElement;
  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.reStartEle = document.getElementById('reStart')!;
    this.over = document.getElementById('game_over')!;
    this.init();
  }
  init() {
    // 绑定键盘按下的事件
    // this.keydownHandler.bind(this)
    document.addEventListener('keydown', (event: KeyboardEvent) => this.keydownHandler(event));
    document.addEventListener('click', (e:Event) => {
      if ((e.target as HTMLElement).id === 'reStart') {
        this.reStart();
      }
    });
    this.run();
  }
  keydownHandler(event: KeyboardEvent) {
    this.direction = event.key;
  }
  /**
   * 控制蛇移动的方法
   * 根据direction的值使蛇的位置改变
   * 向上top减少
   * 向下top增加
   * 向左left减少
   * 向右left增加
   */
  run() {
    // 获取蛇现在的位置
    let x = this.snake.X;
    let y = this.snake.Y;
    // 根据按键的方向计算x,y的值
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        // 向上移动
        y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        // 向下移动
        y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        // 向左移动
        x -= 10;
        break;
      case "ArrowRight":
      case "Right":
        // 向右移动
        x += 10;
        break;
    }
    // 检查是否吃到食物
    this.checkEat(x, y)
    try {
      this.snake.X = x;
      this.snake.Y = y;
    } catch(e) {
      this.isLive = false;
      this.over.style.display = "block";
    }
    
    this.isLive && setTimeout(() => {
      this.run();
    }, 300 - (this.scorePanel.level - 1) * 30);
  }
  // 检查蛇是否吃到食物
  checkEat(x: number, y: number) {
    if (x === this.food.X && y === this.food.Y) {
      // 生成新食物
      this.food.change(this.snake.bodies);
      // 增加分数
      this.scorePanel.addScore();
      // 蛇要增加一节
      this.snake.addBody();
    }
  }
  reStart() {
    this.snake.reStart();
    this.scorePanel.reStart();
    this.over.style.display = "none";
    this.run();
    this.isLive = true;
    this.direction = 'Right';
  }
}
export default GameControl;