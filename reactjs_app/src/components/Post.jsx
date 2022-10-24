import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({author, publishedAt}) {
    const publishedDateFormated = new Intl.DateTimeFormat('pt-Br', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
    }). format(publishedAt)
    return(
        <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <Avatar src={author.avatarUrl} />
                        <dir className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </dir>
                    </div>
                    
                    <time title="10 de Outubro às 14:58h" dateTime="200-10-10 14:58:36">{publishedDateFormated}</time>

                </header>

                <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href="">👉 Diego.design/doctorcare</a></p>
               
                <p><a href="">#novoprojeto</a>{' '}        
                <a href="">#nlw</a>{' '}
                <a href="">#rocketseat</a>{' '}
                </p>
                </div>

                <form className={styles.commentForm}>
                    <strong>Deixe o seu feedbacks</strong>

                    <textarea placeholder="Deixe um comentário"/>
                    <footer>
                    <button type="submit">Publicar</button>
                    </footer>
                    
                </form>

                <div className={styles.commentList}>
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
        </article>
    )
}

