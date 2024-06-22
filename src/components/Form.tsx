type FormProps = {
    city: string
    setCity: React.Dispatch<React.SetStateAction<string>>
    getWeather: (e: React.FormEvent<HTMLFormElement>) => void
}  

const Form = (props: FormProps) => {
    return (
        <form onSubmit={props.getWeather}>
            <input type="text" 
                   name="city" 
                   placeholder="city name" //グレーで表記
                   onChange={e => props.setCity(e.target.value)} 
                   value={props.city}
            />
            <button type="submit">
                Get Weather
            </button>
        </form>
    )
}

export default Form