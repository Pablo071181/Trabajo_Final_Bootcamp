import React from 'react';
import Sidebar from '../components/sections/Sidebar';
import styled from 'styled-components';



const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 10px;
`;

const TableHeadCell = styled.th`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
`;
class Dashboard extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    // Cargar los datos desde una API o base de datos
    fetch('/api/data')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  handleModifyClick = (item) => {
    // Lógica para modificar el elemento "item"
  }

  handleDeleteClick = (item) => {
    // Lógica para eliminar el elemento "item"
  }
  

  render() {
    return (
      
      <div className="section">
        <div classname="elements">
        <Sidebar />
        </div>
      <div className="section">
        <div class="container">
        <div className="container elements">
        <Table>
        <thead>
          <tr>
            <TableHeadCell>ID Reserva</TableHeadCell>
            <TableHeadCell>Nombre de la Reserva</TableHeadCell>
            <TableHeadCell>Fecha de Reserva</TableHeadCell>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(item => (
            <tr key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <button onClick={() => this.handleModifyClick(item)}>Modificar</button>
                <button onClick={() => this.handleDeleteClick(item)}>Eliminar</button>
              </TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
