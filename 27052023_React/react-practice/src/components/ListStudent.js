const ListStudent = (props) => {
  const students = props?.students || [];
  return (
    <>
      <ul>
        {students.map(student => {
          if (student.age >= 25) {
            return <li key={student.name}>{student.name} - {student.course} - {student.age}</li>;
          }
          return <></>;
        })}
      </ul>
    </>
  );
};
export default ListStudent;
