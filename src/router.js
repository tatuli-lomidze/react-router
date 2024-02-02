import LinkLayout from './layouts/LinkLayouts';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ParamPage from './pages/ParamPage';
import MainPage from './pages/mainPage';

const router = [
    { 
        element: <LinkLayout/>,
        path: '/',
        children: [
     {
                element: <HomePage/>,
                path: '/'
        },
    { 

        element: <MainPage/>,
        path: 'main'
    },

    {
        element: <AboutPage/>,
        path: 'about'
    },]
    
},

{
        element: <ParamPage/>,
        path: '/info/:id'
},

{
    element: <ErrorPage/>,
    path: '*'
}
    
]

export default router