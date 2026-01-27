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
       <div className="flex relative">
        <div className="w-64 fixed left-0 top-0 bg-white border-r-2 border-gray-200 h-screen">
          <Sidebar/>
        </div>
        <div className="ml-64 flex-1 min-h-screen bg-main-bg flex flex-col">
          <div className="fixed top-0 right-0 left-64 h-14 z-10 bg-main-bg border-b border-gray-200">
            <Navbar/>
          </div>
          <div className="pt-20 bg-light-gray min-h-screen">
            <div className="w-full mx-auto">
              <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/applications' element={<Applications/>}/>
              </Routes>
            </div>
          </div>
        </div>
     </div>
    </BrowserRouter>
  )
}

export default App
