import { combineReducers, createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk";
import ConfirmationAndError from "../confirmationAndError";
import { Auth } from "./Auth_reduser";
import { Drawer_Profile } from "./Drawer_Reduser";


const initstate={composant:'',refreche:false,openEdChat:'',Users:""};
export const reduseralert=(state=initstate,action)=>{
   switch (action.type){
    case 'succes':        return {...state,composant:<ConfirmationAndError data={action.payload}/>};
    break;
    case 'error':        return{...state,composant:<ConfirmationAndError data={action.payload}/>};
    break;
    case 'War':          return{...state,composant:<ConfirmationAndError data={action.payload}/>};
    break;
    case 'refreche':      return{...state,composant:'',refreche:!state.refreche};
    break;
    case 'openEdChat':       return {...state,openEdChat:action.payload};
    break;
    case 'CloseChat':       return {...state,openEdChat:''};
    break;
    case 'users':         return {...state,Users:action.payload};
    break;
    default :return state;
}
//     if (action.type=='succes'){
//         return {...state,composant:<ConfirmationAndError data={action.payload}/>}
//     }
//     if(action.type=='error'){
//    return{...state,composant:<ConfirmationAndError data={action.payload}/>}
//     }
//     if(action.type=='War'){
//         return{...state,composant:<ConfirmationAndError data={action.payload}/>}
//          }
//     if(action.type=='refreche'){
//         return{...state,composant:'',refreche:!state.refreche}
//          }
//     if(action.type=='openEdChat'){
//         return {...state,openEdChat:action.payload}
//     }     

//     return state;

}
const redusers=combineReducers({alert:reduseralert,Auth_check:Auth,Drawer_Profile:Drawer_Profile});
export const Store=createStore(redusers,{},applyMiddleware(thunk));
