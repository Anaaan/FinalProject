import {
  TextInput,
  Textarea,
  NumberInput,
  Button,
  Group,
  Box,
  Select,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { CurrencyRupee } from "tabler-icons-react";

import { setSingleUser } from "../../Redux/userSlice";
import { setModalState } from "../../Redux/helperSlice";
import SERVER_URL from "../../utils/url";

function AddBudget() {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("currentToken");
  const dispatch = useDispatch();

  const form = useForm({
    initialValues: {
      title: "",
      budget: undefined as number | undefined,
      tag: "",
      comments: "",
    },
    validate: (values) => ({
      title: values.title.trim() === "" ? "Name is required" : null,
      budget:
        typeof values.budget !== "number" || values.budget <= 0
          ? "Budget must be greater than 0"
          : null,
    }),
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form
        onSubmit={form.onSubmit(async (values) => {
          try {
            const res = await axios.post(`${SERVER_URL}/budget/${userId}`, {
              title: values.title,
              amount: values.budget, // ✅ map budget → amount
              tag: values.tag,
              comments: values.comments,
            });

            console.log(res.data);
            form.reset();

            const userRes = await fetch(`${SERVER_URL}/users/${userId}`, {
              method: "GET",
              headers: { Authorization: `Bearer ${token}` },
            });

            const data = await userRes.json();
            dispatch(setSingleUser(data));
            console.log(data);
            dispatch(setModalState());
          } catch (error) {
            console.error("Error adding budget:", error);
          }
        })}
      >
        <TextInput
          required
          label="Name"
          placeholder="Add a name for this budget"
          {...form.getInputProps("title")}
        />

        <NumberInput
          required
          icon={<CurrencyRupee size={16} />}
          label="Amount"
          placeholder="Enter amount"
          value={form.values.budget}
          onChange={(value) => {
            if (typeof value === "number") {
              form.setFieldValue("budget", value);
            } else {
              form.setFieldValue("budget", undefined); // 🔥 Type-safe
            }
          }}
          min={1}
          hideControls
        />

        <Select
          label="Category"
          placeholder="Select a category"
          data={[
            "Food",
            "Transport",
            "Shopping",
            "Entertainment",
            "Bills",
            "Other",
          ]}
          {...form.getInputProps("tag")}
        />

        <Textarea
          label="Comments"
          placeholder="Add additional comments"
          {...form.getInputProps("comments")}
        />

        <Group position="right" mt="md">
          <Button type="submit">Save</Button>
        </Group>
      </form>
    </Box>
  );
}

export default AddBudget;
