import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Component/Loading';

const PrivateRouter = ({children}) => {
 let {myUser,loading}=use(AuthContext);
 let location=useLocation();
//  console.log(location)
if(loading){
    return <Loading></Loading>
}
if(myUser){
    return children;
}
else{
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
}
}

export default PrivateRouter;