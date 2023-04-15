import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

interface TranslateState {
  fromLaguage : string,
  toLanguage : string,
  fromText? : string,
  result? : string ,
  loading : boolean
}

const initialState = {
  fromLaguage : "auto",
  toLanguage : "en",
  fromText : "",
  result : "",
  loading : false
}

const reducer = ( state : TranslateState  ) => {

}


function App () {
  return (<div>
    <Button variant='danger'>Intercambiar</Button>
    <h1>Google Translate</h1>
  </div>)
}

export default App
