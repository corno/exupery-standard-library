import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../../interface/algorithms/operations/impure/dictionary/build_dictionary_of_lists"


export const $$ = <T>(
    $: (
        $c: { 'add entry': (key: string, value: T) => void }
    ) => void
): _et.Dictionary<_et.Array<T>> => {
    const temp: { [key: string]: T[] } = {}
    $({
        'add entry': (key, $) => {
            if (temp[key] === undefined) {
                temp[key] = []
            }
            temp[key].push($)
        }
    })
    return _ea.dictionary_literal(temp).map(($) => _ea.array_literal($))
}