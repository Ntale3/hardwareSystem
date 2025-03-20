import  { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component to wrap the application
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token,setToken]=useState(localStorage.getItem('site')||'');
    const navigate =useNavigate();

    //Login action
    const loginAction = async(userData) => {
    try{
        const response=await fetch('url',{
            method:'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(userData);
        });
const res=await response.json();
if(res.data){
    setUser(res.data.user);
    setToken(res.data.token);
    localStorage.setItem('site',res.token)
    navigate('index')
    return;

}
throw new Error(res.message)
       
    }catch{
console.error(err)
    }
       
    };


    //Logout Action
    const logoutAction = () => {
        setUser(null);
        setToken('');
        localStorage.removeItem('site');
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ token,user, loginAction, logoutAction }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};