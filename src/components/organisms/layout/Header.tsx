import { Flex, Heading, Box, IconButton } from "@chakra-ui/react"
import { memo, FC } from "react"
import { Link } from "react-router-dom"
import { HamburgerIcon } from "@chakra-ui/icons"

export const Header: FC = memo(() => (
  <Flex
    as="nav"
    bg="teal.500"
    color="gray.50"
    align="center"
    justify="space-between"
    padding={{ base: 3, md: 5 }}
  >
    <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
      <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>クラウドPBX</Heading>
    </Flex>
    <Flex
      align="center"
      fontSize="sm"
      flexGrow={2}
      display={{ base: "none", md: "flex" }}
    >
      <Box pr={4}>
        <Link to="/user">事業所一覧</Link>
      </Box>
      <Box pr={4}>
        <Link to="/user">設定</Link>
      </Box>
      <Box pr={4}>
        <Link to="/cache">キャッシュ</Link>
      </Box>
    </Flex>
    <IconButton aria-label="メニューボタン" icon={<HamburgerIcon />} size="sm" variant="unstyled" display={{ base: "block", md: "none" }} />
  </Flex>
))