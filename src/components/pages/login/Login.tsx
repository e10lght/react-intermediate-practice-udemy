import { Divider, Flex, Heading, Box, Input, Button, Stack, layout } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useState } from "react";
import { useAuth } from "../../../hooks/api/userAuth";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

export const Login: FC = memo(() => {
    const { login, loading } = useAuth();
    // const { userId, setUserId } = useState("");
    const [userId, setUserId]: [string,
        React.Dispatch<React.SetStateAction<string>>] = useState<string>("");


    const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
        setUserId(e.target.value);
    }
    const onClickLogin = () => {
        login(userId);
    }

    return (
        <Flex align="center" justify="center" height="100vh">
            <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
                <Heading as="h1" size="lg" textAlign="center">ユーザ管理アプリ</Heading>
                <Divider my={4} />
                <Stack spacing={6} py={4} px={10}>
                    <Input placeholder="ユーザID" value={userId} onChange={onChangeUserId} />
                    <PrimaryButton
                        disabled={userId === ""}
                        loading={loading}
                        onClick={onClickLogin}
                    >ログイン</PrimaryButton>
                </Stack>
            </Box>
        </Flex>
    )
})