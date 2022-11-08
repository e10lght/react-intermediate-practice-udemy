import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, IconButton, Input, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onClickHome: () => void;
    onClickUserManagement: () => void;
    onClickSetting: () => void;
}

export const MenuDrower: FC<Props> = (props) => {
    const { isOpen, onClose, onClickHome, onClickUserManagement, onClickSetting } = props;
    const navigate = useNavigate();

    return (

        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            size="xs"
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>
                <DrawerBody p={0} bg="gray.100">
                    <Input placeholder='Type here...' />
                    <Button
                        w="100%"
                        onClick={() => {
                            onClickHome()
                            onClose()
                        }}
                    >TOP</Button>
                    <Button
                        w="100%"
                        onClick={() => {
                            onClickUserManagement()
                            onClose()
                        }}
                    >ユーザー一覧</Button>
                    <Button
                        w="100%"
                        onClick={() => {
                            onClickSetting()
                            onClose()
                        }}
                    >設定</Button>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}


