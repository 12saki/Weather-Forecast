import { useState } from "react"
import Title from "./components/Title"
import Form from "./components/Form" 
import Results from "./components/Results" 
import Loading from "./components/Loading"

type ResultsState = {  
    country: string
    cityName: string
    temperature1: string
    temperature2: string
    temperature3: string
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
        temperature1: "", 
        temperature2: "", 
        temperature3: "", 
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
                    temperature1: data.forecast.forecastday[0].day.avgtemp_c,
                    temperature2: data.forecast.forecastday[1].day.avgtemp_c,
                    temperature3: data.forecast.forecastday[2].day.avgtemp_c,
                    conditionText1: data.forecast.forecastday[0].day.condition.text,
                    conditionText2: data.forecast.forecastday[1].day.condition.text,
                    conditionText3: data.forecast.forecastday[2].day.condition.text,
                    icon1: data.forecast.forecastday[0].day.condition.icon,
                    icon2: data.forecast.forecastday[1].day.condition.icon,
                    icon3: data.forecast.forecastday[2].day.condition.icon,
                    date1: data.forecast.forecastday[0].date,
                    date2: data.forecast.forecastday[1].date,
                    date3: data.forecast.forecastday[2].date,
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