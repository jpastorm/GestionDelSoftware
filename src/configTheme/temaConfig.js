import { createMuiTheme } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import purble from '@material-ui/core/colors/purple'
const theme = createMuiTheme({
    palette:{
        primary:{
            main:blue[500]
        },
        secondary:{
            main:"#fffff"
        }
    }
})
export default theme
