import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../interface/algorithms/operations/impure/text/to_character_list"


export const $$ = ($: string): _et.Array<number> => {
    const out: number[] = []
    for (let i = 0; i < $.length; i++) {
        out.push($.charCodeAt(i))
    }
    return _ea.array_literal(out)
}