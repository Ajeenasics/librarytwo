import React from 'react';
import Table from 'react-bootstrap/Table';
import './Studentfine.css'
import Studentnav from '../Nav/Studentnav';
import Footer from '../Footer/Footer';

function Studentfine() {
  return (
    <div>

<Studentnav/>
<div class="Sbord">
    <h2 class=" Shead">STUDENT FINE AND HISTORY</h2>
    <div class="Sside">
<p>Name: <input class="box" type="text"/></p>
<p>ID: <input class="boxs" type="text"/></p>
<p>Due amount: <input class="boxes" type="text"/></p>
</div>
<hr/>
<h4>HISTORY</h4><br/>


<Table striped bordered hover variant="white">
      <thead>
        <tr>
          <th>Sl.No</th>
          <th>TITLE</th>
          <th>AUTHOR</th>
          <th>ISSUED DATE</th>
          <th>DUE DATE</th>
          <th>RETURNED DATE</th>
          <th>FINE AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
   
    </div>
<Footer/>
    </div>
  )
}

export default Studentfine