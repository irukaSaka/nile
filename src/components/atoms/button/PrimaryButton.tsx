import { Button } from "@chakra-ui/react"
import { memo, FC, ReactNode } from "react"

type Props = {
  children: ReactNode,
  onClick: () => void,
  loading?: boolean,
  disabled?: boolean
}

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, onClick, loading = false, disabled = false } = props
  return (
    <Button
      bg="teal.400"
      color="white"
      onClick={onClick}
      isLoading={loading}
      disabled={loading || disabled}
      _hover={{ opacity: 0.8 }}
    >
      {children}
    </Button>
  )
})