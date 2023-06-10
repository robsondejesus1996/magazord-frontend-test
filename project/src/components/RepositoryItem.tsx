interface RepositoryItemPropos{
  repository:{
    name: string;
    description: string; 
    html_url: string;
  }
}
//https://api.github.com/users/robsondejesus1996/repos

export function RepositoryItem(props: RepositoryItemPropos) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url} target="_blank">
        Acessar repositório
      </a>

    </li>
  );
}
