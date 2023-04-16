import { useReducer } from 'react'
import { type TranslateActions, type TranslateState } from '../type'

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
    const { fromLanguage, fromText } = state
    return {
      ...state,
      fromLanguage : fromText,
      fromText : fromLanguage
    }
  }
  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage : action.payload
    }
  }
  if (type === 'SET_TO_LANGUAGE') {
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

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    exchangeLanguages
  }
}
