// import {UseRefs} from "./components/hooks/UseRef/UseRefs";
// import {ForwardRefs} from "./components/hooks/UseRef/ForwardRefs";
// import {BioProvider} from "./components/hooks/customhooks/Context";
// import {Home} from "./components/hooks/customhooks/Home";
// import {DarkLight} from "./projects/DarkLight";
// import {ThemeProvider} from "./projects/DarkLight";
// import {ReducerComp} from "./components/hooks/UseReducer/ReducerComp";
import { ReactMemo } from "./components/hooks/memo/ReactMemo";



const App = () => {
  return (
  <>
  {/* <ThemeProvider>
    <DarkLight/>
  </ThemeProvider> */}
  {/* <ReducerComp/> */}
  <ReactMemo />
  </>
  )
  
  
};

export default App;
