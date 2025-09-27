import * as _et from 'exupery-core-types'
import * as _ei from 'exupery-core-internals'


export type Temp_Pure = {
    'dictionary': {
        'build dictionary of lists': <T>($: ($c: { 'add entry': (key: string, value: T) => void }) => void) => _et.Dictionary<_et.Array<T>>
        'build, overwrite clashing keys': <T>($: ($c: { 'add entry': (key: string, value: T) => void }) => void) => _et.Dictionary<T>
        'build, ignore clashing keys': <T>($: ($c: { 'add entry': (key: string, value: T) => void }) => void) => _et.Dictionary<T>

    }
}

export const $$: Temp_Pure = {
    'dictionary': {
        'build dictionary of lists': <T>(
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
            return _ei.dictionary_literal(temp).map(($) => _ei.array_literal($))
        },
        'build, overwrite clashing keys': <T>(
            $: (
                $c: { 'add entry': (key: string, value: T) => void }
            ) => void
        ): _et.Dictionary<T> => {
            const temp: { [key: string]: T } = {}
            $({
                'add entry': (key, $) => {

                    temp[key] = $
                }
            })
            return _ei.dictionary_literal(temp)
        },
        'build, ignore clashing keys': <T>(
            $: (
                $c: { 'add entry': (key: string, value: T) => void }
            ) => void
        ): _et.Dictionary<T> => {
            const temp: { [key: string]: T } = {}
            $({
                'add entry': (key, $) => {
                    if (temp[key] === undefined) {
                        temp[key] = $
                    }
                }
            })
            return _ei.dictionary_literal(temp)
        },
    },
}