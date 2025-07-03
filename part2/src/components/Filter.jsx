import Persons from './Persons'
const Filter = ({persons, newFilter, setFilter}) => {

    const filterPersons = () => {
    //event.preventDefault()
    if(newFilter === '') {
        return persons
    } else {
    const newPersonList = persons.filter((person) => person.name.includes(newFilter));
    return newPersonList
  }
  }

  return (
    <div>
      <ul>
        <Persons persons={filterPersons()} />
      </ul>
    </div>
  )

}

export default Filter