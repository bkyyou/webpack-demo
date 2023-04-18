type aString = string | number | number[];
type obj1 = {
 a: number
}
type obj2 = {
 b: number
}
type objAll = obj1 & obj2
// 函数
type f1 = (a: string) => string

const a: aString = 1;
const f1: f1 = () => '1';
f1('111');


