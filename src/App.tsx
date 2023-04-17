import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { useStore } from './hooks/useStore'
import { Container, Col, Row, Button, Stack } from 'react-bootstrap'
import { ExchangeIcon } from './components/Icons'
import { AUTO_LANGUAGE } from './constans'
import { LanguageSelector } from './components/LanguageSelector'
import { TextArea } from './components/TextArea'

function App () {
  const {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    setResult,
    setFromText,
    exchangeLanguages,
    setFromLanguage,
    setToLanguage
  } = useStore()

  return (<Container fluid>
    <h1>Google Translate Clone</h1>
    <Row >
      <Col >
        <Stack gap={3}>
          <LanguageSelector
            type ='from'
            value={fromLanguage}
            onChange={setFromLanguage}
          />
          <TextArea
            type='from'
            value={fromText}
            onChange={setFromText}
          />
        </Stack>
      </Col>
      <Col xs='auto'>
        <Button
          variant="link"
          disabled={fromLanguage === AUTO_LANGUAGE }
          onClick={exchangeLanguages}
          className='px-2 py-0' >
            <ExchangeIcon />
        </Button>
      </Col>
      <Col>
        <Stack gap={3}>
          <LanguageSelector
            type ='to'
            value={toLanguage}
            onChange={setToLanguage}
          />
          <TextArea
            type='to'
            value={result}
            onChange={setResult}
            loading={loading}
          />
        </Stack>
      </Col>
    </Row>

  </Container>)
}

export default App
