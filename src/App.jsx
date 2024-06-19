import React, { useState } from 'react'
import Navbar from './components/Navbar'
import NewsContainer from './components/NewsContainer'
import { MDBFooter } from 'mdb-react-ui-kit';
import "./App.css"
const App = () => {
  const [category,setCategory] = useState('general')
  return (
    <>
    <Navbar setCategory={setCategory}/>
    <NewsContainer category={category}/>
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://github.com/VAlBHAV'>
          Vaibhav Verma
        </a>
      </div>
    </MDBFooter>
    </>
  )
}

export default App