const StarShipList = (props) => {

    return (
        <section>
            <h2>{props.starShip.name}</h2>
            <p>Class: {props.starShip.class}</p>
            <p>Manufacturer: {props.starShip.manufacturer}</p>
            <p>Model: {props.starShip.model}</p>
        </section>
    )
}

export default StarShipList