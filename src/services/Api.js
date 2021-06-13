export function getAllCars() {
    return fetch("https://car-configurator-6b257-default-rtdb.europe-west1.firebasedatabase.app/cars.json")
}

export function getConfig() {
    return fetch("https://car-configurator-6b257-default-rtdb.europe-west1.firebasedatabase.app/config.json")
}

export function updateConfigWithSameValues() {
    fetch("https://car-configurator-6b257-default-rtdb.europe-west1.firebasedatabase.app/config/corolla.json")
        .then(res => res.json())
        .then(res => {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({...res})
            };
            fetch('https://car-configurator-6b257-default-rtdb.europe-west1.firebasedatabase.app/config/gt86.json', requestOptions)
            fetch('https://car-configurator-6b257-default-rtdb.europe-west1.firebasedatabase.app/config/sienna.json', requestOptions)
            fetch('https://car-configurator-6b257-default-rtdb.europe-west1.firebasedatabase.app/config/yaris.json', requestOptions)
        })
}

export function loadCar(id) {
    return fetch(`https://car-configurator-6b257-default-rtdb.europe-west1.firebasedatabase.app/cars/${id}.json`)
        .then(response => response.json())
}

export function postCar(car){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...car })
    };
    return fetch('https://car-configurator-6b257-default-rtdb.europe-west1.firebasedatabase.app/cars.json', requestOptions)
        .then(response => response.json())
}
