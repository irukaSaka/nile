import axios from "axios";
import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom";
import { User } from "../../types/api/user";


export const UseAuth = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();
  const login = useCallback((id: string) => {
    setLoading(true);
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      if (res.data) {
        navigation('/admin/home')
      } else {
        alert("ユーザーが見つかりません")
      }
    }).catch(() => alert("存在しません")).finally(() => setLoading(false))
  }, [navigation])
  return { login, loading }
}