import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';

const SportsTeams = () => {

    const [teams, setTeams] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${search}`)
            .then(res => res.json())
            .then(data => setTeams(data.teams));
    }, [search]);

    const handaleSearch = (e) => {
        const searchValue = e.target.value;
        setSearch(searchValue);

    }


    return (

        <div>
            <input onChange={handaleSearch} type="text" />
            {
                teams?.map(team => <Team
                    key={team.idTeam}
                    team={team}
                ></Team>)
            }
        </div>
    );
};

export default SportsTeams;