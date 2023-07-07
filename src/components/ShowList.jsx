import ShowTodo from "./ShowTodo";

const ShowList = ({toDos}) => {
    return (
    <ol>
        <ShowTodo toDos ={toDos} />
    </ol>
    );
};

export default ShowList;