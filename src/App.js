import React from "react";
import Login from "./pages/Login.js";
import Course1 from "./pages/Course1.js";
import Main from "./pages/Main.js";
import MyPage from "./pages/MyPage.js";
import Message from "./pages/Message.js";
import Plms from "./pages/Plms.js";
import Error from "./pages/Error.js";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
        <div className="app"></div>
        <Routes>
          <Route exact path="/" element={<Plms/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/main" element={<Main/>}></Route>
          <Route exact path="/main/mypage" element={<MyPage/>}></Route>
          <Route exact path="/main/message" element={<Message/>}></Route>
          <Route exact path="/main/course1" element={<Course1/>}></Route>
          <Route exact path="/main/error" element={<Error/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
