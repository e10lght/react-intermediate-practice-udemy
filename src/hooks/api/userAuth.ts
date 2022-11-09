import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/api/User";
import axios from "axios";
import { useMessage } from "../useMessage";

export const useAuth = () => {
    const navigate = useNavigate();
    // const [loading, setLoading]: [boolean,
    //     React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(false);
    const [loading, setLoading] = useState(false); 

    const { showMessage } = useMessage();

    const login = useCallback((id: string) => {
        setLoading(true);

        axios
            .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                if (res.data) {
                    showMessage({ title: "ログインしました", status: "success" })
                    navigate("/home");
                } else {
                    showMessage({ title: "ユーザが見つかりません", status: "error" })
                }
            })
            .catch(() => showMessage({ title: "ログインできません", status: "error" })
            )
            .finally(() => setLoading(false))
    }, []);
    return { login, loading }
}
