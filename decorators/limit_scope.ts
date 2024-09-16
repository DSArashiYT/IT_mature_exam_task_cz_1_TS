
type CorrectNumber = Brand<number, "correctNumber">

export function limitScope(min: number, max: number) {
    if(min > max) throw new limitScopeError("Min param cannot be greater than max param!")
    
    return function<T extends Record<string, any>>(target: T, key: keyof T) {
        let initialValue = target[key] as unknown

        if(initialValue === undefined) return
        assertValueIfNotIsNumber(initialValue, "Initial")
        checkNumberIsBeetwen(initialValue, min, max)
        let value = initialValue
        
        const getter = () => value
        const setter = (newVal: unknown) => {
            assertValueIfNotIsNumber(newVal, "Setter")
            checkNumberIsBeetwen(newVal, min, max)
            value = newVal
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
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