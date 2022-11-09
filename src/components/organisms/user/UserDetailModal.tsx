import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, useDisclosure } from "@chakra-ui/react";
import { FC, memo, useCallback } from "react";

type props = {
    isOpen: boolean;
    onClose: ()=> void;
}

export const UserDetailModal: FC<props> = memo((props) => {
    const {isOpen, onClose} = props;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            motionPreset="slideInBottom"
        >
            <ModalOverlay />
            <ModalContent pb={6}>
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
                            <Input value="あああ" isReadOnly />
                        </FormControl>
                        <FormControl>
                            <FormLabel>
                                フルネーム
                            </FormLabel>
                            <Input value="あああ" isReadOnly />
                        </FormControl>
                        <FormControl>
                            <FormLabel>
                                メールアドレス
                            </FormLabel>
                            <Input value="あああ" isReadOnly />
                        </FormControl>
                        <FormControl>
                            <FormLabel>
                                電話番号
                            </FormLabel>
                            <Input value="あああ" isReadOnly />
                        </FormControl>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>

    );
})