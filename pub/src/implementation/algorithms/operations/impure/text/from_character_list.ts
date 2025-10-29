import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../../interface/algorithms/operations/impure/text/from_character_list"


export const $$ = ($: _et.Array<number>): string => {
    let out = ""
    $.__for_each(($) => {
        out += String.fromCodePoint($)
    })
    return out
}