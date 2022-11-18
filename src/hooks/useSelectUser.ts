import { useCallback, useState } from "react";
import { User } from "../types/api/User";

type Props = {
    id: number;
    users: Array<User>;
}

export const useSelectUser = () => {
    const [selectedUser, setSelectUser] = useState<User | null>(null)
    const onSelectUser = useCallback((props: Props) => {
        const {id , users} = props;
        const targetUser = users.find((user) => user.id === id);
        setSelectUser(targetUser!);
    }, [])
    
    return{selectedUser, onSelectUser};
}