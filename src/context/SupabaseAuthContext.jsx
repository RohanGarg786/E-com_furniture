import { createContext, useContext, useEffect, useState } from "react";
import { loginValidations, registerValidation } from "../lib/validations";
import toast from "react-hot-toast";
import supabase from "../supabase/supabase.config";


const SupabaseContext = createContext();

const SupabaseAuthProvider = ({children})=>{
    const [user,setUser] =useState();
    const signUpUserWithEmailAndPassword = async ({email,password,username,})=>{
        try {
            let result = await registerValidation.validate({email,password,username}, {
                abortEarly: false,
            });
    
            let {data,error} = await supabase.auth.signUp({
                email: result.email,
                password: result.password,
                options:{
                    data:{
                        username: result.username,
                    },
                },
            });
    
            if(error){
                throw new Error(error.message);
            }   

            toast.success("User Registered Succesfully")
            return data;
            
        } catch (error) {
            toast.error(
                error.message || error?.errors[0] || "Something went wrong"
            );
    
            return false;
        }
    }
    
    const signInUserWithEmailAndPassword = async({email,password})=>{
        try {
            let result = await loginValidations.validate({email,password,}, {
                abortEarly: false,
            });
    
            let {data,error} = await supabase.auth.signInWithPassword({
                email: result.email,
                password: result.password,
            });
    
            if(error){
                throw new Error(error.message);
            }
            toast.success("User LogIn Succesfully")
            return data;
            
        } catch (error) {
            toast.error(
                error.message || error?.errors[0] || "Something went wrong"
            );
    
            return false;
        }
    }

    const logoutUser = async()=>{
        try {
            let {error} =await supabase.auth.signOut();
            if(error){
                throw new Error(error.message);
            }

            toast.success("Logged Out Successfully")
            return true;
        } catch (error) {
            toast.error(
                error.message || error?.errors[0] || "Something went wrong"
            );
    
            return false;
        }
    }

    useEffect(()=>{
        let{data} = supabase.auth.onAuthStateChange((event,session)=>{
            if(event === "SIGNED_IN"){
                setUser(session);
            }else if(event === "INITIAL_SESSION"){
                setUser(session);
            }else if(event === "SIGNED_OUT"){
                setUser(null);
            }
        })

        return ()=>{
            data.subscription.unsubscribe()
        }
    },[])



    return <SupabaseContext.Provider value={{signUpUserWithEmailAndPassword , signInUserWithEmailAndPassword , user,logoutUser,}}>{children}</SupabaseContext.Provider>
}

export default SupabaseAuthProvider;



//custom hook to use value from supabase context
export const useSupabaseAuth = () => {
    let context = useContext(SupabaseContext);

    if (!context) {
        throw new Error(
            "useSupabaseAuth hook must be called inside a SupabaseAuthProvider"
        );
    }

    return context;
};