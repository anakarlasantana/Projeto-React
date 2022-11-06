import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";


export function Post({author, publishedAt, content}) {
    const [comments, setComments] = useState ([       /* Estado (State) = váriáveis que eu quero que o componente monitore */
        'Post muito bacana!'                             /* Set = função para alterar o valor (atualiza o arrayde comentários para.. */
                                                     /*... o react saber quando alterar e apresentar ao usuário); */
        
    ]);
    // criar um novo estado, na qual essa função começa com 'set' e com a mesmo nome da função //
    const [newCommentText, setNewCommentText] = useState('') // É sempre importante começar o estado com um valor fazio //

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

       // -> setComments([1,2,3]); /* Passar o novo valor, junto com os que já estavam (imutabilidade) */
       setComments([...comments, newCommentText]) /* (...)  -> ele lê a váriavel, que nesse caso é um array */
       /* Length é o tamanho ou quantidade */
       setNewCommentText('');
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value); // Adição do valor do comentário na NewCommentTest //
        
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
                            return <p key={line.content}>{line.content}</p>;
                        } else if (line.type === 'link') {
                            return <p key={line.content}><a href="#">{line.content}</a></p>
                        }
                    })}
                </div>

                <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                    <strong>Deixe o seu feedbacks</strong>

                    <textarea 
                    name="comment" 
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    />

                    <footer>
                    <button type="submit">Publicar</button>
                    </footer>
                    
                </form>

                <div className={styles.commentList}>
                    {comments.map(comment => {
                        return <Comment key={comment} content={comment} />
                    })}
                </div>
        </article>
    );
}

