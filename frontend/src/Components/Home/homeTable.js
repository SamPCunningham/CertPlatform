import React from 'react';
import { Table } from 'react-bootstrap';

const HomeTable = () => {
    return ( 
            <div className="hometable col-10">
               <Table striped bordered hover className="table" style={{marginTop: '80px'}}>
                   <thead>
                       <tr>
                           <th style={{borderRight: 'none'}}>Mainstream HVAC/R Certifications</th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr>
                            <th>Certification</th>
                            <th>Your Status</th>
                            <th>Options</th>
                            <th>References</th>
                       </tr>
                       <tr>
                           <td>Section 608 Type I</td>
                           <td>Not Certified</td>
                           <td>Purchase</td>
                           <td>Reference Manual</td>
                       </tr>
                       <tr>
                            <td>Section 609 MVAC</td>
                            <td>Not Certified</td>
                            <td>Purchase</td>
                            <td>Reference Manual</td>
                       </tr>
                       <tr>
                            <td>PM Tech</td>
                            <td>Not Certified</td>
                            <td>Purchase</td>
                            <td>Reference Manual</td>
                       </tr>
                       <tr>
                            <td>R-410A</td>
                            <td>Not Certified</td>
                            <td>Purchase</td>
                            <td>Reference Manual</td>
                       </tr>
                       <tr>
                            <td>Indoor Air Quality</td>
                            <td>Not Certified</td>
                            <td>Purchase</td>
                            <td>Reference Manual</td>
                       </tr>
                       <tr>
                            <td>Green Certification</td>
                            <td>Not Certified</td>
                            <td>Purchase</td>
                            <td>Reference Manual</td>
                       </tr>
                       <tr>
                            <td>HC/HFO Certification</td>
                            <td>Not Certified</td>
                            <td>Purchase</td>
                            <td>Reference Manual</td>
                       </tr>
                        
                   </tbody>                
            </Table> 
            </div>
            
     );
}
 
export default HomeTable;