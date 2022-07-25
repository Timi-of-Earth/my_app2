import React from 'react'
import Card from './Card';

function StudentList(props) {
  return (
    <div className='card-container'>
        {
            props.studentData.map((student) => {
                return <Card key={student.id} name={student.name} state={student.state} stack={student.stack} description={student.description}/>;
            })
        }
    </div>
  )
}

export default StudentList