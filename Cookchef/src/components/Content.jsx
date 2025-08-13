import styles from "./Content.module.scss";

function Content(){
    return <div className='flex-fill container'>
        <h1 className="my-30">Decouvrez nos nouvelles recettes</h1>
        <div className={`card p-20 ${styles.contentCard}`}> 
            <div className={styles.grid}>
                <div className={styles.elem}>Element</div>
                <div className={styles.elem}>Element</div>
                <div className={styles.elem}>Element</div>
                <div className={styles.elem}>Element</div>
                <div className={styles.elem}>Element</div>

            </div>
        </div>
        
    </div>
}

export default Content;