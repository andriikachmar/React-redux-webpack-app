import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getContributors, getCurrentRepo } from '../actions/repos';

const Card = (props) => {
    const { username, reponame } = useParams()
    const [repo, setRepo] = useState({ owner: {} })
    const [contributors, setContributors] = useState([])
    useEffect(() => {
        getCurrentRepo(username, reponame, setRepo)
        getContributors(username, reponame, setContributors)
    }, [])

    const style = {
        background: '#fff',
        padding: '15px',
        borderRadius: '5px'
    }

    return (
        <div style={style}>
            <button onClick={() => props.history.goBack()}>Go back</button>
            <div>
                <img src={repo.owner.avatar_url} alt='' />
                <div className='name'><b>Name: </b>{repo.name}</div>
                <div className='start'><b>Stars: </b>{repo.stargazers_count}</div>
                <div>
                    <b>Top 10 contributors:</b>
                    {
                        contributors.map((contributor, index) => <div key={index}>{index + 1}. {contributor.login}</div>)
                    }
                </div>                
            </div>
        </div>
    );
};

export default Card;