import { Box } from "@chakra-ui/react"
import { memo, FC, ReactNode } from "react"

type Props = {
  children: ReactNode,
}


export const PrimaryCard: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <Box
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      m={10}
    >
      {children}
    </Box>
  )
})