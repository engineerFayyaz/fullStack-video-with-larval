import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Movies from "pages/Movies";
// import ContactUs from "pages/ContactUs";
const MyChannels = React.lazy(() => import("pages/MyChannels"));
const UploadMovie = React.lazy(() => import("pages/UploadMovie"));
const CreateChannel = React.lazy(() => import("pages/CreateChannel"));
const Desktop192 = React.lazy(() => import("pages/Desktop192"));
const Profile = React.lazy(() => import("pages/Profile"));
const Disclaimer = React.lazy(() => import("pages/Disclaimer"));
const PrivacyPolicy = React.lazy(() => import("pages/PrivacyPolicy"));
const TermsConditions = React.lazy(() => import("pages/TermsConditions"));
const Desktop191 = React.lazy(() => import("pages/Desktop191"));
const Player = React.lazy(() => import("pages/Player"));
const DetailsOne = React.lazy(() => import("pages/DetailsOne"));
const Details = React.lazy(() => import("pages/Details"));
const DetailsSeries= React.lazy(()=>import("pages/DetailsSeries"))
// const Desktop190 = React.lazy(() => import("pages/Desktop190"));
const Channels = React.lazy(() => import("pages/Channels"));
const movies = React.lazy(() => import("pages/Movies"));
// const Desktop187 = React.lazy(() => import("pages/Desktop187"));
const HomePage = React.lazy(() => import("pages/HomePage"));
const SignUpEmail = React.lazy(() => import("pages/SignUpEmail"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const SignUpOne = React.lazy(() => import("pages/SignUpOne"));
const Login = React.lazy(() => import("pages/Login"));
const MyWishlist = React.lazy(() => import("pages/MyWishlist"));
const ForgotPassword = React.lazy(()=> import("pages/ForgotPassword"));
const ContactUs =React.lazy(()=>import("pages/ContactUs"));
const Notification = React.lazy(()=> import("pages/Notification"))
const TermsOfUse =React.lazy(()=>import("pages/TermsOfUse"))
const Terms = React.lazy(()=>import("pages/Terms"))
const LiveStreamings = React.lazy(()=>import("pages/LiveStreamings"))
const ScheduleMovie = React.lazy(()=>import("pages/ScheduleMovie"))
// const PaymentPage =React.lazy(()=>import("pages/PaymentPage"))
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Ourbrand tv Loading...</>}>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/MyWishlist" element={<MyWishlist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> 
          <Route path="/signupone" element={<SignUpOne />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signupemail" element={<SignUpEmail />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/Channels" element={<Channels />} />
          <Route path="/details/:movie_id" element={<Details />} />
          <Route path="/detailsseries/:series_id" element={<DetailsSeries />} />
          <Route path="/detailsone" element={<DetailsOne />} />
          <Route path="/player" element={<Player />} />
          <Route path="/desktop191" element={<Desktop191 />} />
          <Route path="/TermsConditions" element={<TermsConditions />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/Disclaimer" element={<Disclaimer />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/desktop192" element={<Desktop192 />} />
          <Route path="/CreateChannel" element={<CreateChannel />} />
          <Route path="/UploadMovie" element={<UploadMovie />} />
          <Route path="/MyChannels" element={<MyChannels />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
          <Route path="/ContactUs" element={< ContactUs />}/>
          <Route path="/Notification" element={<Notification/>}/>
          <Route path="/TermsOfUse" element={<TermsOfUse/>}/>
          <Route path="/Terms" element={<Terms/>}/>
          <Route path="/LiveStreamings" element={<LiveStreamings/>}/>
          <Route path="/ScheduleMovie" element={<ScheduleMovie/>}/>
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
