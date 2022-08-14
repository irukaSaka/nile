import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, FC, useEffect, useCallback } from "react";
import { useAllUsers } from "../../hooks/api/admin/useAllUsers";
import { useLoginUser } from "../../hooks/useLoginUser";
import { useSelectUser } from "../../hooks/useSelectUser";
import { UserCard } from "../../organisms/user/UserCard";
import { UserDetailModal } from "../../organisms/user/UserDetailModal";


export const UserManagement: FC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onSelectUser, selectUser } = useSelectUser();
  const { loginUser } = useLoginUser();
  useEffect(() => getUsers(), [getUsers]);
  const onClickUser = useCallback((id: number) => {
    onSelectUser({ id, users, onOpen });
  }, [onOpen, onSelectUser, users]);

  return (
    <>
      {loading ? (
        <Center h="100vh" >
          <Spinner />
        </Center >
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal
        isOpen={isOpen}
        onClose={onClose}
        user={selectUser}
        isAdmin={loginUser?.isAdmin} />
    </>
  )
})