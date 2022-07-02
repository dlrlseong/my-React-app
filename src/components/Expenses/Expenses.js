import React, { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Chart from "../Chart/Chart";
const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filterChangeHandler = (year) => {
    setSelectedYear(year);
    console.log("Expenses.js!");
    console.log(year);
  };

  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        selected={selectedYear}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
