// Todo arquivo react é JSX + XML (html)//
import { useState } from 'react'
import { Header } from './components/Header';
import {Post} from "./components/Post"; // Posso adicionar qualquer nome para o componenete na hora da expostação//
import { Sidebar } from './components/Sidebar';

import styles from "./App.module.css";

import "./global.css";



export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post author= "Diego Fernander" 
          content = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores est et distinctio dignissimos necessitatibus molestiae eius explicabo incidunt tempora, sed, nesciunt inventore nihil velit nemo veniam porro debitis praesentium aspernatur!"
        />
          <Post author= "Ana Karlar" 
          content = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores est et distinctio dignissimos necessitatibus molestiae eius explicabo incidunt tempora, sed, nesciunt inventore nihil velit nemo veniam porro debitis praesentium aspernatur!"
        /> 
        </main>
      </div> 
    </div>
    // React acusa erro quando tem um elemento abaixo do outro, sem ter um outro elemento por volta;//

  )
}


