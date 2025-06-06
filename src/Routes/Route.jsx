import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/Home/ContactUs";
import Surveys from "../Pages/Home/Surveys";
import Pricing from "../Pages/Home/Pricing";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashboardLayout from "../Layouts/DashboardLayout";
import Statistics from "../Pages/Dashboard/Common/Statistics";
import SurveyCreation from "../Pages/Dashboard/Surveyor/SurveyCreation";
import SurveyorSurveys from "../Pages/Dashboard/Surveyor/SurveyorSurveys";
import SurveyDetails from "../Pages/SurveyDetails/SurveyDetails";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import Commented from "../Pages/Dashboard/ProUser/Commented";
import Participate from "../Pages/Dashboard/CommonUser/Participate";
import PrivateRoute from "./PrivateRoute";
import Vote from "../Pages/Vote/Vote";
import Reported from "../Pages/Dashboard/CommonUser/Reported";
import Payment from "../Pages/Payment/Payment";
import AllPayments from "../Pages/Dashboard/Admin/AllPayments";
import SurveyUpdate from "../Pages/Dashboard/Surveyor/SurveyUpdate";
import Feedback from "../Pages/Dashboard/Surveyor/Feedback";
import Update from "../Pages/Dashboard/Surveyor/Update";
import ResPonseDetails from "../Pages/Dashboard/Surveyor/ResPonseDetails";
import AdminSurveys from "../Pages/Dashboard/Admin/AdminSurveys";
import SurveyorRoute from "./SurveyorRoute";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/surveys",
        element: <Surveys />,
      },
      {
        path: "/survey/:id",
        element: <SurveyDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/survey/${params.id}`),
      },
      {
        path: "/votes/:id",
        element: (
          <PrivateRoute>
            <Vote />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/survey/${params.id}`),
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/payments",
        element: <PrivateRoute><Payment /></PrivateRoute>,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/signup", element: <SignUp /> },

  // for dashboard
  {
    path: "/dashboard",
    element: 
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ,
    children: [
      {
        path: "/dashboard",
        element: <Statistics />,
      },
      {
        path: "survey-create",
        element: <SurveyorRoute>
           <SurveyCreation />
        </SurveyorRoute> ,
      },
      {
        path: "all-user",
        element: <AdminRoute>
          <AllUsers />
        </AdminRoute>,
      },
      {
        path: "manage-surveys",
        element: <AdminRoute>
          <AdminSurveys />
        </AdminRoute>,
      },

      {
        path: "all-payments",
        element: <AdminRoute>
          <AllPayments />
        </AdminRoute>,
      },
      {
        path: "surveyor-surveys",
        element: <SurveyorRoute>
          <SurveyorSurveys />
        </SurveyorRoute>,
      },
      {
        path: "survey-update",
        element: <SurveyorRoute>
          <SurveyUpdate />
        </SurveyorRoute>,
      },

      {
        path: "update/:id",
        element: (
          <SurveyorRoute>
            {" "}
            <Update></Update>
          </SurveyorRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/survey/${params.id}`),
      },

      {
        path: "response/:id",
        element: <SurveyorRoute>
          <ResPonseDetails />
        </SurveyorRoute>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/vote/${params.id}`),
      },

      {
        path: "feedback",
        element: <SurveyorRoute>
          <Feedback />
        </SurveyorRoute>,
      },
      {
        path: "comments",
        element: <Commented />,
      },
      {
        path: "participate",
        element: <Participate />,
      },
      {
        path: "reported",
        element: <Reported />,
      },
    ],
  },
]);
