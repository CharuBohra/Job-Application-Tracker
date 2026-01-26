import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import StatusCard from "./components/StatusCard"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import Applications from "./pages/Applications"

function App() {

  return (
    <BrowserRouter>
       <div className="flex relative dark:bg-main-dark-bg">
        <div className="w-64 fixed left-0 top-0 bg-white border-r-2 border-gray-200 h-screen">
          <Sidebar/>
        </div>
        <div className="ml-64 w-full min-h-screen bg-main-bg dark:bg-main-dark-bg flex flex-col">
          <div className="fixed top-0 right-0 left-64 h-14 bg-main-bg dark:bg-main-dark-bg w-full">
            <Navbar/>
          </div>
          <div className="px-6 pt-20 bg-light-gray min-h-screen">
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/applications' element={<Applications/>}/>
            </Routes>
          </div>
        </div>
     </div>
    </BrowserRouter>
  )
}

export default App
