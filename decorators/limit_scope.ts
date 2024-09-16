
type CorrectNumber = Brand<number, "correctNumber">

export function limitScope(min: number, max: number) {
    if(min > max) throw new limitScopeError("Min param cannot be greater than max param!")
    
    return function<T extends Record<string, any>>(target: T, key: keyof T) {
        let initialValue = target[key] ?? min
        
        const getter = () => initialValue
        const setter = (newVal: unknown) => {
            assertValueIfNotIsNumber(newVal, "Setter")
            checkNumberIsBeetwen(newVal, min, max)
            initialValue = newVal
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        })
    }
}

export class limitScopeError extends Error {
    constructor(message: string) {
        super(message)
    }
}

function assertValueIfNotIsNumber(arg: unknown, type: string): asserts arg is number {
    if(typeof arg !== "number") throw new limitScopeError(`${type} value is not a number!`)
}

function checkNumberIsBeetwen(val: number, min: number, max: number): asserts val is CorrectNumber {
    if(val < min || val > max) throw new limitScopeError(`Value must be greater or equal "${min}" and less or equal "${max}"`)
}