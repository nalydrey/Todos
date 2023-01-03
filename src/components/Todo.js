import { RiTodoFill, RiDeleteBin2Line} from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'


import styles from './Todo.module.scss'

function Todo(props){ 

  let {text, id, del, isComp, compl} = props
  
  
    
    return (
        <div className={`${styles.todo} ${isComp ? styles.todoComplete : ''}`}>
            <RiTodoFill className={styles.todoIcon}/>
            <h4>{text}</h4> 
            <RiDeleteBin2Line className={styles.deleteTodo} onClick={() => del(id)}/>
            <FaCheck className={styles.checkTodo} onClick={() => compl(id)}/>
        </div>
    ) 
}

export default Todo