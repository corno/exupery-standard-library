import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Signature } from "../../../../interface/algorithms/operations/impure/dictionary/to_list"



export type Key_Value_Pair<T> = {
    'key': string
    'value': T
}

export type Compare_Result =
    | 'left is before right'
    | 'both are equal'
    | 'right is before left'

export const $$ = <T>(
    $: _et.Dictionary<T>,
    $c: {
        'compare': (left: string, right: string) => Compare_Result
    }
): _et.Array<Key_Value_Pair<T>> => {
    const temp: Key_Value_Pair<T>[] = []
    $.map(($, key) => temp.push({
        'key': key,
        'value': $
    }))
    temp.sort((a, b) => {
        const compare_result = $c['compare'](a.key, b.key)
        if (compare_result === 'left is before right') {
            return -1
        } else if (compare_result === 'right is before left') {
            return 1
        } else {
            return 0
        }
    })
    return _ea.array_literal(temp)
}