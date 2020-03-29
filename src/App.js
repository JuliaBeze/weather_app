import React from 'react';
import './App.css';
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";


const API_KEY = "87ecf7e957a20eabf7db0d714b7eaa99";

class App extends React.Component {

    gettingWeather = async () => {
        const api_url = await fetch(`https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`)
        const data = await api_url.json();
        console.log(data)
    };

    render() {
        return (
            <div className="App">
                <Info/>
                <Form/>
                <Weather/>
            </div>
        );
    }
}

export default App;
