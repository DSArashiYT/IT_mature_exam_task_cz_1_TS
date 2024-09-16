import { nrSys, nrSysError } from "@decorators/convert_to_sys"

describe("Convert Number To Specifed Number System", () => {
    const instance = nrSys(2)

    it("create a function", () => {
        expect(instance).toBeInstanceOf(Function)
    })

    const exampleClass = { foo: '0', test: 1 }
    instance(exampleClass, "foo")

    it("using a function and using a getter", () => {
        expect(exampleClass.foo).toBe("0")
    })

    it("using a setter", () => {
        exampleClass.foo = "4"
        expect(exampleClass.foo).toBe("100")

        exampleClass.foo = "255"
        expect(exampleClass.foo).toBe("11111111")
    })

    it("using a setter with invalid input", () => {
        try {
            exampleClass.foo = "a"
        }

        catch(err) {
            expect(err).toBeInstanceOf(nrSysError)
            expect((err as nrSysError).message).toBe("Setter value is not a number!")
        }
    })

    it("using a function with invalid type", () => {
        try {
            instance(exampleClass, "test")
        }

        catch(err) {
            expect(err).toBeInstanceOf(nrSysError)
            expect((err as nrSysError).message).toBe(`Initial value is not a number`)
        }
    })

})