import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

const comments = [
    1,
    2,
    2,
];

export function Post({author, publishedAt, content}) {
    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm 'h'",
    {locale: ptBR}
    );  

    const publishedDaterelatveToNow = formatDistanceToNow(publishedAt, 
        {locale: ptBR,
        addSuffix: true,
        }
    ); 
            /* Quando é uma função que é disparada pelo ususário, o Diego sempre usar 'handle' no nome */
    function handleCreateNewComment() {
        event.preventDefault() /* SinglePageAplcation - Para evitar o comportamento padrão do HTML de redirecionar o usuário quando clicar no submmit */
        console.log('oi');
    }

    return (
        <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <Avatar src={author.avatarUrl} />
                        <dir className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </dir>
                    </div>
                    
                    <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
                        {publishedDaterelatveToNow}
                    </time>

                </header>

                <div className={styles.content}>
                    {content.map(line => {
                        if (line.type === 'paragraph') {
                            return <p>{line.content}</p>;
                        } else if (line.type === 'link') {
                            return <p><a href="#">{line.content}</a></p>
                        }
                    })}
                </div>

                <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                    <strong>Deixe o seu feedbacks</strong>

                    <textarea placeholder="Deixe um comentário"/>
                    <footer>
                    <button type="submit">Publicar</button>
                    </footer>
                    
                </form>

                <div className={styles.commentList}>
                    {comments.map(comments => {
                        return <Comment />
                    })}
                </div>
        </article>
    );
}

