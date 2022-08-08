import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react"
import { memo, FC, useEffect } from "react"
import { UseAllUsers } from "../../hooks/api/admin/useAllUsers"
import { UserCard } from "../../organisms/user/UserCard";


export const UserManagement: FC = memo(() => {
  const { getUsers, users, loading } = UseAllUsers();
  useEffect(() => getUsers(), [getUsers])
  return loading ? (
    <Center h="100vh">
      <Spinner />
    </Center>
  ) : (
    <Wrap p={{ base: 4, md: 10 }}>
      {users.map((user) => (
        <WrapItem key={user.id}>
          <UserCard
            imageUrl=""
            userName={user.username}
            fullName={user.name}
          />
        </WrapItem>
      ))}
    </Wrap>
  )
})