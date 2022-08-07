import axios from "axios";
import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom";
import { User } from "../../../types/api/user";
import { useMessage } from "../../useMessage";

export const UseAuth = () => {
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();
  const navigation = useNavigate();
  const login = useCallback((id: string) => {
    setLoading(true);
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      if (res.data) {
        navigation('/admin/home')
        showMessage({ title: "ログインしました", status: "success" })
      } else {
        showMessage({ title: "ユーザーが見つかりません", status: "error" })
      }
    }).catch(() => showMessage({ title: "ユーザーが見つかりません", status: "error" })).finally(() => setLoading(false))
  }, [navigation, showMessage])
  return { login, loading }
}