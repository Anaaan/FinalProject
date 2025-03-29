import {
  Progress,
  Text,
  Group,
  Badge,
  Paper,
  Title,
  SimpleGrid,
  Modal,
} from "@mantine/core";
import { CurrencyRupee, Edit } from "tabler-icons-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "../../Redux/store";
import { setAltModalState } from "../../Redux/helperSlice";
import EditBudget from "./EditBudget";
import { BudgetDataProps } from "../../types/types";
import ExpensesFunctions from "../../stats/expenses";

export function BudgetOverview() {
  const dispatch = useDispatch();

  // Expense Data by category
  const { totalExpenseByCategoryCurrentMonth } = ExpensesFunctions();
  
  // Convert expense data into a Map for easier access
  const expenseMap = new Map(Object.entries(totalExpenseByCategoryCurrentMonth));

  // State for the EditModal State
  const altModalState = useSelector(
    (state: RootState) => state.helper.altModalState
  );

  // State for the Edit Expense Modal
  const [budgetDetails, setBudgetDetails] = useState<BudgetDataProps | null>(null);

  // Budget Data from Redux Store
  const budgetData = useSelector((state: RootState) => state.user.user.budget) || [];

  const stats = budgetData.map((stat: BudgetDataProps) => {
    // Ensure categoryExpense has valid data before accessing index [1]
    const spentAmount = Number(expenseMap.get(stat.tag || "") || 0);
    const budgetAmount = Number(stat.budget) || 1;

    return (
      <Paper radius="md" p={30} withBorder shadow="md" key={stat._id}>
        <Title align="center" mt="xs" order={4}>
          {stat.title || "Untitled"}
        </Title>
        <Text color="indigo" align="center" size="sm">
          Budget: {budgetAmount}
          <CurrencyRupee size={16} strokeWidth={1.5} className="currency-icon" />{" "}
        </Text>
        <Group position="apart" mt="xs">
          <Text size="sm" color="dimmed">
            Already spent: {Math.floor((spentAmount / budgetAmount) * 100)}%
          </Text>
        </Group>
        <Progress value={Math.floor((spentAmount / budgetAmount) * 100)} mt={5} />
        <Group position="apart" mt={20} mb={20}>
          <Text size="sm" color="dimmed">
            Spent: {spentAmount} of {budgetAmount}
            <CurrencyRupee size={16} strokeWidth={1.5} className="currency-icon" />
          </Text>
          <Text size="sm" color="dimmed">
            Left: {budgetAmount - spentAmount}
            <CurrencyRupee size={16} strokeWidth={1.5} className="currency-icon" />
          </Text>
          {stat.tag ? <Badge size="md"> {stat.tag} </Badge> : null}
        </Group>
        <Link to={""} className="edit-icon">
          <Edit
            size={18}
            onClick={() => {
              dispatch(setAltModalState());
              setBudgetDetails(stat);
            }}
          />
        </Link>
      </Paper>
    );
  });

  return (
    <div>
      <Title align="center" order={1} mb={40}>
        Budget Planner Overview
      </Title>
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {stats}
      </SimpleGrid>
      <Modal
        opened={altModalState}
        onClose={() => dispatch(setAltModalState())}
        padding="md"
        size="lg"
      >
        {budgetDetails && <EditBudget {...budgetDetails} />}
      </Modal>
    </div>
  );
}
