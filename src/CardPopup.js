import React from 'react'
import ReactDOM from 'react-dom'

export default function CardPopup( { open, close }) {

  if (!open) return null;
  
  return ReactDOM.createPortal(
      <>
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/[0.6]"/>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 h-[800px] w-[600px] rounded-md p-2 bg-green-500">
          <button onClick={(e) => {e.stopPropagation(); close()}}>close</button>
          <h1>I'm a pokemon c:</h1>  
        </div>
      </>,
      document.getElementById('portal')
  )
}
