// import {
//   TextInput,
//   Textarea,
//   NumberInput,
//   Button,
//   Group,
//   Box,
// } from "@mantine/core";
// import { useForm } from "@mantine/form";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { CurrencyRupee } from "tabler-icons-react";

// import { setSingleUser } from "../../Redux/userSlice";
// import { setModalState } from "../../Redux/helperSlice";
// import SERVER_URL from "../../utils/url";

// function AddBudget() {
//   const userId = localStorage.getItem("userId");
//   const token = localStorage.getItem("currentToken");
//   const dispatch = useDispatch();

//   const form = useForm({
//     initialValues: {
//       title: "Random budget",
//       budget: 0,
//       tag: "Uncategorized",
//       comments: "",
//     },
//     validate: (values) => ({
//       name: values.title === undefined ? "Name is required" : null,
//       amount: values.budget === undefined ? "Budget is required" : null,
//     }),
//   });

//   return (
//     <Box sx={{ maxWidth: 300 }} mx="auto">
//       <form
//         onSubmit={form.onSubmit(async (values) => {
//           try {
//             await axios
//               .post(
//                 `${SERVER_URL}/budget/${userId}`,
//                 values
//               )
//               .then((res) => console.log(res));
//             form.reset();
//             await fetch(
//               `${SERVER_URL}/users/${userId}`,
//               {
//                 method: "GET",
//                 headers: { Authorization: `Bearer ${token}` },
//               }
//             )
//               .then((res) => res.json())
//               .then((data) => {
//                 dispatch(setSingleUser(data));
//                 console.log(data);
//               });
//           } catch (error) {
//             console.log(error);
//           }
//           dispatch(setModalState());
//         })}
//       >
//         <TextInput
//           required
//           label="Name"
//           placeholder="Add a name for this budget"
//           {...form.getInputProps("title")}
//         />
//         <NumberInput
//           placeholder="Amount"
//           label="Set budget amount"
//           icon={<CurrencyRupee size={16} />}
//           required
//           {...form.getInputProps("budget")}
//         />
//         <TextInput
//           label="Category"
//           placeholder="Add a category for this budget"
//           {...form.getInputProps("tag")}
//         />
//         <Textarea
//           label="Comments"
//           placeholder="Add additional comments"
//           {...form.getInputProps("comments")}
//         />

//         <Group position="right" mt="md">
//           <Button type="submit">Save</Button>
//         </Group>
//       </form>
//     </Box>
//   );
// }
// export default AddBudget;
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
      budget: 0,
      tag: "",
      comments: "",
    },
    validate: (values) => ({
      title: values.title.trim() === "" ? "Name is required" : null,
      budget: values.budget <= 0 ? "Budget must be greater than 0" : null,
    }),
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form
        onSubmit={form.onSubmit(async (values) => {
          try {
            const res = await axios.post(`${SERVER_URL}/budget/${userId}`, {
              ...values,
              budget: Number(values.budget), // Convert to number before sending
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
          value={form.values.budget} // Explicitly bind the value
          onChange={(value) => form.setFieldValue("budget", Number(value) || 0)} // Convert to Number
          min={1} // Prevent negative values
          hideControls
        />

        <Select
          label="Category"
          placeholder="Select a category"
          data={["Food", "Transport", "Shopping", "Entertainment", "Bills", "Other"]}
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
