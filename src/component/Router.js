
import AppLayout from "./AppLayout"

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Popular from "./Popular";
import UpcomingMovies from "./UpcomingMovies";
import TopRated from "./TopRated";
import Details from "./Details";
import Search from "./Search";
const Router=()=>{
    const approuter =createBrowserRouter([
            {
                path:'/',
                element:<AppLayout/>,
                children:[
                    {
                        path:'/',
                        element:<Popular/>
                    },
                    {
                        path:'/upcoming',
                        element:<UpcomingMovies/>

                    },
                    {
                        path:'/topRated',
                        element:<TopRated/>
                    },
                    {
                        path:'/details/:id',
                        element:<Details/>
                    },
                    {
                         path:'/search',
                         element:<Search/>
                    }
                ]
            } ,   
                 ]);
    

    return (
        <div>
           <RouterProvider router={approuter}></RouterProvider>
        </div>
    )
}
export default Router