import { useRouter } from 'next/router';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUPModal.module.css';

export function LevelUPModal(){
    const {level, closeLevelUPModal} = useContext(ChallengesContext);

    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <div className={styles.content}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo nível</p>

                <button type="button" onClick={closeLevelUPModal}>
                    <img src="icons/close.svg" alt="Fechar"/>
                </button>
                </div>
                <button type="button" className={styles.buttonTwiter} >
                    <p>Compartilhar no twitter</p>
                    <img src="icons/twitter.svg" alt="Fechar"/>
                </button>
            </div>
        </div>
    );
}