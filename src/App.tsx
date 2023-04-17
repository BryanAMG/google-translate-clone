import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { useStore } from './hooks/useStore'
import { Container, Col, Row, Button, Stack } from 'react-bootstrap'
import { ClipBoardIcon, ExchangeIcon, SpeakerIcon } from './components/Icons'
import { AUTO_LANGUAGE } from './constans'
import { LanguageSelector } from './components/LanguageSelector'
import { TextArea } from './components/TextArea'
import { useEffect } from 'react'
import { translate } from './services/translate'
import { useDebounce } from './hooks/useDebounce'

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

  const debounceText = useDebounce(fromText)

  useEffect(() => {
    if (debounceText === '') return

    translate({ fromLanguage, toLanguage, text : debounceText }).then(result => {
      if (result === null || result === undefined) return
      setResult(result)
    }).catch(() => { setResult('error') })
  }, [debounceText, fromLanguage, toLanguage])

  const handleClipboard = () => {
    navigator.clipboard.writeText(result).catch(() => {})
  }

  const handleSpeaker = () => {
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = toLanguage
    speechSynthesis.speak(utterance)
  }

  return (<Container fluid>
    <h1 className='mb-4'>Google Translate Clone</h1>
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
          <div style={{ position :'relative' }}>
            <TextArea
              type='to'
              value={result}
              onChange={setResult}
              loading={loading}
            />
            <div style={{ position:'absolute', left : 0, bottom : 0 }}>
              <Button
                variant='link'
                onClick={handleClipboard}
              >
                <ClipBoardIcon />
              </Button>
              <Button
                variant='link'
                onClick={handleSpeaker}
              >
                <SpeakerIcon />
              </Button>
            </div>

          </div>
        </Stack>
      </Col>
    </Row>

  </Container>)
}

export default App
