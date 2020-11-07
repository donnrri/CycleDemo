import React, {useState, useRef} from 'react'
import './App.css';
const charThreshold = 5
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
  return (
    <div className="app">
      <form>
        <label className="bloop-label" htmlFor="bloop-input">Join Us</label>
        <input type="text" name="bloop-input" className="user-input" onChange={handleOnChange}/>
      </form>
      {
        showSendMessage ?
        <div className="sub-label">Hit return</div>
        :
        <div className="sub-label">Enter your postcode above</div>
        
    
      }

    </div>
  );
}

export default App;
