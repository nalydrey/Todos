import {TiDeleteOutline} from 'react-icons/ti'
import {BiListMinus} from 'react-icons/bi'
import Button from '../UI/Button';
import styles from './ControlPanel.module.scss'


function ControlPanel({deleteCompl, deleteAll}){
    return(
        <div className={styles.controlPanel}>
            <Button onClick={deleteAll}>
                <TiDeleteOutline className={styles.delAll}/>
            </Button>
            <Button onClick={deleteCompl}>
                <BiListMinus className={styles.delSel}/>
            </Button>
        </div>
    )
}

export default ControlPanel