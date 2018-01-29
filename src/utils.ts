/* tslint:disable:no-any */
export function callFn(fn?: any, ...args: Array<any>): any {
    if (fn) {
        return fn(...args);
    }
}