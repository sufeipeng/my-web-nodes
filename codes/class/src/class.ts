// 使用class关键字来创建一个类
/**
 * 对象中主要包含了两个部分
 * 属性
 * 方法
 */
/**
 * 以abstract开头的类是抽象类
 * 抽象类和其他类的区别不大，但是不能用来创建对象
 * 抽象类就是专门用来继承的以下代码不能用new Human()来创建实例了
 */
/**
 * 属性修饰符public 修饰的属性可以在任意位置访问、修改，默认值
 * 属性修饰符private 修饰的属性只能在类的内部进行访问、修改
 * - 通过在类中添加方法使得私有属性可以在外部访问
 * 属性修饰符protected 受保护的属性，只能在当前类和当前数码相机的子类中访问
 */
abstract class Human {
  // 定义实例属性通过new来实例化后可访问D
  // - 通过在类中添加方法使得私有属性可以被外部访问
  static type = '人类';
  private _name: string;
  private _age: number;
  // 构造函数，在对象创建时调用
  constructor(name: string, age: number) {
    // 在构造函数中this表示当前的实例
    // 在构造函数中当前对象就是新建的那个对象
    // 可以通过this向新建的对象添加属性
    this._name = name;
    this._age = age;
  }
  /**
   * getter用来读取属性
   * setter用来设置属性
   * - 称为属性的存取器
   */
  get name() {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  /* getName() {
    return this._name;
  }
  setName(value: string) {
    this._name = value
  } */

  /**
   * 定义一个抽象方法
   * 抽象方法以abstract开头，没有方法体
   * 抽象方法只能定义在抽象类中，子类中必须对抽象方法进行重写
   */
  abstract say(): void;
}
/**
 * Person extends Human
 * 此时Human被称为父类，Person是子类
 * 使用继承后，子类将会拥有父类所有的方法和属性
 * 通过继承可以将多个类中共有的代码写在同一个父类中
 * 如果希望在子类中添加一引起在父类中没有的属性和方法直接添加就行
 * 如果在子类中添加了父类相同的方法，则子类会覆盖掉父类的方法
 *  这叫方法重写
 */
class Men extends Human {
  constructor(name: string, age: number) {
    super(name, age);
  }
  say() {
    console.log(`我是${this.getName()}`)
  }
};
const men = new Men('sufi', 18);
men.say();