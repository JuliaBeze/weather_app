import React from 'react';
import './App.css';
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "87ecf7e957a20eabf7db0d714b7eaa99";

class App extends React.Component {
    state = {
        tepm:undefined,
        city:undefined,
        country:undefined,
        pressure:undefined,
        sunset:undefined,
        error:undefined
    };


    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_url = await
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();

        if (city){
            let sunset = data.sys.sunset;
            let date = new Date();
            date.setTime(sunset); // какая дата будет отслеживаться(передаем текущую)
            let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" +date.getSeconds();

            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                pressure:data.main.pressure,
                sunset:sunset_date,
                error: ""
            })
        }


    };

    render() {
        return (
            <div className="App">
                <Info/>
                <Form weatherMethod = {this.gettingWeather}/>
                <Weather
                temp = {this.state.temp}
                city = {this.state.city}
                country = {this.state.country}
                pressure = {this.state.pressure}
                sunset = {this.state.sunset}
                error = {this.state.error}
                />
            </div>
        );
    }
}

export default App;
