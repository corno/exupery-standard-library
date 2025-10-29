import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../../interface/algorithms/operations/impure/text/starts_with"


export const $$ = (haystack: string, needle: string, position: number) => {
    return haystack.startsWith(needle, position)
}