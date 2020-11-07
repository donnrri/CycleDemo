import React, {useState, useRef} from 'react'
import {calculateDistanceBetween} from './app-utils'
import './App.css';
const charThreshold = 5
const testlatlang = {lat:52.495953,	lang:-1.894214}

const users = [

  {
  firstName: 'Maxine',
  lat: 52.47893,
  lang: -1.902936,
  pc: "B1 1BD"
  },
  {
    firstName: 'Mohammed',
    lat: 52.474823,
    lang: -1.899623,
    pc: "B1 1EG"
    },
    {
      firstName: 'Etzy',
      lat: 52.48553,
      lang: -1.91163,
      pc: "B1 38D"
      },
      {
        firstName: 'Jooma',
        lat: 52.45917,
        lang: -1.841305,
        pc: "B10 0HD"
        },
        {
          firstName: 'Coleen',
          lat: 52.46552,
          lang: -1.846149,
          pc: "B10 2AD"
          },
          {
            firstName: 'Raffa',
            lat: 52.497278,
            lang: -1.898291,
            pc: "B19 2AD"
            },
            {
              firstName: 'Petre',
              lat: 52.502903,
              lang: -1.904936,
              pc: "B19 2TS"
              },
              {
                firstName: 'Susan',
                lat: 52.532873,
                lang: -1.786201,
                pc: "B76 BAD"
                },
                {
                  firstName: 'Henning',
                  lat: 52.648155,
                  lang: -1.690763,
                  pc: "B79 8SL"
                  }
    
]
function App() {

  const [showSendMessage, setShowSendMessage] = useState(false)
  const charCountRef = useRef(0)
  function handleOnChange({target:{value}}){
    charCountRef.current = value.length
    if(charCountRef.current >= charThreshold){
      setShowSendMessage(true)
    }else{
      if(showSendMessage) setShowSendMessage(false)
    }
  }

  function onSubmit(e){
    e.preventDefault()
    //get lat lang
    let {lat, lang} = testlatlang
    let calcDist = calculateDistanceBetween(lat, lang)
    let results = users.map(({lat, lang}) =>{
        let n = calcDist(lat, lang)
        return Math.round(n * 10) / 10
    } )
    console.log(results)
  }
  return (
    <div className="app" >
      <form>
        <label className="bloop-label" htmlFor="bloop-input">Join Us</label>
        <input type="text" name="bloop-input" className="user-input" onChange={handleOnChange}/>
        
      </form>
      {
        showSendMessage ?
        <input type="submit" value="Click me" onClick={onSubmit}  className="sub-label submit"/>
        :
        <div className="sub-label">Enter your postcode above</div>
        
    
      }

    </div>
  );
}

export default App;
