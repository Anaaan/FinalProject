// import {
//   TextInput,
//   Textarea,
//   NumberInput,
//   Button,
//   Group,
//   Box,
// } from "@mantine/core";
// import { useForm } from "@mantine/form";
// import { DatePicker } from "@mantine/dates";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { CurrencyRupee } from "tabler-icons-react";

// import { setSingleUser } from "../../Redux/userSlice";
// import { setAltModalState } from "../../Redux/helperSlice";
// import SERVER_URL from "../../utils/url";

// function AddExpense() {
//   const userId = localStorage.getItem("userId");
//   const token = localStorage.getItem("currentToken");
//   const dispatch = useDispatch();

//   const form = useForm({
//     initialValues: {
//       name: "Random expense",
//       amount: 0,
//       date: new Date(),
//       tag: "Uncategorized",
//       comments: "",
//     },

//     validate: (values) => ({
//       name: values.name === undefined ? "Name is required" : null,
//       amount: values.amount === undefined ? "Amount is required" : null,
//       date: values.date === undefined ? "Date is required" : null,
//     }),
//   });

//   return (
//     <Box sx={{ maxWidth: 300 }} mx="auto">
//       <form
//         onSubmit={form.onSubmit(async (values) => {
//           try {
//             await axios
//               .post(
//                 `${SERVER_URL}/expense/${userId}`,
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
//           dispatch(setAltModalState());
//         })}
//       >
//         <TextInput
//           required
//           label="Name"
//           placeholder="Add a name for this expense"
//           {...form.getInputProps("name")}
//         />
//         <NumberInput
//           placeholder="Amount"
//           label="Add expense amount"
//           icon={<CurrencyRupee size={16} />}
//           required
//           {...form.getInputProps("amount")}
//         />
//         <DatePicker
//           placeholder="Pick date"
//           label="Date"
//           {...form.getInputProps("date")}
//         />
//         <TextInput
//           label="Category"
//           placeholder="Add a category for this expense"
//           {...form.getInputProps("tag")}
//         />
//         <Textarea
//           label="Comments"
//           placeholder="Add additional comments"
//           {...form.getInputProps("comments")}
//         />

//         <Group position="right" mt="md">
//           <Button type="submit">Submit</Button>
//         </Group>
//       </form>
//     </Box>
//   );
// }
// export default AddExpense;
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
import { DatePicker } from "@mantine/dates";
import axios from "axios";
import { useDispatch } from "react-redux";
import { CurrencyRupee } from "tabler-icons-react";

import { setSingleUser } from "../../Redux/userSlice";
import { setAltModalState } from "../../Redux/helperSlice";
import SERVER_URL from "../../utils/url";

function AddExpense() {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("currentToken");
  const dispatch = useDispatch();

  const form = useForm({
    initialValues: {
      name: "Random expense",
      amount: 0,
      date: new Date(),
      tag: "",
      comments: "",
    },

    validate: (values) => ({
      name: values.name === undefined ? "Name is required" : null,
      amount: values.amount === undefined ? "Amount is required" : null,
      date: values.date === undefined ? "Date is required" : null,
      tag: values.tag === "" ? "Category is required" : null,
    }),
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form
        onSubmit={form.onSubmit(async (values) => {
          try {
            await axios
              .post(
                `${SERVER_URL}/expense/${userId}`,
                values
              )
              .then((res) => console.log(res));
            form.reset();
            await fetch(
              `${SERVER_URL}/users/${userId}`,
              {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
              }
            )
              .then((res) => res.json())
              .then((data) => {
                dispatch(setSingleUser(data));
                console.log(data);
              });
          } catch (error) {
            console.log(error);
          }
          dispatch(setAltModalState());
        })}
      >
        <TextInput
          required
          label="Name"
          placeholder="Add a name for this expense"
          {...form.getInputProps("name")}
        />
        <NumberInput
          placeholder="Amount"
          label="Add expense amount"
          icon={<CurrencyRupee size={16} />}
          required
          {...form.getInputProps("amount")}
        />
        <DatePicker
          placeholder="Pick date"
          label="Date"
          {...form.getInputProps("date")}
        />
     <Select
         required
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
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
export default AddExpense;
