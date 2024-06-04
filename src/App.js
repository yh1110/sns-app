import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/signin" element={<Signin />}></Route>
                        <Route path="/signup" element={<Signup />}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
