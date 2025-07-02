const Part = ({part}) => {
    return (
        <div>
            <h2>{part.name}</h2>
            <p>Exercises: {part.exercises}</p>
        </div>
    )
}

export default Part