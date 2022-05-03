## typescript一个javascript的超集
> ts编译成js： tsc xxx.ts
> ts自动编译编译成js： tsc xxx.ts -w // 监听文件变化，自动编译
## 类型
- 指定数据的类型的方法
```javascript
let num: number; //声明变量时指定类型
let n: number = 10;
function fn (参数： 类型, 参数：类型)：类型{
  ...
};
// 圆括号后面的类型规定了函数返回值的类型
// 如果变量的声明和赋值是同时进行的，ts可以自动对变量进行类型检测
let bool = false;
bool = true;
// 也可以用字面量进行类型声明
 let a: 10;
 a = 10;
 a = 11; // 会报错
 let b: 'male' | 'female';
 b = male;
 // 变量b可以是male或者female（联合类型）
```
- any表示的是任意类型，一个变量设为any后相当于关闭了类型检查，不仅关闭自己的，还会关闭被它赋值的变量
  + any类型的值可以赋值给任意类型
- unknown 表示未知类型，实际上就是一个类型安全的any，不能直接赋值给其他类型
  + 解决方法一：先判断类型再赋值
  + 解决方法二：类型断言
```typescript
// 先判断类型再赋值
let a = 'Hello';
let b: unknown;
b = 10;
b = 'world'; // 正常
a = b; // 会报错
if (typeof b === 'string') {
  a = b;
};
// 类型断言两种用法
a = b as string;
a = <string>b;
```
- void 用来表示空，以函数为例，就表示没有返回值的函数
```typescript
// 以下4种void都不会报错
function fn():void {
};
function fn():void {
  return;
};
function fn():void {
  return undefined;
};
function fn():void {
  return null;
};
```
- never表示永不会返回结果
```typescript
// 报错时直接返回
function fn(): never {
  throw new Error('报错了')
};
```
- 对象object,js中一切都是对象所以let o: object;无实际的意思，太泛了
```typescript
let a: {
  name: string
  // age?: number 表示属性是可选的
};
// 会报错，因为a只能有一个name属性
a = {
  name: 'sufi',
  age: 18
};
// 解决方法有没有age都行：
let b: {
  name: string
  age?: number // 表示属性是可选的
};
// 如果定义的对象有多个可选属性，且不知可选的属性有多少个时
let c: {
  name: string,
  [anyProd: string]: any
};
```
- function函数
```typescript
let c: Function; //无实际意义
let fn: (a: number, b: number) => number;
// 会报错，参数过多
fn = (a: number, b: number, c: number): number => {
  return a + b;
};
// 正常
fn = (a: number, b: number): number => {
  return a + b;
};
```

- array数组
```typescript
let ary: string[]; // 表示字符窜数组
ary = ['a', 'b', 'c'];
let ary: Array<number>; // 表示数字数组
ary = [1, 2, 3];
```
- tuple元组，就是固定长度的数组
```typescript
let ary: [string, string]; 
ary = ['a', 'b', 'c']; // 会报错
ary = ['a', 'b']
```

- enum枚举,TS新增的类型
```typescript
enum Gender {
  Male = 0,
  Female = 1
}
let obj: {name: string, gender: Gender}; 
obj = {
  name: 'sufi',
  gender: 0
};
console.log(obj.gender === Gender.Male)
```

- &操作符
```typescript
let obj: {name: string} & {age: number};
obj = {
  name: 'sufi',
  age: 18
}; 
```

- &类型别名
```typescript
type myType = 1 | 2 | 3 | 4 | 5;
let a: myType;
let b: myType;
```
## ts配置文件tsconfig.json
> tsconfig.json:ts编译器的配置文件
- tsconfig.json:ts编译器的配置文件
  + include: 用来指定哪些文件需要被编译
    + 路径： **表示任意目录
      + *表示任意文件
  + exclude: 表示不需要被编译的文件
    + 默认值： ["node_modules","bower_components", "jspm_packages"]
  + extends: 定义被继承的配置文件
    + 例： "extends"："./configs/base"
    + 上述例子中当前配置文件中会自动包含config目录下base.json中的所有的配置信息
  + files: 指定被编译文件的列表，只有要编译的文件少时才用到
    + 如：
      + ```
        "files": [
          "index.ts",
          "sys.ts",
          "type.ts",
          "utils.ts"
        ]
        ```
  + compilerOptions // 编译器的配置选项
    + target: "ES6" // 指定ts被编译后的es的版本
    + module: "ES6" // 指定要使用的模块化的规范
    + lib: ["DOM"] // 指定项目中要使用的库,一般不用改
    + outDir: 用来指定编译后文件所在的目录
    + outFile: "./dist/app.js" 将全局作用域中的代码合并为一个文件这个要设置的话module要设为system或amd
    + allowJs: 是否对js文件进行编译,默认false
    + checkJs: 是否检查js代码是否符合语法规范,默认false
    + removeComments: 是否移除注释,默认false
    + noEmit: 不生成编译后的文件,默认false
    + noEmitOnError：当有错误时不生成编译后的文件,默认false
    + alwaysStrict: 设置编译后的文件是否使用严格模式
    + noImplicitAny: 不允许隐式的any类型
    + noImplicitThis: 不允许不明确类型的this
    + strictNullChecks: 严格检查空值+
    + strict: 所有严格检查的开关
