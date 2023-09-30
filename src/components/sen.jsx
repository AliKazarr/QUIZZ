


import React, { useRef } from 'react';

export default function Sen({ setUserName }) {
  const inputRef = useRef();

  const handleClick = () => {
   
 inputRef.current.value && setUserName(inputRef.current.value)
    // Eğer inputValue boş değilse, setUserName işlevini kullanarak değeri ayarla
    
  }

  return (
    <div>
      <div className="start">
        <input
          type="text"
          className='startInput'
          ref={inputRef}
          placeholder='Input Your Name'
        />
        <button className='startButton' onClick={handleClick}>
          Start
        </button>
      </div>
    </div>
  )
}
