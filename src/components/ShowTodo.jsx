const ShowToDo = ({toDos}) => {

    return toDos.map((todo)=> {
        return <li key={toDos.indexOf(todo)}>{todo}</li>
    });
};

export default ShowToDo;