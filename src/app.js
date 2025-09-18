import React,{lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About"; 
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurentMenu from "./component/RestaurentMenu";
//import Grocery from "./component/Grocery";

// not using keys(not acceptable) <<index as key << unique id(best practice);


//chunking
//code splitting 
// dynamic bundling 
//lazy loading 
// on demand loading ;

const Grocery = lazy(()=>import("./component/Grocery"));


const AppLayout = () =>{
    return (<div className="app">
       <Header/>
       <Outlet/>
    </div>);
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[{
            path:"/",
            element: <Body/>
        },
              {
        path:"/about",
        element:<About/>,
    },
    {
        path:"/contact",
        element:<Contact/>
    },
     {
        path:"/restaurent/:resId",
        element:<RestaurentMenu/>
    }
     , {
        path:"/grocery",
        element:<Suspense fallback={<h1>loading .... </h1>} ><Grocery/></Suspense>
      }
        ],
        errorElement:<Error/>
    }
  
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);




