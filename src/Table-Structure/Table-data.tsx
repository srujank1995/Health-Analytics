import Table from "react-bootstrap/Table";
const TableData = () => {

    return(
        <div>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>SR No.</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Blood Pressure</th>
          <th>Sugar Level</th>
          <th>Heart Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        
      </tbody>
    </Table>
        </div>
    )
}
export default TableData;