import Todo from './Todo'

function TodoList({data, delFunc, complFunc}){
    return (
        <>
            {!data.length ? <h2>List is empty</h2> :
            data.map((el)=><Todo {...el} key={el.id} del={delFunc} compl={complFunc}/>)}          
        </>
    )    
}

export default TodoList