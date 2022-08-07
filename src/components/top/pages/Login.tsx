import { Flex, Heading, Box, Divider, Input, Stack } from "@chakra-ui/react"
import { memo, FC, useState, ChangeEvent } from "react";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { UseAuth } from "../../hooks/api/admin/useAuth";

export const Login: FC = memo(() => {
  const [userId, setUserId] = useState('');
  const { login, loading } = UseAuth();
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
  const onClickLogin = () => login(userId);
  return (
    <Flex align="center" justify="center" height="100vh" >
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">ユーザー管理アプリ</Heading>
        <Divider my={4} />
        <Stack spacing={6} py={10}>
          <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId} />
          <PrimaryButton
            disabled={userId === ""}
            loading={loading}
            onClick={onClickLogin}>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex >
  )
})