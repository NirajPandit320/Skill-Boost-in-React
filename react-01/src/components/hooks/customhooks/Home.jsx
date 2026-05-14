import { useBioContext } from "./context"; // or "./Context" if filename is Context.jsx

export const Home = () => {
  const { myName, myAge } = useBioContext();
  return <h1>{`My name and age is ${myName} ${myAge}`}</h1>;
};