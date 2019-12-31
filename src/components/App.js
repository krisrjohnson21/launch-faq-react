import React from 'react';
import FAQContainer from './FAQContainer'

const App = (props) => {
  return(
    <div className="app">
      <h1 className="header">We're here to help</h1>
      <FAQContainer
        data={props.data}
      />
    </div>
  )
}

export default App;
