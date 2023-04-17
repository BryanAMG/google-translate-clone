import React from 'react'
import { Form } from 'react-bootstrap'

interface Props {
  type: string
  loading?: boolean
  onChange: (value: string) => void
  value: string
}

const commonStyles = { border : 0, height:'200px', resize:'none' }
const getPlaceHolder = ({ type, loading }: { type: string, loading?: boolean }) => {
  if (type === 'from') return 'Introducir Texto'
  if (loading === true) return 'Cargando...'
  return 'traducción'
}

export const TextArea = ({ type, loading, value, onChange }: Props) => {
  const styles = type === 'to'
    ? { ...commonStyles, backgroundColor: '#f5f5f5' }
    : commonStyles

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (type === 'from') {
      onChange(e.target.value)
    }
    if (loading === true) {
      onChange('cambiando pe')
    }
  }

  return (
    <Form.Control
      as="textarea"
      placeholder={getPlaceHolder({ type, loading })}
      autoFocus={type === 'from'}
      onChange = {handleChange}
      style={styles}
      value={value}
    />
  )
}
