import React from 'react'
import PBreadCumb from './PBreadCumb'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const PContainer = (props) => {
    console.log(props)
    return (
        <div>
            <div style={{display:'flex',alignItems:"center",justifyContent:'space-evenly'}}>
                <ArrowBackIosIcon onClick={()=>props.showTableFn()}/>
                <PBreadCumb {...props}/>
            </div>
            <div>
                {
                    props.children
                }
            </div>
        </div>
    )
}

export default PContainer
