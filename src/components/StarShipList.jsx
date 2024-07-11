import StarshipCard from "./StarshipCard"


const StarShipList = (props) => {
    const ship = props.starShips.map(starShip => {
        return (
            <StarshipCard key={starShip._id} starShip={starShip} />
        )
    }
    )

    return (
        <section>
            <h2>Starships</h2>
            <p>Number of results: {props.starShips.length}</p>
            <ul>
                {ship}
            </ul>

        </section>
    )
}

export default StarShipList