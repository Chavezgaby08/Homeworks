import { Navigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

const privateRoute = ({ children }: any) => {

    const { user } = useAuth();

    if (!user){
        
        return <Navigate to= "/"/>;
    }

    return children;
};

export default privateRoute;