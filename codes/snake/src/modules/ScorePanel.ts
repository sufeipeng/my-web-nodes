// 计分盘类
class ScorePanel {
  score = 0;
  level = 1;
  scoreElement: HTMLElement;
  levelElement: HTMLElement;
  // 设置最大等级
  maxLevel: number;
  // 设置每级需要的分数
  upScore: number;
  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.maxLevel = maxLevel;
    this.upScore = upScore;
    this.scoreElement = document.getElementById('score')!;
    this.levelElement = document.getElementById('level')!;
  }
  // 设置分数增加的方法
  addScore() {
    this.score++;
    this.scoreElement.innerText = ++this.score + '';
    // 分数达到阀值时升级
    if (this.score % this.upScore === 0) {
      this.levelUp();
    }
  }
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelElement.innerText = ++this.level + '';
    }
  }
  reStart() {
    this.score = 0;
    this.level = 1;
    this.scoreElement.innerText = '0';
    this.levelElement.innerText = '1';
  }
}
export default ScorePanel;