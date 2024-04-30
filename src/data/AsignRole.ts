// import { useMutation } from "react-query";
// import { TRoleChangeInput, TRoleChangeOutput } from "../types/type";


//  export const mutationAssignRole = useMutation<
//     TRoleChangeOutput,
//     Error,
//     TRoleChangeInput
//   >({
//     mutationFn: async (body) => {
//       const response = fetch(
//         "http://localhost:8080/api/v1/users/assign-role/6489626dc265f0aa2dbb73a4",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             role: body.role,
//           }),
//         }
//       );
//       if(!(await response).ok){
//        const data = (await response).json()
//        console.log("data Error...",data)
//       }
//       const data = (await response).json();
//       return data;
//     },
//     onSuccess: (data) => {
//       console.log(data, "data......");
//     },
//   });

 

