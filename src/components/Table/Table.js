import React, { Component } from "react";

import TableHead from "../TableHead/TableHead";
import TableBody from "../TableBody/TableBody";

class Table extends Component {
  render() {
    let valueData = this.props.student.map((data, index) => {
      return (
        <TableBody
          key={index}
          name={data.name}
          age={data.age}
          address={data.address}
          sex={data.sex}
        />
      );
    });
    return (
      <div>
        <table>
          <TableHead />
          {valueData}
        </table>
      </div>
    );
  }
}

export default Table;
