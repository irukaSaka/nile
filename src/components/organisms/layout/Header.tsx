/* eslint-disable*/
import { Flex, Heading, Box, useDisclosure, Link } from "@chakra-ui/react"
import { memo, FC, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { MenuIconButton } from "../../atoms/button/MenuIconButton"
import { useLoginUser } from "../../hooks/useLoginUser"
import { MenuDrawer } from "../../molecules/MenuDrawer"

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigation = useNavigate()

  const onClickHome = useCallback(() => navigation("/admin/home"), [navigation]);
  const onClickSetting = useCallback(() => navigation("/admin/setting"), [navigation]);
  const onClickUserManagement = useCallback(() => navigation("/admin/user_management"), [navigation]);
  const onClickLogout = useCallback(() => {
    navigation("/top/login");
    const { setLoginUser } = useLoginUser();
    setLoginUser(null);
  }, []);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }} onClick={onClickHome}>ユーザー管理</Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link as="span" onClick={onClickUserManagement}>一覧</Link>
          </Box>
          <Box pr={4}>
            <Link as="span" onClick={onClickSetting}>設定</Link>
          </Box>
          <Box pr={4}>
            <Link as="span" onClick={onClickLogout}>ログアウト</Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickSetting={onClickSetting}
        onClickUserManagement={onClickUserManagement} />
    </>
  )
})