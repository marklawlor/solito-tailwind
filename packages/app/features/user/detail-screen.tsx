import { View, Text } from 'react-native'
import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { styled } from 'tailwindcss-react-native'

const { useParam } = createParam<{ id: string }>()

const StyledView = styled(View)
const StyledText = styled(Text)

export function UserDetailScreen() {
  const [id] = useParam('id')

  return (
    <StyledView tw="flex-1 justify-center items-center">
      <StyledText
        tw="align-center mb-sm font-bold"
      >{`User ID: ${id}`}</StyledText>

      <TextLink href="/">👈 Go Home</TextLink>
    </StyledView>
  )
}
