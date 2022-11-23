import React,{useState, useEffect} from "react";


function WeatherFetch() {
    const key = '82d1145df0808ad39d8ef9ec304fa794';
    const [feels_like,setFeelsLike] = useState('');
    const [mainTemp,setMainTemp] = useState('');
    const [description,setDescription] = useState('');
    const [main,setMain] = useState('');
    const [iconID,setIconID] = useState('');
    const [name,setName] = useState('');

    useEffect(()=> {
fetch('https://api.openweathermap.org/data/2.5/weather?q=jaffna&appid=' +key+ '&units=metric')
.then(res=>res.json())
.then(data=>{
    console.log(data);
    setFeelsLike(data.main.feels_like);
    setMainTemp(data.main.temp);
    setDescription(data.weather[0].description);
    setMain(data.weather[0].main);
    setIconID(data.weather[0].icon);
    setName(data.name);
})
},[])
return (
    <>
    <h1>City : {name} </h1>
    <h1>Main Temperature : {mainTemp} Degrees Celsius</h1>
    <h1>Feels like: {feels_like} Degrees Celsius</h1>
    <h1>Weather Parameter: {main}</h1>
    <h1>Description : {description}</h1>
    <img src={"http://openweathermap.org/img/wn/" + iconID + "@2x.png"}/>
    </>
)
}
export default WeatherFetch;