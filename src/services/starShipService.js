
const BASE_URL = `https://swapi.dev/api/starships`;

const show = async(ship)=>{
    try {
        const queryString = `?search=${ship}`;
        const res = await fetch(BASE_URL +queryString)
        const data = await res.json();
        console.log('data: \n', data)
        return data
    } catch (error) {
        console.log(error)
    }

}

export {show};