import { useState } from 'react'
import { Tweet } from './Tweet'
//import './App.css'; 

function App() {
  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4',
  ]) //cria uma variável que é monitorada pelo componente, quando essa variável muda de valor o componente é remontado e renderizado com as novas informações. UseState retorna 2 itens em um array = a variável e uma função para atualizar a variável

  function createTweet() {
    setTweets([...tweets, 'Tweet 5']); //copia os tweets que já tinha na variável e adiciona novo com a função de atualizar a variável
  }
  return (
    <div>
    <h1>Oi mundo</h1>
      <Tweet text='AFF' />
      <Tweet text='xD' />
      <Tweet text='¬¬' numero={5} />
      {tweets.map(tweet => {
        return <Tweet text={tweet } />
      })}
      <button onClick={createTweet}
        style={{ //css in js
        backgroundColor: 'orange'
      }}>Adicionar Tweet</button>
      </div>
  )
}

export default App
