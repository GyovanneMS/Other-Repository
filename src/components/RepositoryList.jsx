import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from 'react';
import '../styles/repositories.css';



const repositoryName = 'unformHahaha';


const repository = {
    name: 'kkk',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

//'https://github.com/orgs/rock'

export function RepositoryList() {

    const [repositories, setRepositories] = useState([]);
    useEffect(()=> {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    },[repositories]);
    //Não deixe sem o segundo parametro

    console.log(repositories)

    return (

        <section className="repository-list" id="">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem 
                    repository = {repository} 
                    />
                <RepositoryItem 
                    repository = {repository} 
                    />
                <RepositoryItem 
                    repository = {repository} 
                    />
                <RepositoryItem 
                    repository = {repository} 
                    />
            </ul>
        </section>
    )
}