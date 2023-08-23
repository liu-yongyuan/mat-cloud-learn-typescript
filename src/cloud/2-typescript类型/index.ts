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
