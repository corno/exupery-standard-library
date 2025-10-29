import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../interface/algorithms/operations/impure/text/replace_all_occurences"


export const $$ = ($: string, search_value: string, replace_value: string) => {
            return $.replaceAll(search_value, replace_value)
        }