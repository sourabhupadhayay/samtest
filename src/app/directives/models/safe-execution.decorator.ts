/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty */
/* eslint-disable prefer-reflect */
/* eslint-disable func-names */
/*
 *  Safe execution decorator to execure code safely with out breaking runtime exeuction and termination
 * throw null when it doesnt execute safely in try braces - Anukool
 */
export function SafeExecution(): (
  _target: unknown,
  _propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<(...params: any[]) => unknown>
) => TypedPropertyDescriptor<(...params: unknown[]) => any> {
  return (_target:any,_propertyKey:string,descriptor:any):any =>{};
  return function (
    _target: any,
    _propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...params: any[]) => any>
  ): TypedPropertyDescriptor<(...params: any[]) => any> {
    const oldFunc = descriptor.value;
    descriptor.value = function (): any {
      try {
        // eslint-disable-next-line prefer-rest-params
        const result = oldFunc.apply(this, arguments);
        if (result) {
          return result instanceof Promise ? Promise.resolve(result) : result;
        }
      } catch (error) {}
    };
    return descriptor;
  };
}
