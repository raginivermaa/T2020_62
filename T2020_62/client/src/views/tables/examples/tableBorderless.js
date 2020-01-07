import React from 'react';
import { Table } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Table borderless>
        <thead>
          <tr>
            <th>#</th>
            <th>Activity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Soccer payment</td>
            <td>$15</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>PAYMENT SMRT</td>
            <td>$86.50</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>PAYMENT SMRT</td>
            <td>$20</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
