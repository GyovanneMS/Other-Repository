import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from 'react';
import '../styles/repositories.css';



const repositoryName = 'unformHahaha';

//'https://github.com/orgs/rock'

export function RepositoryList() {

    const [repositories, setRepositories] = useState([]);
    useEffect(()=> {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    },[]);
    //Não deixe sem o segundo parametro

    console.log(repositories)

    return (

        <section className="repository-list" id="">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    )
}