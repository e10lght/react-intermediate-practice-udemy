import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useDisclosure, useRadio } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useCallback, useEffect, useState } from "react";
import { User } from "../../../types/api/User";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type props = {
    users: User | null;
    isOpen: boolean;
    isAdmin?: boolean;
    onClose: () => void;
}

export const UserDetailModal: FC<props> = memo((props) => {
    const { users, isOpen, onClose, isAdmin = false } = props;

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        setUsername(users?.username ?? "")
        setName(users?.name ?? "")
        setEmail(users?.email ?? "")
        setPhone(users?.phone ?? "")
    }, [users])

const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value) 
const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value) 
const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value) 
const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value) 


    const onClickUpdata = () => alert();

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            motionPreset="slideInBottom"
        >
            <ModalOverlay />
            <ModalContent pb={2}>
                <ModalHeader>
                    ユーザー詳細
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody mx={4}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>
                                名前
                            </FormLabel>
                            <Input value={username} onChange={onChangeUserName} isReadOnly={!isAdmin} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>
                                フルネーム
                            </FormLabel>
                            <Input value={name} onChange={onChangeName} isReadOnly={!isAdmin} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>
                                メールアドレス
                            </FormLabel>
                            <Input value={email} onChange={onChangeEmail} isReadOnly={!isAdmin} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>
                                電話番号
                            </FormLabel>
                            <Input value={phone} onChange={onChangePhone} isReadOnly={!isAdmin} />
                        </FormControl>
                    </Stack>
                </ModalBody>
                {isAdmin && (
                    <ModalFooter>
                        <PrimaryButton onClick={onClickUpdata}>更新</PrimaryButton>
                    </ModalFooter>
                )}

            </ModalContent>
        </Modal>

    );
})