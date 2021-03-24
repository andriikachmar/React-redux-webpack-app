import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../../reducers/reposReducer'
import { getRepos } from '../../actions/repos'
import './Main.less'
import Repo from './Repo'

const Main = () => {    
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    const currentPage = useSelector(state => state.repos.currentPage)
    const perPage = useSelector(state => state.repos.perPage)    
    const [searchValue, setSearchValue] = useState('')
    
    const pages = [1,2,3,4,5]
    
    useEffect(() => {
        dispatch(getRepos(searchValue, currentPage, perPage))
    }, [currentPage])

    function searchHandler() {
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchValue, currentPage, perPage))
    }


    return (
        
        <div className='container'>
            <h1>Github Repositories</h1>
            <div className='search'>
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className='search-input' placeholder='Enter repo name' type='text' />
                <button onClick={() => searchHandler()} className='search-btn'>Search</button>
            </div>
            {
                isFetching === false
                    ?
                    repos.map(repo =>
                        <Repo key={repo.id} repo={repo} />
                    )
                    :
                    <div className='lds-ellipsis-wrap'><div className='lds-ellipsis'><div></div><div></div><div></div><div></div></div></div>

            }
            <div className='pages'>
                {pages.map((page, index) =>
                    <span
                        key={index}
                        className={currentPage == page ? 'current-page' : 'page'}
                        onClick={() => dispatch(setCurrentPage(page))}>
                        {page}
                    </span>
                )}
            </div>
        </div>
    )
}

export default Main