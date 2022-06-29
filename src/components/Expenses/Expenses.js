import React, { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filterChangeHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        selected={selectedYear}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          key = {expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
