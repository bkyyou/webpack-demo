class TsClass {
  a: number;
  fn2(a:number): number;
  fn2(a){
    return a + 1;
  }
  // 加不加 public 都一样
  // a = 123;
  // public a = 123;
  private b = 1;
  static c = 2;
  readonly d = 3;
  protected e = 4;
  private fn() {
    console.log(111);
  }

}

const tsclass = new TsClass();

class TsClass2 {
  a:number;
}

const obj: TsClass2 = {a: 1}

// tsclass.fn()


let value:unknown = {};
let value2:any = '123456';
function fn7(a: any): any {

}

function throwError(): never {
  throw new Error();
}

class C1 {
  a: number
}

class C2 {
  b: number
}

const obj3: C1 & C2 = {
  a: 1,
  b: 2,
}