import { useReducer } from 'react'
import { type Language, type FromLanguage, type TranslateActions, type TranslateState } from '../type'

const initialState: TranslateState = {
  fromLanguage : 'auto',
  toLanguage : 'en',
  fromText : '',
  result : '',
  loading : false
}

// state : typeof initialState
const reducer = (state: TranslateState, action: TranslateActions) => {
  const { type } = action
  if (type === 'EXCHANGE_LANGUAGES') {
    const { fromLanguage, toLanguage } = state
    if (fromLanguage === 'auto') return state
    return {
      ...state,
      fromLanguage : toLanguage,
      toLanguage : fromLanguage
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
    return {
      ...state,
      toLanguage : action.payload
    }
  }
  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading : true,
      fromText : action.payload
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
