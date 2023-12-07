
export function isNull<T>(input: T | null): input is null {
    return input === null;
}

export function isUndefined<T>(input?: T): input is undefined {
    return input === undefined;
}

export function isNullOrUndefined<T>(input?: T | null): input is null | undefined {
    return isNull(input) || isUndefined(input);
}

export function isDefinedAndNotNull(input?: string | null | undefined): input is string;
export function isDefinedAndNotNull(input?: number | null | undefined): input is number;
export function isDefinedAndNotNull(input?: bigint | null | undefined): input is bigint;
export function isDefinedAndNotNull(input?: boolean | null | undefined): input is boolean;
export function isDefinedAndNotNull(input?: undefined | null): false;
export function isDefinedAndNotNull(): false;
export function isDefinedAndNotNull(input?: any): boolean;
export function isDefinedAndNotNull(input?: any): boolean {
    return !isNullOrUndefined(input);
}
// export function isDefinedAndNotNull<T>(input: T): input is T {
//     if(input === null || input === undefined) {
//         return false;
//     }

//     return true;
// }

export function isTruthy<T extends number>(input: number): input is number;
export function isTruthy<T extends string>(input: string): input is string;
export function isTruthy<T extends Record<K,V>, K extends string, V extends object>(input: Record<K,V>): input is Record<K,V>;
export function isTruthy<T extends Array<K>, K extends object>(input: Array<K>): input is Array<K>;
export function isTruthy<T extends boolean>(input: boolean): input is true;
// export function isTruthy<T extends object>(input?: T): input is true;
export function isTruthy<T>(input: T): boolean;
export function isTruthy<T>(input: T) {
    return !!input;
}

export function isFalsy<T extends number>(input: number): input is 0;
export function isFalsy<T extends string>(input: string): input is "";
export function isFalsy<T extends undefined>(input: undefined): input is undefined;
export function isFalsy<T extends null>(input: null): input is null;
export function isFalsy<T extends typeof NaN>(input: typeof NaN): input is typeof NaN;
export function isFalsy<T extends boolean>(input: boolean): input is false;
export function isFalsy<T>(input: T): boolean;
export function isFalsy<T>(input: T): boolean {
    return !input;
}
