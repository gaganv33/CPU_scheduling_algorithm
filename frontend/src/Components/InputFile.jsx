
const InputFile = function(){
   return (
      <div className="px-2 py-3 h-[35rem] sm:px-4 sm:py-6 bg-slate-100 rounded-lg flex flex-col justify-center gap-5
      shadow-lg"> 
         <h2 className="font-semibold text-xl tracking-wide text-center">Input</h2>

         <div className="w-full flex flex-col gap-4">

            <div className="flex flex-col justify-start gap-2">
               <label htmlFor="algorithm">Algorithm</label>
               <select id="algorithm" className="px-3 py-2 sm:py-3 rounded-lg outline-none  focus:ring-slate-500 
               focus:ring-2">
                  <option value={"fcfs"}>First Come First Serve (FCFS)</option>
                  <option value={"sjfs"}>Shortest Job First</option>
                  <option value={"srtf"}>Shortest Remaining Time First</option>
                  <option value={"rr"}>Round Robin</option>
                  <option value={"pnp"}>Priority Non Preemptive</option>
                  <option value={"pp"}>Priority Preemptive</option>
               </select>
            </div>

            <div className="flex flex-col justify-start gap-2">
               <label htmlFor="arrivalTimes">Arrival Times</label>
               <input type="text" className="px-3 py-2 sm:py-3 rounded-lg outline-none  focus:ring-slate-500 
               focus:ring-2" placeholder="eg: 0 2 4 6 8" id="arrivalTimes" />
            </div>

            <div className="flex flex-col justify-start gap-2">
               <label htmlFor="burstTime">Arrival Times</label>
               <input type="text" className="px-3 py-2 sm:py-3 rounded-lg outline-none  focus:ring-slate-500 
               focus:ring-2" placeholder="eg: 0 2 4 6 8" id="burstTime" />
            </div>

            <div className="flex flex-col justify-start gap-2">
               <label htmlFor="priority">Arrival Times</label>
               <input type="text" className="px-3 py-2 sm:py-3 rounded-lg outline-none  focus:ring-slate-500 
               focus:ring-2" placeholder="Lower value higher priority" id="priority" />
            </div>

         </div>
         <div className="w-full flex items-center justify-center">
            <button className="px-4 py-2 bg-blue-600 rounded-lg text-slate-50 outline-none 
             focus:ring-2 focus:ring-blue-500">
               Solve
            </button>
         </div>
      </div>
   );
}

export default InputFile;
