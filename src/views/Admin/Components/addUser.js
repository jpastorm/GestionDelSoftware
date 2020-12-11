import React from 'react'

const AddUser = () => {
    return (
        <div>
            <form style={{textAlign:"left"}}>
                <div class="form-group">
                    <label htmlFor="Codigo">Codigo</label>
                    <input type="text" class="form-control" id="Codigo" placeholder="Example input placeholder"/>
                </div>
                <div class="form-group">
                    <label htmlFor="Nombres">Nombres</label>
                    <input type="text" class="form-control" id="Nombres" placeholder="Another input placeholder"/>
                </div>
                <div class="form-group">
                    <label htmlFor="Apellidos">Apellidos</label>
                    <input type="text" class="form-control" id="Apellidos" placeholder="Another input placeholder"/>
                </div>
                <div class="form-group">
                    <label htmlFor="usuario">Nombre de usuario</label>
                    <input type="text" class="form-control" id="usuario" placeholder="Another input placeholder"/>
                </div>
                {/* <div class="form-group">
                    <label for="usuario">Estado</label>
                    <input type="text" class="form-control" id="usuario" placeholder="Another input placeholder"/>
                </div> */}
            </form>
        </div>
        )
    }
    
    export default AddUser
    