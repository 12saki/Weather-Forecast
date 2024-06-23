import { useState } from "react"
import Title from "./components/Title"
import Form from "./components/Form" 
import Results from "./components/Results" 
import Loading from "./components/Loading"

type ResultsState = {  
    country: string
    cityName: string
    max_temperature1: string
    max_temperature2: string
    max_temperature3: string
    min_temperature1: string
    min_temperature2: string
    min_temperature3: string
    conditionText1: string 
    conditionText2: string 
    conditionText3: string 
    icon1: string
    icon2: string
    icon3: string
    date1: string
    date2: string
    date3: string
}  

const App = () => {
    const[loading, setLoading] = useState<boolean>(false)
    const [city, setCity] = useState<string>("")
    const [results, setResults] = useState<ResultsState>({
        country: "",
        cityName: "",
        max_temperature1: "", 
        max_temperature2: "", 
        max_temperature3: "", 
        min_temperature1: "", 
        min_temperature2: "", 
        min_temperature3: "", 
        conditionText1: "",
        conditionText2: "",
        conditionText3: "",
        icon1: "",
        icon2: "",
        icon3: "",
        date1: "",
        date2: "",
        date3: "",
    })

    const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() 
        setLoading(true)
        fetch(`https://proxy-server-eta-azure.vercel.app/weather-data?${city}`)
            .then(res=>res.json())
            .then(data => {
                console.log(data); 
                setResults({
                    country: data.location.country,
                    cityName: data.location.name,
                    max_temperature1: data.forecast.forecastday[0].day.maxtemp_c,
                    max_temperature2: data.forecast.forecastday[1].day.maxtemp_c,
                    max_temperature3: data.forecast.forecastday[2].day.maxtemp_c,
                    min_temperature1: data.forecast.forecastday[0].day.mintemp_c,
                    min_temperature2: data.forecast.forecastday[1].day.mintemp_c,
                    min_temperature3: data.forecast.forecastday[2].day.mintemp_c,
                    conditionText1: data.forecast.forecastday[0].day.condition.text,
                    conditionText2: data.forecast.forecastday[1].day.condition.text,
                    conditionText3: data.forecast.forecastday[2].day.condition.text,
                    icon1: data.forecast.forecastday[0].day.condition.icon,
                    icon2: data.forecast.forecastday[1].day.condition.icon,
                    icon3: data.forecast.forecastday[2].day.condition.icon,
                    date1: data.forecast.forecastday[0].date.substring(5),
                    date2: data.forecast.forecastday[1].date.substring(5),
                    date3: data.forecast.forecastday[2].date.substring(5),
                })
                setLoading(false)
                setCity("")
            })
            .catch(() => alert("エラーが発生しました。"))
    } 

    return (
        <div className="wrapper">  
            <div className="container">
                <Title/>
                <Form setCity={setCity} getWeather={getWeather} city={city}/>
                {loading ? <Loading/> : <Results results={results}/>}
            </div>
        </div>
    )
}

export default App