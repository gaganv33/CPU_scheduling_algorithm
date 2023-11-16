
const OutputFile = function() {
   const finishTime = [0, 2, 6, 12, 20, 30, 40, 45, 0, 2, 6, 12, 20, 30, 40, 45, 0, 2, 6, 12, 20, 30, 40, 45, 0, 2, 6, 12, 20, 30, 40, 45];
   const process = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', "P", 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

   return (
      <div className="px-2 py-3 sm:px-4 sm:py-6 bg-slate-100 rounded-lg flex flex-col items-center gap-7 shadow-lg">
         {/* Grantt Chart and table will be shown here */}
         <div className="flex justify-between items-center items-between w-full">
            <h1 className="text-xl font-semibold tracking-wide">Output</h1>
            <span className="text-lg text-green-700 bg-green-200 rounded-md px-2 py-1 sm:px-3">SJF</span>
         </div>
         <div className="flex flex-col items-center w-[85%]">
            <div className="flex flex-row flex-wrap gap-y-5 divide-x-2 divide-slate-50">
               {
                  process.map((item, count) => {
                     return (
                        <span className="flex flex-col" key={item}>
                           <div className={`w-[40px] h-[40px] flex justify-center items-center bg-blue-100 text-blue-400 border-blue-500 
                           ${count == 0 ? "border-l-[0.1rem]" : ""} border-t-[0.1rem] 
                           border-b-[0.1rem] border-r-[0.1rem] border-l-[0.1rem]`}>{item}</div>
                           <div>{finishTime[count]}</div>
                        </span>
                     )
                  })
               }
            </div>
         </div>
      </div>
   );
}

export default OutputFile;
