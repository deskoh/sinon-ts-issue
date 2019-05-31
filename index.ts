import { SinonStub } from 'sinon';

let y: SinonStub<[any], any> = {} as any;

// Type 'SinonStub<[any], any>' is not assignable to type 'SinonStub<any[], any>'.
//  Property '0' is missing in type 'any[]' but required in type '[any]'.
let x: SinonStub<any[], any> = y;


interface MyType<T, U> {
  t: T;
  u: U;
}

let a: MyType<[any], any> = {} as any;
let b: MyType<any[], any> = a; // OK
