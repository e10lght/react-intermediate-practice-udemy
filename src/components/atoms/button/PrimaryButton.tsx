import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, IconButton, useDisclosure } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Props = {
    children: ReactNode;
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;
}

export const PrimaryButton: FC<Props> = (props) => {
    const { children, onClick, disabled = false, loading = false } = props;

    return (
        <Button
            bg="teal.400"
            color="white"
            _hover={{ opacity: 0.8 }}
            onClick={onClick}
            disabled={disabled || loading}
            isLoading={loading}
        >
            {children}
        </Button>
    )
}


