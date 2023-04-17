import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { useStore } from './hooks/useStore'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { ExchangeIcon } from './components/Icons'
import { AUTO_LANGUAGE } from './constans'
import { LanguageSelector } from './components/LanguageSelector'

function App () {
  const {
    fromLanguage,
    toLanguage,
    exchangeLanguages,
    setFromLanguage,
    setToLanguage
  } = useStore()

  return (<Container fluid>
    <h1>Google Translate Clone</h1>
    <Row className='align-items-center'>
      <Col>
        <LanguageSelector type ='from' value={fromLanguage} onChange={setFromLanguage}/>
      </Col>
      <Col >
      <Button variant="link" disabled={fromLanguage === AUTO_LANGUAGE } onClick={exchangeLanguages} className='px-2 py-0' >
        <ExchangeIcon />
      </Button>
      </Col>
      <Col>
        <LanguageSelector type ='to' value={toLanguage} onChange={setToLanguage}/>
      </Col>
    </Row>

  </Container>)
}

export default App
