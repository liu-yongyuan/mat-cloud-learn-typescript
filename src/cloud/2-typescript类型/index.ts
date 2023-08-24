import { debug, Prefix } from "@/extra/log";

// Boolean 类型
let isDone: Boolean = false;

// 数值类型
let count: Number = 10;

// 字符类型
let name: String = "mat";

// 数组类型
let list: number[] = [1, 2, 3, 4];
let listx: Array<number> = [2, 2, 3, 4];

// 输出
debug(Prefix.standard, isDone, count, list, listx);

// enum 类型
/* 
数值类型
{
    '0': 'NORTH',
    '1': 'SOUTH',
    '3': 'EAST',
    '4': 'WEST',
    NORTH: 0,
    SOUTH: 1,
    EAST: 3,
    WEST: 4
  },
 */
enum Direction {
  NORTH, // 默认为 0
  SOUTH, // 默认为 1
  EAST = 3, // 默认为 2, 这利设置为 3
  WEST, // 默认为 3， 上面的使用了 3，这里会默认为 4
}
let dir: Direction = Direction.NORTH;
debug(Prefix.standard, Direction, dir);

/* 异构枚举值
 [ { '0': 'A', '1': 'B', '8': 'E', A: 0, B: 1, C: 'C', D: 'D', E: 8 } ]
 */
enum Heterogeneous {
  A,
  B,
  C = "C",
  D = "D",
  E = 8,
}
debug(Prefix.standard, Heterogeneous);

// Any 类型
/* 
Any 类型本质上是类型系统的逃逸舱，允许对 any 类型的值执行任何操作，而无需做任何的检查。
[standard]  ---  [ 666 ]
[standard]  ---  [ 'Mat' ]
[standard]  ---  [ false ]
 */
let notSure: any = 666;
debug(Prefix.standard, notSure);
notSure = 'Mat';
debug(Prefix.standard, notSure);
notSure = false;
debug(Prefix.standard, notSure);