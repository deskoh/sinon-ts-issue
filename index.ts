interface MyType<T extends any[]> {
  (...args: T): any;
}

declare let a: MyType<[any]>;
declare let b: MyType<any[]>;

// Following is an error in 3.5.1 but not 3.4.5 with `strictFunctionTypes: true`
// Type 'MyType<[any], any>' is not assignable to type 'MyType<any[], any>'.
//  Property '0' is missing in type 'any[]' but required in type '[any]'.
b = a;
