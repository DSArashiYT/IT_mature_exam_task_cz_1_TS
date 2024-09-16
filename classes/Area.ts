import { limitScope } from "@decorators/limit_scope";

export class Area {
    @limitScope(0, 100)
    a: number

    @limitScope(0, 100)
    b: number

    constructor(a: number, b: number) {
        this.a = a
        this.b = b
    }
}