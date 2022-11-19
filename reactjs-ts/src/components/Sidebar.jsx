import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />

            <div className={styles.profile}>
                <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQE0WAHblFLKtw/profile-displayphoto-shrink_800_800/0/1661914682387?e=1670457600&v=beta&t=m83P7GI7uBb3h_JlPhxzznD3bNmrpb0f-sl90dINfqw"
                />
                <strong>Ana Karla Santana</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    );
}