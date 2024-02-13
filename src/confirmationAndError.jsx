import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function ConfirmationAndError(props){
    const dispatch=useDispatch();
    const [message,setMessage]=useState( props.data.message)
    const [openSuccess, setOpenSuccess] = useState(props.data.openSuccess );
    const [openError,setOpenError]=useState(props.data.openError)
    const [openWar,setopenWar]=useState(props.data.openWar)
    // const close=()=>{
    //     const timeoutId = setTimeout(() => {
    // console.log('closedd');
    //        openSuccess(false);
    //       }, 3000);
    //     }
    const handleClose = (event, reason) => {
        // if (reason === 'clickaway') {
        //   return;
        // }
        setOpenSuccess(false);
        setOpenError(false);
       setopenWar(false) 
        dispatch({type:"refreche",payload:true})
      }
    //   close();
    const vertical="top";
    const horizontal="right"
    return(
        <>
            <Snackbar anchorOrigin={{vertical,horizontal}} open={openSuccess} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '120%' }}
                variant="filled">
                    {message}
                </Alert>
            </Snackbar>

            <Snackbar anchorOrigin={{vertical,horizontal}} open={openError} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '120%' }}
                variant="filled">
                    {message}
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{vertical,horizontal}} open={openWar} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning" sx={{ width: '120%' }}
                variant="filled">
                    {message}
                </Alert>
            </Snackbar>
        </>
    )
}