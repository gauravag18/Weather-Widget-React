import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){

    let [city,setCity]=useState("");
    let [error,setError]=useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="190fd09626f38892542a2bf8a09815bb";

        let getWeatherInfo = async ()=>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result ={
            city:city,
            temp : jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelslike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        };
        return result;
    }


    let handleChange = (event)=>{
        setCity(event.target.value);
    };

    let handleSubmit = async (event)=>{
        try{
            event.preventDefault();
            setCity("");
            let newinfo = await getWeatherInfo();
            updateInfo(newinfo);
        }catch(e){
            setError(true);
        }
    };

    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="city name" variant="outlined" required value={city} onChange={handleChange}/>
                <br/><br/>
                <Button variant="contained" type="submit">Search</Button>
                {error && <p style={{color:"red"}}>No such place exists</p>}
            </form>
        </div>
    );
}