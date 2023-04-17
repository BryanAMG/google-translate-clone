import { useReducer } from 'react'
import { type Language, type FromLanguage, type TranslateActions, type TranslateState } from '../type'
import { AUTO_LANGUAGE } from '../constans'

const initialState: TranslateState = {
  fromLanguage : 'es',
  toLanguage : 'en',
  fromText : '',
  result : '',
  loading : false
}

// state : typeof initialState
const reducer = (state: TranslateState, action: TranslateActions) => {
  const { type } = action
  if (type === 'EXCHANGE_LANGUAGES') {
    const { fromLanguage, toLanguage, fromText, result } = state
    if (fromLanguage === AUTO_LANGUAGE) return state
    return {
      ...state,
      fromLanguage : toLanguage,
      toLanguage : fromLanguage,
      fromText : result,
      result : fromText
    }
  }
  if (type === 'SET_FROM_LANGUAGE') {
    if (state.toLanguage === action.payload) return state
    return {
      ...state,
      fromLanguage : action.payload
    }
  }
  if (type === 'SET_TO_LANGUAGE') {
    if (state.fromLanguage === action.payload) return state
    const loading = state.fromText !== ''
    return {
      ...state,
      toLanguage : action.payload,
      result : '',
      loading
    }
  }
  if (type === 'SET_FROM_TEXT') {
    const loading = action.payload !== ''
    return {
      ...state,
      loading,
      fromText : action.payload,
      result : ''
    }
  }
  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading : false,
      result : action.payload
    }
  }
  return state
}

// no devolver el dispatch - porque obligamos el contrato
export function useStore () {
  const [{
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading
  }, dispatch] = useReducer(reducer, initialState)

  const exchangeLanguages = () => {
    dispatch({ type:'EXCHANGE_LANGUAGES' })
  }

  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type:'SET_FROM_LANGUAGE', payload })
  }
  const setToLanguage = (payload: Language) => {
    dispatch({ type:'SET_TO_LANGUAGE', payload })
  }
  const setFromText = (payload: string) => {
    dispatch({ type:'SET_FROM_TEXT', payload })
  }
  const setResult = (payload: string) => {
    dispatch({ type:'SET_RESULT', payload })
  }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    exchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  }
}
