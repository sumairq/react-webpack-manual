import React from 'react'
// import './App.css';
 import { newFont } from '../styles/FontStyle.js'
 import { style, fontFace } from 'typestyle';

 console.log('font-face',fontFace({
    fontFamily: 'SF Pro',
    src: "url('/fonts/sf-pro-text-regular.woff') format('woff')",
  }))

   const App = () => {

    console.log(fontFace)
  return (
    <div className={newFont}>
      
        <h1 className= 'metro-font'>
            Sumair Qaisar
        </h1>

        
    </div>
  )
}

export default App;