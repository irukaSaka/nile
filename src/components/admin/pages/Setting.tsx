import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Center,
  Spinner,
  useDisclosure,
} from '@chakra-ui/react'
import { memo, FC, useCallback, useEffect } from "react"
import { PrimaryCard } from '../../atoms/card/PrimaryCard'
import { useAllUsers } from '../../hooks/api/admin/useAllUsers'
import { useLoginUser } from '../../hooks/useLoginUser'
import { useSelectUser } from '../../hooks/useSelectUser'
import { UserDetailModal } from '../../organisms/user/UserDetailModal'

export const Setting: FC = memo(() => {
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
        <PrimaryCard>
          <TableContainer>
            <Table
              variant='striped'
              colorScheme='gray'>
              <Thead>
                <Tr>
                  <Th>名前</Th>
                  <Th>フルネーム</Th>
                  <Th>電話番号</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users.map((user) => (
                  <Tr
                    _hover={{ opacity: 0.8, cursor: "pointer" }}
                    onClick={() => onClickUser(user.id)}>
                    <Td>{user.name}</Td>
                    <Td>{user.username}</Td>
                    <Td>{user.phone}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </PrimaryCard>
      )}
      <UserDetailModal
        isOpen={isOpen}
        onClose={onClose}
        user={selectUser}
        isAdmin={loginUser?.isAdmin} />
    </>
  )
})