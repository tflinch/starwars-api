const StarshipCard = (props) => {

    return (

        <li>
            <h2>{props.starShip.name}</h2>
            <p>Class: {props.starShip.class}</p>
            <p>Manufacturer: {props.starShip.manufacturer}</p>
            <p>Model: {props.starShip.model}</p>
        </li>

    )
}

export default StarshipCard;