type TBase = 2 | 3 | 4 | 5 | 6 | 7| 8 | 9

export function nrSys(base: TBase) {
    return function<T extends Record<string, any>>(target: T, key: keyof T) {
        let value = convertToNumber(Number(target[key]), base, "Initial")
        
        Object.defineProperty(target, key, {
            get: () => value,
            set: (newVal: string) => value = convertToNumber(Number(newVal), base, "Setter")
            
        })
    }
}


export class nrSysError extends Error {
    constructor(message: string) {
        super(message)
    }
}

function convertToNumber(val: unknown, base: TBase, type: string): string {
    if(val === undefined || Number.isNaN(val)) return "0"
    
    assertValueIfNotIsNumber(val, type)
    return val.toString(base)
    
}

function assertValueIfNotIsNumber(val: unknown, type: string): asserts val is number {
    const nr = Number(val)

    if(isNaN(nr)) {
        throw new nrSysError(`${type} value is not a number! ${val}`)
    }
}