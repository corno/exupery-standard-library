import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../../interface/algorithms/operations/impure/dictionary/group"


export type Key_Value_Pair<T> = {
    key: string
    value: T
}

export const $$ = <T>($: _et.Dictionary<Key_Value_Pair<T>>): _et.Dictionary<_et.Array<T>> => {
    
    const temp : { [key: string]: T[] } = {}

    $.map(($, key) => {
        if (temp[$.key] === undefined) {
            temp[$.key] = []
        }
        temp[$.key].push($.value)
    })
    return _ea.dictionary_literal(temp).map(($, key) => {
        return _ea.array_literal($)
    })
}