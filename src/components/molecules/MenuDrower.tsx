import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, IconButton, Input, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    isOpen: boolean;
    onClose: () => void;
}

export const MenuDrower: FC<Props> = (props) => {
    const { isOpen, onClose } = props;
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
                        onClick={() => navigate('/home')}
                    >TOP</Button>
                    <Button
                        w="100%"
                        onClick={() => navigate('/home/user_management')}
                    >ユーザー一覧</Button>
                    <Button
                        w="100%"
                        onClick={() => navigate('/home/setting')}
                    >設定</Button>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}


