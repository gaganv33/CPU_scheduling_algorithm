import { useState } from "react";

// eslint-disable-next-line react/prop-types
const InputFile = function({ setIsError, setMessage }){

   const [algorithm, setAlgorithm] = useState("FCFS");
   const [arrivalTime, setArrivalTime] = useState("");
   const [burstTime, setBurstTime] = useState("");
   const [priorityValue, setPriorityValue] = useState("");

   function Submit() {
      
      const arrivalTimeArray = arrivalTime.trim().split(" ");
      const burstTimeArray = burstTime.trim().split(" ");
      const priorityValueArray = priorityValue.trim().split(" ");

      const n = arrivalTimeArray.length;
      const m = burstTimeArray.length;
      const k = priorityValueArray.length;

      const arrivalArray = [];
      const burstArray = [];
      const priorityArray = [];

      for(let i = 0; i < n; i = i + 1) {
         const value = parseInt(arrivalTimeArray[i]);
         if(value >= 0 && value <= 9) {
            arrivalArray.push(value);
         }
         else{
            setMessage("Invalid input");
            setIsError(true);
            return;
         }
      }

      for(let i = 0; i < m; i = i + 1) {
         const value = parseInt(burstTimeArray[i]);
         if(value === 0) {
            setMessage("Burst time cannot be 0")
            setIsError(true);
            return;

         }
         if(value > 0 && value <= 9) {
            burstArray.push(value);
         }
         else{
            setMessage("Invalid input");
            setIsError(true);
            return;
         }
      }

      for(let i = 0; i < k; i = i + 1) {
         const value = parseInt(priorityValueArray[i]);
         if(value >= 0 && value <= 9) {
            priorityArray.push(value);
         }
         else{
            setMessage("Invalid input");
            setIsError(true);
            return;
         }
      }

      if(m !== n) {
         setMessage("Number of arrival time elements should ne equal to number of burst time elements");
         setIsError(true);
         return;
      }

      if(k !== m) {
         setMessage("Number of priority value elements should be equal to number of arrival time and burst time elements");
         setIsError(true);
         return;
      }
      
   }

   return (
      <div className="px-2 py-3 h-[35rem] sm:px-4 sm:py-6 bg-slate-100 rounded-lg flex flex-col justify-center gap-5
      shadow-lg"> 
         <h2 className="font-semibold text-xl tracking-wide text-center">Input</h2>

         <div className="w-full flex flex-col gap-4">

            <div className="flex flex-col justify-start gap-2">
               <label htmlFor="algorithm">Algorithm</label>
               <select id="algorithm" className="px-3 py-2 sm:py-3 rounded-lg outline-none  focus:ring-slate-500 
               focus:ring-2" value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
                  <option value={"FCFS"}>First Come First Serve (FCFS)</option>
                  <option value={"SJFS"}>Shortest Job First</option>
                  <option value={"SRTF"}>Shortest Remaining Time First</option>
                  <option value={"RR"}>Round Robin</option>
                  <option value={"PNP"}>Priority Non Preemptive</option>
                  <option value={"PP"}>Priority Preemptive</option>
               </select>
            </div>

            <div className="flex flex-col justify-start gap-2">
               <label htmlFor="arrivalTimes">Arrival Time</label>
               <input type="text" className="px-3 py-2 sm:py-3 rounded-lg outline-none  focus:ring-slate-500 
               focus:ring-2" placeholder="eg: 0 2 4 6 8" id="arrivalTimes" value={arrivalTime !== "" ? arrivalTime : ""} 
                onChange={(e) => setArrivalTime(e.target.value)}/>
            </div>

            <div className="flex flex-col justify-start gap-2">
               <label htmlFor="burstTime">Burst Time</label>
               <input type="text" className="px-3 py-2 sm:py-3 rounded-lg outline-none  focus:ring-slate-500 
               focus:ring-2" placeholder="eg: 0 2 4 6 8" id="burstTime" value={burstTime !== "" ? burstTime : "" }
                onChange={(e) => setBurstTime(e.target.value)} />
            </div>

            <div className="flex flex-col justify-start gap-2">
               <label htmlFor="priority">Priority Value</label>
               <input type="text" className="px-3 py-2 sm:py-3 rounded-lg outline-none  focus:ring-slate-500 
               focus:ring-2" placeholder="Lower value higher priority" id="priority" value={priorityValue !== "" ? priorityValue : ""}
                onChange={(e) => setPriorityValue(e.target.value)} />
            </div>

         </div>
         <div className="w-full flex items-center justify-center">
            <button className="px-4 py-2 bg-blue-600 rounded-lg text-slate-50 outline-none 
             focus:ring-2 focus:ring-blue-500" onClick={() => Submit()}>
               Solve
            </button>
         </div>
      </div>
   );
}

export default InputFile;
