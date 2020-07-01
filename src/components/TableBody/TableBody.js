import React from "react";

function TableBody(props) {
  return (
    <tbody>
      <tr>
        <td>{props.name}</td>
        <td>{props.age}</td>
        <td>{props.address}</td>
        <td>{props.sex}</td>
      </tr>
    </tbody>
  );
}

export default TableBody;
