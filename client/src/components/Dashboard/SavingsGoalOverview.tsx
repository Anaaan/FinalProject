import { Progress, Text, Group, Badge, Paper } from "@mantine/core";
import { RootState } from "../../Redux/store";
import ExpensesFunctions from "../../stats/expenses";
import { useSelector } from "react-redux";

export function SavingsGoalOverview() {
  // Expense Data by category
  const { totalExpenseByCategoryCurrentMonth } = ExpensesFunctions();
  const expenseData: [string, number][] = Object.entries(totalExpenseByCategoryCurrentMonth) as [string, number][];

  // Budget Data from Redux Store
  const budgetData = useSelector((state: RootState) => state.user?.user?.budget) || [];

  // Prevent error if budgetData is empty
  if (!budgetData.length) {
    return (
      <Paper radius="md" withBorder p={30}>
        <Text align="center" weight={700}>
          No Budget Data Available
        </Text>
      </Paper>
    );
  }

  // Check if categories of expenses and budget are the same
  const categoryExpense = expenseData.filter(
    (item) =>
      item[0]?.toLowerCase() === budgetData[0]?.tag?.toLowerCase()
  );

  return (
    <Paper radius="md" withBorder p={30}>
      <Text align="center" weight={700}>
        {budgetData[0]?.title || "No Title"}
      </Text>
      <Text color="dimmed" align="center" size="sm">
        Budget: {budgetData[0]?.budget || 0} INR
      </Text>
      <Group position="apart" mt="xs">
        <Text size="sm" color="dimmed">
          Already spent:
        </Text>
        <Text size="sm" color="dimmed">
          {expenseData.length && categoryExpense.length
            ? Math.floor(
                (Number(categoryExpense[0][1]) / (Number(budgetData[0]?.budget) || 1)) * 100
              )
            : 0}
          %
        </Text>
      </Group>
      <Progress
        value={
          expenseData.length && categoryExpense.length
            ? Math.floor(
                (Number(categoryExpense[0][1]) / (Number(budgetData[0]?.budget) || 1)) * 100
              )
            : 0
        }
        mt={5}
      />
      <Group position="apart" mt="md">
        <Text size="sm">
          Spent: {expenseData.length && categoryExpense.length ? Number(categoryExpense[0][1]) : 0} INR
        </Text>
        <Badge size="sm">{budgetData[0]?.tag || "No Tag"}</Badge>
      </Group>
    </Paper>
  );
}
