import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from 'phosphor-react'
import style from './Comment.module.css'


export function Comment({ content}) {
    return(
        <div className={style.comment}>
            <Avatar src="https://i.pinimg.com/236x/25/39/2b/25392bc6f4360af33b187e9b6ce16dd1.jpg" alt="" />
            
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Devon Shimit</strong>
                            <time title="10 de Outubro às 14:58h" dateTime="200-10-10 14:58:36">Cerca de 2h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>       
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                   <button>
                    <ThumbsUp /> 
                    Aplaudir 
                    <span>20</span>
                   </button>
                </footer>
            </div>
        </div>
    )
}