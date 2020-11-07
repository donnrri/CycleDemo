import React, {useState, useRef} from 'react'
import {calculateDistanceBetween} from './app-utils'
import './App.css';
const charThreshold = 5
const testlatlang = {lat:52.495953,	lang:-1.894214}

const users = [

  {
  firstname: 'Maxine',
  lat: 52.47893,
  lang: -1.902936,
  pc: "B1 1BD"
  },
  {
    firstname: 'Mohammed',
    lat: 52.474823,
    lang: -1.899623,
    pc: "B1 1EG"
    },
    {
      firstname: 'Etzy',
      lat: 52.48553,
      lang: -1.91163,
      pc: "B1 38D"
      },
      {
        firstname: 'Jooma',
        lat: 52.45917,
        lang: -1.841305,
        pc: "B10 0HD"
        },
        {
          firstname: 'Coleen',
          lat: 52.46552,
          lang: -1.846149,
          pc: "B10 2AD"
          },
          {
            firstname: 'Raffa',
            lat: 52.497278,
            lang: -1.898291,
            pc: "B19 2AD"
            },
            {
              firstname: 'Petre',
              lat: 52.502903,
              lang: -1.904936,
              pc: "B19 2TS"
              },
              {
                firstname: 'Susan',
                lat: 52.532873,
                lang: -1.786201,
                pc: "B76 BAD"
                },
                {
                  firstname: 'Henning',
                  lat: 52.648155,
                  lang: -1.690763,
                  pc: "B79 8SL"
                  }
    
]
function App() {

  const [showSendMessage, setShowSendMessage] = useState(false)
  const [buddies , setBuddies] = useState([])
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
    let result = users.map(({firstname, lat, lang}) =>{
        let n = calcDist(lat, lang)
        let km = Math.round(n * 10) / 10
        return {firstname, dist:km}
    } )

    result.sort((a, b) => {
      return a.dist - b.dist;
  });


    setBuddies( result.slice(0, 6))
  }


  return (
    <div className="app" >

      { 
        buddies.length === 0 &&
        <div>

        <form>
        <label className="bloop-label" htmlFor="bloop-input">Join Us</label>
        <input type="text" name="bloop-input" className="user-input" onChange={handleOnChange}/>
       </form>

   
        {
          showSendMessage ?
          <input type="submit" value='Find Buddies' onClick={onSubmit}  className="sub-label submit"/>
          :
          <div className="sub-label">Enter your postcode above</div>
          
      
        }
  
        </div>

      }

      {
        buddies.length > 0 &&
        <div className="microsoft container">
        <ul>
        {
          buddies.map(({firstname, dist}, index) => {
            return(
              <li className='sub-label buddy-item' key={index} >{`${firstname} is just ${dist}km from you`}</li>
            )
          })
        }

        </ul>
          <button className='sub-label signup-btn'> Sign Up Today</button>
       </div>
      }

    </div>
  );
}

export default App;
