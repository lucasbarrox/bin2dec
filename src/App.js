import React, {useState, useEffect } from 'react';
import Display from './components/Display'
import Input from './components/Input';

import './App.css';

function App() {
  const [inputBin, setInputBin] = useState({
    value: '',
    binary: false,
  })
  const[decNum, setDecNum] = useState()

  useEffect(() => {
    if(inputBin.value.length > 0 && inputBin.binary){
      setDecNum(convertToDec(inputBin.value))
    } else if(inputBin.value.length === 0){
      setDecNum('')
    }
  }, [inputBin])

  const regExpNotBin = /[^01]/

  const handleBinaryInput = (e) => {
    const {value} = e.target
    setInputBin({value, binary: !regExpNotBin.test(value)})
  }

  const convertToDec = (num) => {
    let convertedNum = 0
    num.split('').reverse().map((item, index) => {
      return item === '1' && (convertedNum += Math.pow(2, index))
    })
    return convertedNum
  }

  const Alert = () => {
    if (inputBin.value.length > 0) {
      if (!inputBin.binary) {
        return (
          <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>
            Você inseriu um digito não binário (Por favor insira apenas 0 ou 1).
          </span>
        )
      } else {
        return ' '
      }
    }
    return null
  }

  return (
    <div className="App">
      <div>
        <h1>Bin2Dec</h1>
      </div>
      <p>
        <Alert />
      </p>
      <Input inputBin={inputBin} handleBinaryInput={handleBinaryInput} />
      <br></br>
      <Display inputBin={inputBin} decNum={decNum} />
      <footer>
       Feito por{' '}
        <a
          href="https://www.linkedin.com/in/lucasoliveira3103"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lucas Barros
        </a>
        <br />
      </footer>
    </div>
  )


}

export default App;
