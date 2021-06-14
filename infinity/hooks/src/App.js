import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'; 
import ExContents from './routes/ExContents'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={ExContents} />
    </BrowserRouter>
  )
}

export default App;