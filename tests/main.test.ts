import { Solution } from "@app/main"
import { Area } from "@classes/Area"

describe("Solution", () => {
    let instance: Solution
    beforeEach(() => {
        
        instance = new Solution("19")
    })

    it("should create instance", () => {
        expect(instance).toBeTruthy()
    })

    it("calculate task number 1", () => {
        expect(instance.task_nr1(new Area(3, 5))).toBe("1")
    })

    
    it("change number", () => {
        instance.numberToCalculate = "179"
        expect(instance.numberToCalculate).toBe("10110011")
    })

    it("calculate task number 1 part 2", () => {
        expect(instance.task_nr1(new Area(4, 5))).toBe("1")
    })
})