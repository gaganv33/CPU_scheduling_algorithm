
const Table = function() {

   const data = [[1, 2, 3, 4, 5, 6], [8, 2, 3, 4, 5, 6], [9, 2, 3, 4, 5, 6], [10, 2, 3, 4, 5, 6]];

   return (
      <div className=" flex flex-col gap-2 px-4 overflow-y-scroll">
         <table className="table-fixed w-[50rem] sm:w-full">
            <thead className="flex items-center justify-center bg-slate-200">
               <td className="w-1/2 px-2 py-1 sm:px-4 sm:py-2 flex items-center justify-center">ID</td>
               <td className="w-1/2 px-2 py-1 sm:px-4 sm:py-2 flex items-center justify-center">AT</td>
               <td className="w-1/2 px-2 py-1 sm:px-4 sm:py-2 flex items-center justify-center">BT</td>
               <td className="w-1/2 px-2 py-1 sm:px-4 sm:py-2 flex items-center justify-center">CT</td>
               <td className="w-1/2 px-2 py-1 sm:px-4 sm:py-2 flex items-center justify-center">TT</td>
               <td className="w-1/2 px-2 py-1 sm:px-4 sm:py-2 flex items-center justify-center">WT</td>
            </thead>
            <tbody className="border divide-y-[0.05rem] divide-slate-200">
               {
                  data.map((item) => {
                     return (
                        <tr className="flex items-center justify-center divide-x-[0.05rem] divide-slate-200" key={item[0]}>
                           <td className="w-1/2 px-2 py-1 sm:px-4 sm:py-2 flex items-center justify-center">
                              {item[0]}
                           </td>
                           <td className="w-1/2 px-2 py-1  sm:px-4 sm:py-2 flex items-center justify-center">
                              {item[1]}
                           </td>
                           <td className="w-1/2 px-2 py-1  sm:px-4 sm:py-2 flex items-center justify-center">
                              {item[2]}
                           </td>
                           <td className="w-1/2 px-2 py-1 sm:px-4 sm:py-2 flex items-center justify-center">
                              {item[3]}
                           </td>
                           <td className="w-1/2 px-2 py-1 sm:px-4 sm:py-2 flex items-center justify-center">
                              {item[4]}
                           </td>
                           <td className="w-1/2 px-2 py-1 sm:px-4 sm:py-2 flex items-center justify-center">
                              {item[5]}
                           </td>
                        </tr>
                     )
                  })
               }
            </tbody>
         </table>
      </div>
   );
}

export default Table;
