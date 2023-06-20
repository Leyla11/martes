import {useState, useEffect } from 'react'
import Card from '../components/Card'
import axios from 'axios'

const Home = () => {
    const [personaje, setPersonaje]= useState()
    const traerPersonaje = async()=>{
        try {
            console.log(personaje)
            let response = await axios.get("https://rickandmortyapi.com/api/character/1")
            let data = response.data
            console.log(data)
            setPersonaje(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
            traerPersonaje()
    }, [])
  return (
    <div className='container'>
        {personaje && <Card key={personaje.name} personaje={personaje}/>}
    </div>
  )
}

export default Home