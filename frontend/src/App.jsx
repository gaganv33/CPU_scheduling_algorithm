import InputFile from "./Components/InputFile";
import OutputFile from "./Components/OutputFile";

const App = function(){
  return (
    <div className="px-5 py-5 sm:px-10 sm:py-10">
      <div className="flex flex-col sm:grid sm:grid-cols-[30%_auto] gap-4"> 
        <InputFile />
        <OutputFile />
      </div>
    </div>
  );
}

export default App;
