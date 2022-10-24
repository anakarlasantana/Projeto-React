// Todo arquivo react é JSX + XML (html)//
import { useState } from 'react'
import { Header } from './components/Header';
import {Post} from "./components/Post"; // Posso adicionar qualquer nome para o componenete na hora da expostação//
import { Sidebar } from './components/Sidebar';

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes ',
        role: 'CTO @Rocketseat'
      },
      content: [
        {type: 'paragraph', content: 'Fala galeraa 👋' },
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return     evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
        {type: 'link', content: '👉 Diego.design/doctorcare'},
      ],
      publishedAt: new Date ('2022-10-24 11:19:00'),
  },  
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito ',
      role: 'Educator @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋' },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return     evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      {type: 'link', content: '👉 Diego.design/doctorcare'} ,,
    ],
    publishedAt: new Date ('2022-10-24 11:19:00'),
  },

];

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          {posts.map(posts => {
            return (
            <Post 
            author={posts.author}
            content={posts.content}
            publishedAt={posts.publishedAt}
            />
            )
          })}
        </main>
      </div> 
    </div>
    // React acusa erro quando tem um elemento abaixo do outro, sem ter um outro elemento por volta;//

  )
}


