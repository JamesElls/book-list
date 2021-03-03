//I am still trying to understand everything haha

import { useState, useEffect } from 'react'

import Header from './components/Header'
import Books from './components/Books'
import axios from 'axios'


function App() {
  const [books, setBooks] = useState([])
  const [loading, setLoading]= useState(true)

    useEffect(() => {
      loadData()
    }, [])
    
    const loadData = async () => {
      try{
        console.log('getting data')
        let res = await axios.get('https://fakerapi.it/api/v1/books?_quantity=5')
        setBooks(res.data.data)
        console.log('data loaded')
        setLoading(false)
      }catch(err){
        console.log(err)
        alert('error')
        setLoading(false)
      }
      }
  


  return (
    <div className="App">
      <Header />
      <Books books = {books}/>
    </div>
  );
}

export default App;
