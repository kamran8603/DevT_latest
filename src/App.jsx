import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body"
import Login from "./components/Login"
import appStore from "./utils/appStore"
import Profile from "./components/Profile"
import { Provider } from "react-redux";
import Feed from "./components/Feed"
import Connections from "./components/Connections"
import Request from "./components/Request"
import Chat from "./components/Chat";
import HowItWorks from "./components/HowItWorks";
import AboutUs from "./components/AboutUs";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import CookiePrivacy from "./components/CookiePrivacy";
import TermsServices from "./components/TermsServices";
import Careers from "./components/Careers";
import Features from "./components/Features";

function App() {
  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>} >
          <Route path="/" element={<Feed/>} />
           <Route path="/login" element={<Login/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/connections" element={<Connections/>} />
            <Route path="/requests" element={<Request/>} />
             <Route path="/chat/:targetUserId" element={<Chat/>} />
             <Route path="/howItWorks" element={<HowItWorks/>} />
             <Route path="/aboutUs" element={<AboutUs/>} />
               <Route path="/pricing" element={<Pricing/>} />
               <Route path="/contact" element={<Contact/>} />
               <Route path="/privacy" element={<Privacy/>} />
               <Route path="/cookiePrivacy" element={<CookiePrivacy/>} />
               <Route path="/termsServices" element={<TermsServices/>} />
               <Route path="/careers" element={<Careers/>} />
                <Route path="/feautures" element={<Features/>} />

          </Route>
          
        </Routes>
      </BrowserRouter>

    </Provider>
      
     
      {/* <h1 className="text-3xl font-bold">Hello world</h1> */}
    </>
  );
}

export default App;
