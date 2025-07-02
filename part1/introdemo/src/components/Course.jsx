import Contents from './Contents'
import Header from './Header'
const Course = ({course}) => {
    return (
        <div>
            <Header text={course.name} />
            <Contents parts={course.parts} />
        </div>
    )
}

export default Course