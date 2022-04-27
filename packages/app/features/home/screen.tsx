import { Text, View, H1, P, Row, A } from 'dripsy'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import { styled, useTailwind } from "tailwindcss-react-native"

const StyledText = styled(Text)
const StyledView = styled(View)
const StyledH1 = styled(H1)
const StyledP = styled(P)
const StyledA = styled(A)

export function HomeScreen() {
  return (
    <StyledView
      tw="flex flex-1 justify-center items-center p-4"
    >
      <StyledH1 tw="font-extrabold">Welcome to Solito.</StyledH1>
      <StyledView tw="max-w-xl">
        <StyledP tw="text-center">
          Here is a basic starter to show you how you can navigate from one
          screen to another. This screen uses the same code on Next.js and React
          Native.
        </StyledP>
        <StyledP tw="text-center">
          Solito is made by{' '}
          <StyledA
            href="https://twitter.com/fernandotherojo"
            // @ts-expect-error react-native-web only types
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
            tw="text-blue-600"
          >
            Fernando Rojo
          </StyledA>
          .
        </StyledP>
      </StyledView>
      <StyledView tw="h-8" />
      <Row>
        <TextLink
          href="/user/fernando"
          textProps={{
            style: useTailwind("text-base font-bold text-blue-600"),
          }}
        >
          Regular Link
        </TextLink>
        <StyledView tw="w-8" />
        <MotiLink
          href="/user/fernando"
          animate={({ hovered, pressed }) => {
            'worklet'

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            }
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
          <StyledText
            selectable={false}
            tw="text-base text-black font-bold"
          >
            Moti Link
          </StyledText>
        </MotiLink>
      </Row>
    </StyledView>
  )
}
