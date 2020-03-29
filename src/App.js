import React from 'react';
import './App.css';
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "87ecf7e957a20eabf7db0d714b7eaa99";

class App extends React.Component {

    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_url = await
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();
        console.log(data)
    }

    render() {
        return (
            <div className="App">
                <Info/>
                <Form weatherMethod = {this.gettingWeather}/>
                <Weather/>
            </div>
        );
    }
}

export default App;
