import { useState } from "react"
import styles from './TodoForm.module.scss'

function TodoForm(props){  
    const [text, setText] = useState('')
   
    const addData = (e) => {
        e.preventDefault()
        if(text){
            props.func(text)
            setText('')
        }  
        } 

    return(
        <div className={styles.formTodo}>
            <form onSubmit={addData}>
                <input type='text' placeholder='Add New Todo' value={text} onChange={(e)=>{setText(e.target.value)}}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default TodoForm