import { Skeleton } from "@mui/material";
const Loding_Chat = () => {
  const SkeltonesReps = Array.from(Array(7));
  return <>
  {SkeltonesReps.map((num,index)=>{
    return   <div className="flex flex-nowrap mt-2" key={index}>
  <span>
    {" "}
    <Skeleton
      variant="circular"
      width={50}
      height={50}
      className="text-gray-400"
      sx={{ marginLeft: "20px " ,backgroundColor:" rgb(31 41 55)"}}
    />
  </span>
  <span className="w-full mr-4">
    <Skeleton
      variant="rounded"
      width={"100%"}
      height={50}
      sx={{
        marginRight: "10px ",
        marginLeft: "5px",
        marginTop: "6px",
        backgroundColor:"rgb(31 41 55)"
      }}
    />
  </span>
</div>
  })}
  </>
 };
 export default Loding_Chat;
 

