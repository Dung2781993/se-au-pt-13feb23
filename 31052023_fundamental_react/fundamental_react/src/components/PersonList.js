export const Greeting = ({ name }) => {
  return (
    <h3>Hello {name}</h3>
  );
}

export const PersonList = ({ people }) => {
  return (
    <div>
      <ul>
        {people.map((person) => {
          return (
            <li key={person.id}>
              <p>Name: {person.name}</p>
              <p>Occupation: {person.profession}</p>
            </li>
          )
        })}
      </ul>
    </div>
  );
};
