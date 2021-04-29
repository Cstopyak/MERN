import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = ({children})=>{
const [isLogin, setIsLogin] = useState(false);
const [about, setAbout] = useState([]);
const [projects, setProjects] = useState([]);
const [loginFin, setLoginFin] = useState(true);
const [dataFin, setDataFin] = useState(true);


// checking token login
const checkLogin= async()=>{
    const token = localStorage.getItem('tokenStore');
    if(token){

const verified = await axios.get(`/user/verify`,{headers:{Authorization:token}})
//  console.log(verified);

 setIsLogin(verified.data);
 if(verified.data===false){
     return localStorage.clear();
 }
 }else{
     setIsLogin(false)
 }

}


useEffect(()=>{

try {
    if(loginFin){
        checkLogin();
    }
    // console.log(loginFin);
    return setLoginFin(false)
 



} catch (err) {
    console.log(err);
}


},[loginFin])




const fetchAbout= async()=>{
  const res1 = await axios.get(`/about`);
  console.log(res1.data)
  setAbout(res1.data);
}




// const fetchProjects= async()=>{
//         const res4 = await axios.get(`/project`);
//         setProjects(res4.data);
// }



// for fetching data

const fetchData= async ()=>{

     // ...for fetching about...
    const res1 = await axios.get(`/about`);
    // console.log(res1.data);
    setAbout(res1.data);


    // ...for fetching projects
    const res4 = await axios.get(`/project`);
    // console.log(res4.data);
    setProjects(res4.data);



}




useEffect(() => {

    try {
      
 if(dataFin){
    fetchData();
 }



      //console.log(dataFin);
    return setDataFin(false)
 

  

//    fetchAbout();
//    fetchEducation();
//    fetchProjects();
//    fetchExperience();

    } catch (err) {
       console.log(err); 
    }
    
},[dataFin])



const state = {
    about:[about, setAbout],
    projects:[projects, setProjects],
    isLogin:[isLogin, setIsLogin]
   
}




    return(
        <DataContext.Provider value={state}>
            {children}
        </DataContext.Provider>
    )




}
