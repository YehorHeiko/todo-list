import styles from './Buttons.module.css'



function Buttons() {
    return ( 
        <div >
            <button className={styles.buttons}>All</button>
            <button className={styles.buttons}>Active</button>
            <button className={styles.buttons}>Completed</button>
        </div>
     );
}

export default Buttons;