import { type FromLanguage, type Language } from '../type'

export async function translate({
  fromLanguage,
  toLanguage,
  text
}: {
  fromLanguage: FromLanguage
  toLanguage: Language
  text: string
}) {
  const from = fromLanguage === 'auto' ? 'es' : fromLanguage

  const encodedParams = new URLSearchParams()
  encodedParams.append('source_language', from)
  encodedParams.append('target_language', toLanguage)
  encodedParams.append('text', text)
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': 'f8679b8440msh1a5dbfbd5fe02b9p160aeejsnbcb3742a461f',
      'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    },
    body: encodedParams
  }

  try {
    const res = await fetch('https://text-translator2.p.rapidapi.com/translate', options)
    const { data } = await res.json()
    return data.translatedText
  } catch (error) {
    console.log('error ', error)
    return ''
  }
}
