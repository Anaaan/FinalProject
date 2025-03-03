import { useEffect } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../Redux/userSlice";
import SERVER_URL from "../utils/url";

const useGetUserData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    Axios.get(
      `${SERVER_URL}/users`,
      {}
    ).then((res) => {
      // @ts-ignore
      dispatch(getAllUsers(res.data));
    });
  }, [dispatch]);
};

export default useGetUserData;
