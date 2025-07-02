import Part from "./Part"
const Contents = ({parts}) => {
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
    return (
        <div>
            {parts.map(part => (
                <Part key={part.id} part={part} />
            ))}
            <p>Total exercises: {totalExercises}</p>
        </div>
    )
}
export default Contents
