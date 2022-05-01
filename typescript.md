## typescript一个javascript的超集
> ts编译成js： tsc xxx.ts
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