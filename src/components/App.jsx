import{Routes, Route} from "react-router-dom";
import {Home} from '/src/pages/Home';
import {Movies} from '/src/pages/Movies';
import {MoveModal} from '/src/components/MoveModal'
import {Cast} from '/src/components/Cast';
import {Reviews} from '/src/components/Reviews';
import { SharedLayout } from "/src/components/SharedLayout";

function App() {
  return (
    <>
    <SharedLayout />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:id" element={<MoveModal />}>
        <Route path="cast" element={<Cast />}></Route>
        <Route path="reviews" element={<Reviews />}></Route>
        </Route>
      </Routes>
      
  
    </>
  );
}

export default App;
