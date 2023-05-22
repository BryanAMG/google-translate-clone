// const TRANSLATE_ACTIONS = {
//   EXCHANGE_LANGUAGES: 'EXCHANGE_LANGUAGES'
import { type AUTO_LANGUAGE, type SUPPORTED_LANGUAGES } from './constans'
// para los payloads tipado
export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

// } as const
export interface TranslateState {
  fromLanguage: FromLanguage
  toLanguage: Language
  fromText: string
  result: string
  loading: boolean
}

export type TranslateActions =
  { type: 'EXCHANGE_LANGUAGES' } |
  { type: 'SET_FROM_LANGUAGE', payload: FromLanguage } |
  { type: 'SET_TO_LANGUAGE', payload: Language } |
  { type: 'SET_FROM_TEXT', payload: string } |
  { type: 'SET_RESULT', payload: string }

export enum SectionType {
  From = 'from',
  To = 'to'
}
