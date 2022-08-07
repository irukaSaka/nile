import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react"
import { memo, FC, useEffect } from "react"
import { UseAllUsers } from "../../hooks/api/admin/useAllUsers"

export const UserManagement: FC = memo(() => {
  const { getUsers, users, loading } = UseAllUsers();
  useEffect(() => getUsers(), [])
  return (
    <>
      {
        loading ?
          (
            <Center>
              <Spinner />
            </Center>
          ) :
          (
            <Wrap>
              <WrapItem />
            </Wrap>
          )
      }
    </>
  )
})