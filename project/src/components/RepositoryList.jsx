import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'


export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository="unform2"/>
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}
