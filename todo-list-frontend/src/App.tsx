import { useEffect, useState } from "react"

type Repository = {
  full_name: string;
  description: string;
}

function App() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    {};
    })

  return <h1>todoList</h1>
}

export default App;
