import React from 'react';
import { useHistory } from 'react-router';

const Team = props => {

    const { strTeamBadge, strAlternate,idTeam } = props.team;

    const history = useHistory();
    
const handaleHistory = () => {
    history.push(`/teamdetails/${idTeam}`)
}

    return (

        <div>
            <aside>
                <img style={{ width: "150px" }} src={strTeamBadge} alt="" />
            </aside>
            <aside style={{marginBottom:"50px"}}>
                <h5>{strAlternate}</h5>
                <button onClick={handaleHistory}>SEE DETAILS</button>
            </aside>
        </div>
    );
};

export default Team;