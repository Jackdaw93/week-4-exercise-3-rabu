import React from "react";

// function TableBody(props) {
//   return (
//     <tbody>
//       <tr>
//         <td>{props.name}</td>
//         <td>{props.age}</td>
//         <td>{props.address}</td>
//         <td>{props.sex}</td>
//       </tr>
//     </tbody>
//   );
// }

// export default TableBody;

function TableBody(props) {
  // Menerima data students Array of Object dari Table.js
  const rows = props.students.map((student, index) => (
    <tr key={index}>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.sex}</td>
      <td>{student.address}</td>
    </tr>
  ));
  return <tbody>{rows}</tbody>;
}

export default TableBody;
