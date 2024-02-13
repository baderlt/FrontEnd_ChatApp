import { Drawer } from "@mui/material"
import Profile from "./Profile/Profile"
import { useState } from "react"
import { useDispatch } from "react-redux"

const Drawer_Info=(props)=>{
    const dispatch=useDispatch()
    const [isDrawerOpen,setIsDrawerOpen]=useState(props.isDrawerOpen);
    const Close_Drawer=()=>{
        dispatch({type:"CloseDrawer"})
    }
    return (
        <>
    <Drawer anchor="right" transitionDuration={600} open={props.isDrawerOpen} onClose={Close_Drawer}><Profile User={props.User}/>
    
    </Drawer>

        </>
    )
}
export default Drawer_Info;