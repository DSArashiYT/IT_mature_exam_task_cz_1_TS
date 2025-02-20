import { nrSys } from "@decorators/convert_to_sys";
import { Area } from "@classes/Area";

export class Solution {
    @nrSys(2)
    numberToCalculate: string

    task_nr1(area: Area) {
        const totalArea = area.a * area.b
        return this.numberToCalculate.charAt(this.numberToCalculate.length  - (totalArea % this.numberToCalculate.length ) - 1)
    }

    
    constructor(number: string) {
        this.numberToCalculate = number
    }
}