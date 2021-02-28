import styles from '../styles/components/SideBar.module.css';
import { FiAward, FiHome, FiLogOut } from "react-icons/fi";
import { useRouter } from 'next/router';

export function SideBar(){
    const { push } = useRouter();
    
    function handleLogOut(e) {
        e.preventDefault();
        push('./');
    }

    return(
        <div className={styles.sideBarContainer}>
            <img src="favicon.png" alt="logo" />
            <div className={styles.sideBarButtons}>
                
                <button type="button" className={styles.sideBarHomeButton} >
                    <FiHome />
                </button>
                <button type="button" className={styles.sideBarRankingButton} >
                    <FiAward />
                </button>
            </div>
            <footer className={styles.sideBarFooter}>
                <button type="button" onClick={handleLogOut} >
                    <FiLogOut />
                </button>
            </footer>

        </div>
    );
}


