import RecentSearch from "./R_Search";
import RecentUsers from "./R_users";

const Recent=({refrech})=>{
    return (
        <>
<RecentUsers refrech={refrech}/>
<RecentSearch refrech={refrech}/>
        </>
    )
}
export default Recent;