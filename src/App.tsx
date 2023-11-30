import { FC, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Hero from "./pages/Hero";

const AsyncHistory = lazy(() => import("./pages/History"));
const AsyncGallery = lazy(() => import("./pages/Gallery"));

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Hero />} />
        <Route path="history" element={<AsyncHistory />} />
        <Route path="gallery" element={<AsyncGallery />} />
      </Route>
    </Routes>
  );
};

export default App;
