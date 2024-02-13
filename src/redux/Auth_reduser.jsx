const initilaState={user_Info:''};
 export const Auth=(state=initilaState,action)=>{
    switch (action.type){
        case 'isauth':return {...state,user_Info:action.payload};
        break;
        case 'logout':return {...state,user_Info:''};
        break;
        default:return state;
            }
    

}