const API_KEY = 'f47a8088859d485f918195656240107';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async(city)=>{
    try {
        const queryString = `&q=${city}`;
        const res = await fetch(BASE_URL +queryString)
        const data = await res.json();
        console.log('data: \n', data)
        return data
    } catch (error) {
        console.log(error)
    }

}

export {show};