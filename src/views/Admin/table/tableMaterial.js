import React from 'react'

const TableMaterial = () => {
  return (
    <div>
       <table className="table table-responsive">
      <thead> 
        <tr> 
          <th>Titulo 1</th> 
          <th>Titulo 2</th>
          <th>Titulo 3</th>
          <th>Titulo 4</th>
          <th>Titulo 5</th>                    
        </tr> 
      </thead>
      <tbody>
        <tr> 
          <td>Elemento 1,1asddddddddddddddd</td>
          <td>Elemento 1,2</td> 
          <td>Elemento 1,3</td> 
          <td>Elemento 1,4</td> 
          <td>Elemento 1,5</td>                     
        </tr>
        <tr> 
          <td>Elemento 2,1</td>
          <td>Elemento 2,2</td> 
          <td>Elemento 2,3</td> 
          <td>Elemento 2,4</td> 
          <td>Elemento 2,5</td>                     
        </tr>
        <tr> 
          <td>Elemento 3,1</td>
          <td>Elemento 3,2</td> 
          <td>Elemento 3,3</td> 
          <td>Elemento 3,4</td>           
          <td>Elemento 3,5</td>           
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default TableMaterial
