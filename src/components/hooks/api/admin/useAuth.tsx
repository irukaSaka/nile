import axios from "axios";
import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom";
import { User } from "../../../types/api/user";
import { useLoginUser } from "../../useLoginUser";
import { useMessage } from "../../useMessage";

export const UseAuth = () => {
  const [loading, setLoading] = useState(false);
  const { setLoginUser } = useLoginUser();
  const { showMessage } = useMessage();
  const navigation = useNavigate();
  const login = useCallback((id: string) => {
    setLoading(true);
    console.log(id)
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      console.log(res)
      if (res.data) {
        const isAdmin = res.data.id === 10;
        console.log(isAdmin)
        setLoginUser({ ...res.data, isAdmin });
        navigation('/admin/home')
        showMessage({ title: "ログインしました", status: "success" })
      } else {
        showMessage({ title: "ユーザーが見つかりません", status: "error" })
      }
    }).catch(() => showMessage({ title: "ユーザーが見つかりません", status: "error" })).finally(() => setLoading(false))
  }, [navigation, showMessage, setLoginUser])
  return { login, loading }
}