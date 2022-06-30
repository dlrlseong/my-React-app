import "./NewExpenseInitial.css";

const NewExpenseInitial = (props) => {
  const addButtonHandler = () => {
    props.onClickButton();
  };
  return <button onClick={addButtonHandler}>Add New Expense</button>;
};

export default NewExpenseInitial;
