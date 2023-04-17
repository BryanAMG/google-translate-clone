import { Form } from 'react-bootstrap'
import { SUPPORTED_LANGUAGES } from '../constans'
import { type FromLanguage, type Language } from '../type'

type Props =
  { type: 'from', value: FromLanguage, onChange: (language: FromLanguage) => void } |
  { type: 'to', value: Language, onChange: (language: Language) => void }

export const LanguageSelector = ({ type, value, onChange }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as Language)
  }

  return <Form.Select onChange={handleChange} value={value}>
    {
      Object.entries(SUPPORTED_LANGUAGES).map((language) => {
        const [key, textValue] = language
        return <option key={key} value={key}>{textValue}</option>
      })
    }
  </Form.Select>
}
