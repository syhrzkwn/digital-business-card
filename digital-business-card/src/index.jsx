import React from 'react'
import ReactDOM from 'react-dom'
// import ReactDOM from 'react-dom/client' REACT VERSION 18
import App from './App'
import './styles.css'

//REACT VERSION 18
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
