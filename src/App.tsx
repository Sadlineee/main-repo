import React, { useState, useEffect, CSSProperties } from "react"

const App: React.FC = () => {
  const [cityName, setCityName] = useState<string>()
  const [degreeValue, setDegreeValue ] = useState<number>(0)
  const [themeStyle, setThemeStyle] = useState<boolean>(true)

  const themeChange = () => {
    setThemeStyle(false)
    if(themeStyle === false) {
      setThemeStyle(true)
    }
  }

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCityName(value)
  }

  const url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=YOUR_API_KEY&units=metric'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await fetch(url)
        const data = await responce.json()
        setDegreeValue(Math.round(data.main.temp))
      } catch(error) {
        console.log('Error fetching data: ', error)
      }
    }

    if(cityName === '') {
      setDegreeValue(0)
    }

    fetchData();
  })   

  return (
    <main style={{background: themeStyle ? 'linear-gradient(#6889ff, #c668ff)' : 'linear-gradient(rgb(103, 232, 255), rgb(53, 115, 185))'}}>
      <div className="main_name" onClick={ themeChange }>WeatherApp</div>
      <input className="main_search" type="text" placeholder="Enter City" onChange={ changeValue } />
      <div className="main_degree">{ degreeValue }°C</div>
    </main>
  )
}

export default App
