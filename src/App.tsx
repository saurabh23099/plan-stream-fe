import Navbar from './components/Navbar';
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchTriggered, setSearchTriggered] = useState(false);

  const triggerSearch = () => {
    setSearchTriggered(true);
  };

  return (
    <>
      <div>
        <Navbar setSearchQuery={setSearchQuery} triggerSearch={triggerSearch} />
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} searchTriggered={searchTriggered} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
