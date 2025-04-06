// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { MantineProvider } from "@mantine/core";

// import "./App.css";
// import Dashboard from "./components/Dashboard/Dashboard";
// import Expense from "./components/Expense/Expense";
// import Home from "./components/Home/Home";
// import Signup from "./components/Signup/Signup";
// import Login from "./components/Login/Login";
// import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";
// import News from "./components/Setting/News";
// import Portfolio from "./components/Portfolio/Portfolio";
// import Budget from "./components/Budget/Budget";
// import Help from './components/help/help'

// function App() {
//   return (
//     <MantineProvider theme={{}}>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route path="/login" element={<Login />}></Route>
//           <Route path="/signup" element={<Signup />}></Route>
//           <Route
//             path="/dashboard/:username"
//             element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/portfolio/:username"
//             element={
//               <ProtectedRoute>
//                 <Portfolio />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/expense/:username"
//             element={
//               <ProtectedRoute>
//                 <Expense />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/budget/:username"
//             element={
//               <ProtectedRoute>
//                 <Budget />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/News/:username"
//             element={
//               <ProtectedRoute>
//                 <News />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </MantineProvider>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Expense from "./components/Expense/Expense";
import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";
import News from "./components/Setting/News";
import Portfolio from "./components/Portfolio/Portfolio";
import Budget from "./components/Budget/Budget";
import Help from "./components/help/help"; 

function App() {
  return (
    <MantineProvider theme={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard/:username"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/portfolio/:username"
            element={
              <ProtectedRoute>
                <Portfolio />
              </ProtectedRoute>
            }
          />
          <Route
            path="/expense/:username"
            element={
              <ProtectedRoute>
                <Expense />
              </ProtectedRoute>
            }
          />
          <Route
            path="/budget/:username"
            element={
              <ProtectedRoute>
                <Budget />
              </ProtectedRoute>
            }
          />
          <Route
            path="/news/:username"
            element={
              <ProtectedRoute>
                <News />
              </ProtectedRoute>
            }
          />
          <Route
            path="/help/:username"
            element={
              <ProtectedRoute>
                <Help />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
