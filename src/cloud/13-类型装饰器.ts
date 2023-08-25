import { Prefix, debug, line } from "@/extra/log";

debug(Prefix.standard, "<<13-类型装饰器>>", Prefix.start);

/* 
13.1 装饰器是什么
它是一个表达式
该表达式被执行后，返回一个函数
函数的入参分别为 target、name 和 descriptor
执行该函数后，可能返回 descriptor 对象，用于配置 target 对象

13.2 装饰器的分类
类装饰器（Class decorators）
属性装饰器（Property decorators）
方法装饰器（Method decorators）
参数装饰器（Parameter decorators）
 */

// 13.3 类装饰器
declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
// target: TFunction - 被装饰的类

// 示例
function Greeter(target: Function): void {
  target.prototype.greet = function (): void {
    debug(Prefix.standard, "13.3 类装饰器", "greet");
  };
}

@Greeter
class Greeting {
  constructor() {}
}

let myGreeting = new Greeting();
(myGreeting as any).greet();  // [ '13.3 类装饰器', 'greet' ]

function GreeterS(greeting: string) {
  return function (target: Function) {
    target.prototype.greet = function (): void {
      debug(Prefix.standard, "13.3 类装饰器", "greet", greeting);
    };
  };
}
@GreeterS("Hello TS!")
class GreetingS {}
let greets = new GreetingS();
(greets as any).greet(); // [ '13.3 类装饰器', 'greet', 'Hello TS!' ]

debug(Prefix.standard, "<<13-类型装饰器>>", Prefix.end);
