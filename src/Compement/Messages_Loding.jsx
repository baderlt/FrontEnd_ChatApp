import { Skeleton } from "@mui/material";

const Messages_Loding = () => {
 const Skeltones = Array.from(Array(6)).map(e=><SkelotonElement/>);
 return Skeltones
};
export default Messages_Loding;


function SkelotonElement()
{
    return (
        <>
    
          <div className=" col-start-1 col-end-11 p-0 rounded-lg  ">
            <div className="  w-[100%]">
              
            </div>
            <div className="flex flex-row items-center">
              <div className={"flex items-center justify-center   flex-shrink-0 "}>
                <div className="flex flex-nowrap mt-2">
                  <span>
                    {" "}
                    <Skeleton variant="circular"  width={30} height={30} />
                  </span>
                </div>
              </div>
    
    
    
              <div className=" ml-2 text-sm  ">
                <div className="flex flex-nowrap mt-2">
                  <span className="w-full mr-4 ">
                    <Skeleton variant="rounded" style={{borderRadius:'12px'}} width={300} height={30} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-3 col-end-13 p-0 rounded-lg ">
            <div className={"flex items-center justify-start flex-row-reverse "}>
              <div className=" mr-3 flex flex-row ">
                <div className="flex flex-nowrap mt-2">
                  <span className="w-full mr-4 ">
                    <Skeleton variant="rounded" style={{borderRadius:'12px'}} width={300} height={30} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      );}