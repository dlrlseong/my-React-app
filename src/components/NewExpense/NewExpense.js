import React, { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";
import NewExpenseInitial from "./NewExpenseInitial";

const NewExpense = (props) => {
  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };

    props.onAddExpense(expenseData);
  };
  const cancelButtonHandler = () => {
    setNewExpenseContent(
      <NewExpenseInitial onClickButton={newExpenseButtonHandler} />
    );
  };
  const newExpenseButtonHandler = () => {
    setNewExpenseContent(
      <NewExpenseForm
        onSaveExpenseData={onSaveExpenseData}
        onClickCancel={cancelButtonHandler}
      />
    );
  };

  const [newExpenseContent, setNewExpenseContent] = useState(
    <NewExpenseInitial onClickButton={newExpenseButtonHandler} />
  );

  return <div className="new-expense">{newExpenseContent}</div>;
};

export default NewExpense;
