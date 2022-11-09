import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, IconButton, Image, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Props = {
    imageUrl: string;
    userName: string;
    fullName: string;
    onClick: () => void;
}

export const UserCard: FC<Props> = (props) => {
    const { imageUrl, userName, fullName, onClick } = props;

    return (
        <Box
            w="260px"
            h="260px"
            bg="white"
            borderRadius="10px"
            shadow="md"
            p={4}
            _hover={{ cursor: "pointer", opacity: "0.8" }}
            onClick={onClick}
        >
            <Stack textAlign="center">
                <Image
                    boxSize="160px"
                    src={imageUrl}
                    borderRadius="full"
                    alt={userName}
                    m="auto" />
                <Text fontSize="lg" fontWeight="bold">{userName}</Text>
                <Text fontSize="sm" color="gray">{fullName}</Text>
            </Stack>
        </Box>
    )
}

