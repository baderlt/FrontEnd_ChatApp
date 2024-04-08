import { Skeleton } from "@mui/material";

const Loding_Profile=()=>{
return<>
  <div className="flex flex-nowrap flex-col mt-2">
  <div className={` mx-auto  '}`}>
  <span>
    {" "}
    <Skeleton
      variant="circular"
      width={150}
      height={150}
      className="text-gray-400"
      sx={{ marginLeft: "20px " ,backgroundColor:" rgb(31 41 55)"}}
    />
  </span>
  </div>
  <span className="w-full mt-10 pl-5  mr-4">
    <Skeleton
      variant="rounded"
      width={"50%"}
      height={30}
      sx={{
        marginRight: "10px ",
        marginLeft: "5px",
        marginTop: "6px",
        backgroundColor:"rgb(31 41 55)"
      }}
    />
  </span>
  <span className="w-full mt-5 pl-5 mr-4">
    <Skeleton
      variant="rounded"
      width={"50%"}
      height={30}
      sx={{
        marginRight: "10px ",
        marginLeft: "5px",
        marginTop: "6px",
        backgroundColor:"rgb(31 41 55)"
      }}
    />
  </span>
  <span className="w-full mt-5 pl-5 mr-4">
    <Skeleton
      variant="rounded"
      width={"50%"}
      height={30}
      sx={{
        marginRight: "10px ",
        marginLeft: "5px",
        marginTop: "6px",
        backgroundColor:"rgb(31 41 55)"
      }}
    />
  </span>
  <span className="w-full mt-12  flex  justify-center">
    <Skeleton
      variant="rounded"
      width={90}
      height={40}
      sx={{
        marginRight: "10px ",
        marginLeft: "5px",
        marginTop: "6px",
        backgroundColor:"rgb(31 41 55)"
      }}
    />
        <Skeleton
      variant="rounded"
      width={90}
      height={40}
      sx={{
        marginRight: "10px ",
        marginLeft: "5px",
        marginTop: "6px",
        backgroundColor:"rgb(31 41 55)"
      }}
    />
  </span>
</div>

</>
}
export default Loding_Profile;