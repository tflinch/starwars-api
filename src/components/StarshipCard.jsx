const StarshipCard = (props) => {

    return (
        <>
            <h2>{props.starShip.name}</h2>
            <p>Class: {props.starShip.class}</p>
            <p>Manufacturer: {props.starShip.manufacturer}</p>
            <p>Model: {props.starShip.model}</p>
        </>
    )
}

export default StarshipCard;