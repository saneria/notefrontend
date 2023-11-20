import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./redux/store";
import NoteList from "./components/NoteList";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/notes" element={<NoteList />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
