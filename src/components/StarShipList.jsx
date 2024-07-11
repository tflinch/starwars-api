import StarshipCard from "./StarshipCard"


const StarShipList = (props) => {
    console.log(props)
    const ship = props.starShip.map(starShip => {
        return (
            <StarshipCard key={starShip._id} starShip={starShip} />
        )
    }
    )

    return (
        <section>
            <h2>Starships</h2>
            <p>Number of results: {props.starShip.length}</p>
            {ship}
        </section>
    )
}

export default StarShipList