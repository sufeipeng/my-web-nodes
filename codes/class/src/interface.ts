(function() {
  // 描述一个对象的类型
  type myType = {
    name: string,
    age: number
  };
  /**
   * 接口用来定义一个类的结构，用来定义一个类中应该包含哪些属性和方法
   * 接口中所有的属性都不能有实际的值
   * 接口只定义对象的结构，而不考虑实际的值
   * 在接口中所有的方法都是抽象的方法
   * 接口也能当成类型声明去维护
   * 接口可以多次声明
   */
  interface myInterface{
    name: string,
    age: number
  };
  interface myInterface{
    gender: string
    say(): void
  };
  // obj: myType
  /* const obj: myInterface = {
    name: 'sufi',
    age: 18,
    gender: '男'
  } */
  /**
   * 定义一个类时，可以使作类去实现一个接口
   * 实现接口就是使类满足接口的要求
   */
  class myClass implements myInterface {
    name: string;
    age: number;
    gender: string;
    constructor(name:string, age: number, gender: string) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
    say() {
      console.log('您好');
    }
  };
})();