type TBase = 2 | 3 | 4 | 5 | 6 | 7| 8 | 9

export function nrSys(base: TBase) {
    return function<T extends Record<string, any>>(target: T, key: keyof T) {
        let value = convertToNumber(target[key] ?? "0", base, "Initial")
        
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: true,
            get: () => value,
            set: (newVal: unknown) =>{ 
                value = convertToNumber(newVal, base, "Setter") 
            },

        
        })
    }
}
export class nrSysError extends Error {
    constructor(message: string) {
        super(message)
    }
}

function convertToNumber(val: unknown, base: TBase, type: string): string {
    assertValueIfNotIsNumber(val, type)
    return convertTo(val, base)
}       

function assertValueIfNotIsNumber(val: unknown, type: string): asserts val is number {
    const nr = Number(val)

    if(isNaN(nr)) {
        throw new nrSysError(`${type} value is not a number!`)
    }
}

function convertTo(val: number, base: TBase): string {
    if(val === 0) return "0"
    let resRev = ""
    
    while(val !== 0) {
        resRev += `${val % base}`
        val = (val - (val % base)) / base
    }

    return reverseString(resRev)
}

function reverseString(str: string) {
    let res = ""

    for(let i = str.length - 1; i >= 0; i--) {
        res += str.charAt(i)
    }

    return res
}