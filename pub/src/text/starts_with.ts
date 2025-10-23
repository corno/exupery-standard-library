import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

export const $$ = (haystack: string, needle: string, position: number) => {
    return haystack.startsWith(needle, position)
}