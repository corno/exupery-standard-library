import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

export const $$ = ($: string, separator: string): _et.Array<string> => _ea.array_literal($.split(separator))