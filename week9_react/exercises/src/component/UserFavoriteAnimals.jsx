export default function UserFavoriteAnimals(props){
    const { favAnimals } = props
    return(
        <ul>
            {
                favAnimals.map(
                    (animal,idx) => 
                        <li key={idx}>{animal}</li>
                )
            }
        </ul>
    )
}