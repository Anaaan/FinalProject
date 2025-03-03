import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";

import { setSingleUser } from "../Redux/userSlice";
import { RootState } from "../Redux/store";
import SERVER_URL from "../utils/url";

const useGetSingleUserData = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.user.username);
  const token = localStorage.getItem("currentToken");
  useEffect(() => {
    Axios.get(
      `${SERVER_URL}/user/${currentUser}}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((res) => {
      // @ts-ignore
      dispatch(setSingleUser(res.data));
    });
  }, [dispatch, currentUser, token]);
};

export default useGetSingleUserData;
