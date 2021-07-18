import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from './../components/CityList/CityList'


const cities = [
    {city:"Buenos Aires", country:"Argentina"},
    {city:"Bogota", country:"Colombia"},
    {city:"Caracas", country:"Venezuela"},
    {city:"Santiago", country:"Chile"},
]

const MainPage = () => {
    const history = useHistory()
    
    const onClickHandler = () => {
        history.push("/city")
    }

    return (
        <div>
            <h2>Lista de ciudades</h2>
            <CityList
                cities={cities} 
                onClickCity={onClickHandler}/>
        </div>
    )
}


export default MainPage
