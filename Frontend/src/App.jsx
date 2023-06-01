import "./App.css";
import { useGetNotesQuery } from "../features/noteapiSlide";
import Main from "./pages/Main";

function App() {
  console.log(useGetNotesQuery());
  return (
    <>
      <Main />
    </>
  );
}

export default App;
