import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [about, setAbout] = useState([]);
    const [project, setProject] = useState([]);

    const fetchData = async () => {
        const res1 = await axios.get(`/about`);
        // console.log(res1.data);
        setAbout(res1.data);

        //fetching projects
        const res2= await axios.get(`/project`);
        console.log(res2.data);
        setProject(res2.data);


    }

    useEffect(() => {
        

        try {
            fetchData();
        } catch (err) {
            console.log(err)
        }
    }, [])

    const state = {
        about:[about, setAbout], 
        project:[project, setProject]
    }






    return (
        <DataContext.Provider value={state}>
            {children}
        </DataContext.Provider>
    )

}
