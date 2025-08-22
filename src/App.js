import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Feedbacklist from "./components/Feedbacklist"
import Feedbackstats from "./components/Feedbackstats"
import Feedbackform from "./components/Feedbackform"
import { FeedbackProvider } from "./context/FeedbackContext"
import AboutPage from "./pages/AboutPage"
import AboutIconLink from "./components/AboutIconLink"



function App(){

  return (
    <FeedbackProvider>
        <Router>
            <Header/>
            
                <div className="container">
                    <Routes>

                            <Route path="/" element={<>
                                <Feedbackform />
                                <Feedbackstats />
                                <Feedbacklist  />
                            </>}></Route>

                        <Route path="/about" element={<AboutPage/>}/>
                    </Routes>


                    <AboutIconLink/>
            </div>
            
        
        
        </Router>
    </FeedbackProvider>
)    
}
export default App 