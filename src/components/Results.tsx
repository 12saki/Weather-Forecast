type ResultsProps = {
    results: { 
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
}    

const Results = (props: ResultsProps) => {
    return (
        <div>          
            {props.results.country && 
                <div>
                    
                    <div className="results-country">{props.results.country}</div>
                    <div className="results-city">{props.results.cityName}</div>
                    <div className="results-dates-container">
                        <div className="results-date-group">
                            <div className="results-date">{props.results.date1}</div>
                            <div className="results-maxtemp">{props.results.max_temperature1}<span>/</span></div>
                            <div className="results-mintemp">{props.results.min_temperature1}<span>°C</span></div>
                            <img src={props.results.icon1} alt="icon"/>
                            <span>{props.results.conditionText1}</span>
                        </div>
                        <div className="results-date-group">
                            <div className="results-date">{props.results.date2}</div>
                            <div className="results-maxtemp">{props.results.max_temperature1}<span>/</span></div>
                            <div className="results-mintemp">{props.results.min_temperature1} <span>°C</span></div>
                            <img src={props.results.icon2} alt="icon"/>
                            <span>{props.results.conditionText2}</span>
                        </div>
                        <div className="results-date-group">
                            <div className="results-date">{props.results.date3}</div>
                            <div className="results-maxtemp">{props.results.max_temperature1}<span>/</span></div>
                            <div className="results-mintemp">{props.results.min_temperature1} <span>°C</span></div>
                            <img src={props.results.icon3} alt="icon"/>
                            <span>{props.results.conditionText3}</span>
                        </div>
                    </div>
                    
                </div>
            }
        </div>
    )
}

export default Results