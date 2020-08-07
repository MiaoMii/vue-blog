### 原始数据类型
1. 布尔值 `let test : boolean = false`
2. 数值 `let test : number = 7`
3. 字符串 `let test : string = 'seven'`
4. 空值 `let test : void = 'undefined` void类型变量只能将它赋值为undefinde和null
5. Undefined `let test : undefined = undefined`
6. Null`let test : null = null`
+ Undefined和Null 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：

### 任意值 any
any类型可以赋值任何类型的值

### 类型推论
TypeScript会在没有指定类型时推测出一个类型
+ 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查
### 联合类型
let test: number | string = 1 / 'one'  允许被使用数字和字符串类型

**只能访问联合类型中的共有属性**
例：
```typescript
function getLength(someThing: string | number): number {  
    return someThing.length;
}
// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.

function getString(someThing: string | number): string {  
    return someThing.toString();
}
```
### 接口
> 对行为对象的抽象
```typescript
interface Person {
  age: number,
  name: string
}

// 约束了tom 的形状和 Person必须一样 多一个属性，少一个属性都会报错
let tom: Person = {
    age: 10,
    name: '张三'
}

// 当我们希望接口和所定义的变量形状不一样时，可以用可选属性?
interface Person {
  age: number,
  name?: string
}

```
### 任意属性
```typescript
interface Person {
    name: string;
    age?: number;
    [propName: string]: any; // 属性名取string类型 属性值取any类型
}

interface otherPerson {
    name: string;
    age?: number;
    [propName: string]: string|number;
}

let me: Person = {
    name: 'superman',
    age: 24,
    wing: 'two',
    fly: true
}

// 值得注意的是，如果设置了任意属性值的类型不为any如string，则接口中确定属性和可选属性值都应为string类型
let errorMe: otherPerson = {
    name: 'superman',
    age: 24,    // 此时的age类型必须为
    wing: 'two'
}
```

### 只读属性
```typescript
    interface Person {
        readonly name: string;  //只读属性
        age?: number;
    }
    
    let me: Person = {
        name: '张三',
        age: 12
    }
    me.name = '李四'  //error
```

### 数组的类型

```typescript
// 数组中不允许有除了number以外的元素，数组的一些方法的参数也会限制
let arr: number[] = [1, 1, 2, 3, 5];
arr.push('6') //error 数组的一些方法的参数也会限制
```

### 数组范型
` Array<elemType> ` 表示数组

### 用接口表示数组
接口也可以用来描述数组
```typescript
interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];
```
### 类数组
```typescript
function sum() {
    let args: number[] = arguments;
}

// Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 24 more.

// 类数组应该用接口的方式定义
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}
```

### 函数声明
```typescript
function sum(x: number, y: number): number {
    return x + y;
}
// 输入多余或少于要求的参数是不被允许的
```
#### 用接口定义函数的形状
```typescript
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}
```

#### 可选参数
```typescript
function buildName(firstName: string, lastName?: string) {
     if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
buildName('tom', 'cat')
buildName('tom')

```
+ typescript会将参数默认值识别成可选参数
### 类型断言
语法 `值 as 类型` 或 `<类型>值`
#### 将一个父类断言为更加具体的子类
```typescript
class ApiError extends Error {
    code: number = 0;
}
class HttpError extends Error {
    statusCode: number = 200;
}

function isApiError(error: Error) {
    if (typeof (error as ApiError).code === 'number') {
        return true;
    }
    return false;
}
```
#### 类型断言的限制
+ 联合类型可以被断言成其中一个类型
+ 父类可被断言成子类
+ 任何类型都可以被断言为any
+ any可以被断言为任何类型
即若 A兼容B A能够断言成为B， B也可以断言成为A
```typescript
interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}

let tom: Cat = {
    name: 'Tom',
    run: () => { console.log('run') }
};
let animal: Animal = tom;
```

cat包含Animal中的所有属性，相当于 `cat extent Animal`
```typescript
interface Animal {
    name: string;
}
interface Cat extends Animal {
    run(): void;
}
```

+ 允许 animal as Cat 是因为「父类可以被断言为子类」，这个前面已经学习过了
+ 允许 cat as Animal 是因为既然子类拥有父类的属性和方法，那么被断言为父类，获取父类的属性、调用父类的方法，就不会有任何问题，故「子类可以被断言为父类」


### 声明文件
> 当使用第三方库时，我们需要引入他的声明文件
#### 声明文件，必须以.d.ts为后缀
+ 一般来说全局变量都是禁止修改的常量

### 泛型
> 指在定义函数、接口、或类的时候，不预先指定类型，在使用时在指定一种类型的特性
```typescript
    // 函数名后添加<T>，T表示任意类型，在后续value: T 和输出 Array<T>
    function creatArray<T> (length: number, value: T): Array<any> {
        let result: T[] = [];
        for (let i = 0; i < length; i++) {
            result[i] = value;
        }
        return result;
    }
```
#### 泛型约束
```typescript
    // 在函数内部使用泛型变量时，由于不确定类型，所以不能操作他的属性和方法
    function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);
    return arg;
}

// index.ts(2,19): error TS2339: Property 'length' does not exist on type 'T'.

interface Lengthwise {
    length: number;
}
// 泛型约束
function loggingIdentitys<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
// 泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
```


### 类型别名
> 类型别名会给类型起一个新名字

### 类与接口
不同的类之间有共性，就可以将共性提取成接口用 `implements` 关键字来实现。
```typescript
interface Alarm {
    alert(): void;
}

interface Light {
    lightOn(): void;
    lightOff(): void;
}

// 一个类可以实现多个接口  Car 实现了 Alarm 和 Light 接口，既能报警，也能开关车灯。
class Car implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}
```
### 接口继承类
```typescript
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
```
