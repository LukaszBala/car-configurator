export function getAllCars() {
    return fetch("https://car-configurator-6b257-default-rtdb.europe-west1.firebasedatabase.app/cars.json")
}

export function getConfig() {
    return fetch("https://car-configurator-6b257-default-rtdb.europe-west1.firebasedatabase.app/config.json")
}
