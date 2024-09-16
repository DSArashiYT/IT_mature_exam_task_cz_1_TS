import { limitScope, limitScopeError } from "@decorators/limit_scope"

describe("Limit Scope decorator", () => {
    const instance = limitScope(0, 10)

    it("create a function", () => {
        expect(instance).toBeInstanceOf(Function)
    })

    const exampleClass = { foo: '0', test: 1 }
    instance(exampleClass, "test")

    it("using a function and using a getter", () => {
        expect(exampleClass.test).toBe(1)
    })

    it("using a setter", () => {
        exampleClass.test = 3
        expect(exampleClass.test).toBe(3)

        exampleClass.test = 8
        expect(exampleClass.test).toBe(8)
    })


     it("using a setter with invalid Input", () => {
        try {
            exampleClass.test = -2
        }

        catch(err) {
            expect(err).toBeInstanceOf(limitScopeError)
            expect((err as limitScopeError).message).toBe(`Value must be greater or equal "0" and less or equal "10"`)
        }

     })

     it("using a function with invalid type", () => {
        try {
            instance(exampleClass, "foo")
        }

        catch(err) {
            expect(err).toBeInstanceOf(limitScopeError)
            expect((err as limitScopeError).message).toBe(`Initial value is not a number!`)
        }
     })

     it("creating a function with invalid order", () => {
        try {
            limitScope(10, 2)
        }

        catch(err) {
            expect(err).toBeInstanceOf(limitScopeError)
            expect((err as limitScopeError).message).toBe(`Min param cannot be greater than max param!`)
        }
     })
})