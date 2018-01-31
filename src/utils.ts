/* tslint:disable:no-any */
export function callFn(fn?: any, ...args: Array<any>): any {
    if (fn) {
        return fn(...args);
    }
}

export function clamp(target: number, min: number, max: number): number {
    if (target < min) {
        return min;
    }

    if (target > max) {
        return max;
    }
    
    return target;
}