import React from 'react';
import { NavLink } from 'react-router-dom';
import './Repo.less';

const Repo = ({ repo }) => {
    return (
        <div className='repo' >
            <div className='repo-header'>
                <div className='repo-header-name'><NavLink to={`/card/${repo.owner.login}/${repo.name}`}><b>Name: </b> {repo.name}</NavLink></div>
                <div className='repo-header-stars'><b>Stars: </b> {repo.stargazers_count}</div>
            </div>
            <div className='repo-last-commit'><b>Last update: </b> {repo.updated_at}</div>
            <a href={repo.html_url}>Link on the repository</a>
        </div>
    );
};

export default Repo;