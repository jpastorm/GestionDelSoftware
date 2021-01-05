import React from 'react'
const UEditar = () => {
    return (
        <form>
  <div className="form-group">
    <label for="formGroupExampleInput">Example label</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
  </div>
  <div className="form-group">
    <label for="formGroupExampleInput2">Another label</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
  <button type="submit" className="btn btn-info">Editar</button>
</form>
    )
}

export default UEditar
