const initilaState={User:'',Open:false};
 export const Drawer_Profile=(state=initilaState,action)=>{
    switch (action.type){
        case 'OpenDrawer':return {...state,User:action.payload,Open:true};
        break;
        case 'CloseDrawer':return {...state,Open:false};
        break;
        default:return state;
            }
    

}