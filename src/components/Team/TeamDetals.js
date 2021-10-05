import React, { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SingleTeam from './SingleTeam';


export const TeamContext = createContext('ring')

const TeamDetals = () => {


    const params = useParams();
    const [teamDetails , setTeamDetails] = useState([]);

    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${params.teamId}`)
        .then(res => res.json())
        .then(data => setTeamDetails(data.teams[0]));
    },[params])
    



    return (
        <TeamContext.Provider value={teamDetails}>
            <SingleTeam></SingleTeam>
        </TeamContext.Provider>
    );
};

export default TeamDetals;