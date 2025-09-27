import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

export const $$ = ($: string, patterns: _et.Array<{ 'search value': string, 'replace value': string }>) => {
    let current = $
    patterns.__for_each(($) => {
        current = current.replaceAll($['search value'], $['replace value'])
    })
    return current
}