// import {UseRefs} from "./components/hooks/UseRef/UseRefs";
// import {ForwardRefs} from "./components/hooks/UseRef/ForwardRefs";
import {BioProvider} from "./components/hooks/customhooks/Context";
import {Home} from "./components/hooks/customhooks/Home";

const App = () => {
  return (
  <>
  <BioProvider>
    <Home/>
  </BioProvider>
  </>
  )
  
  
};

export default App;
