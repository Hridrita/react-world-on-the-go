import Countries from './components/countries'

import './App.css'
import { Suspense } from 'react'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())


function App() {
  

  return (
    <>
    <Suspense fallback={<p>Nadir Vai Loading...</p>}>
      <Countries countriesPromise = {countriesPromise}></Countries>
    </Suspense>
      
    </>
  )
}

export default App
