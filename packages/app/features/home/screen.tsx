import { View, Text } from 'react-native'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'

export function HomeScreen() {
  return (
    <View
      className="flex flex-1 justify-center items-center p-[16px]"
    >
      <Text accessibilityRole="header" aria-level="1" className="font-extrabold text-3xl my-[0.67em]">Welcome to Solito!</Text>
      <View className="max-w-[600px]">
        <Text className="text-center text-base my-[1em]">
          Here is a basic starter to show you how you can navigate from one
          screen to another. This screen uses the same code on Next.js and React
          Native.
        </Text>
        <Text className="text-center text-base my-[1em]">
          Solito is made by{' '}
          <Text
            href="https://twitter.com/fernandotherojo"
            // @ts-expect-error react-native-web only types
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
          >
            Fernando Rojo
          </Text>
          .
        </Text>
      </View>
      <View className="h-[32px]" />
      <View className="flex flex-row">
        <TextLink
          className="text-blue-500"
          href="/user/fernando"
        >
          Regular Link
        </TextLink>
        <View  />
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
          <Text
            selectable={false}
            className="text-base text-black font-bold"
          >
            Moti Link
          </Text>
        </MotiLink>
      </View>
    </View>
  )
}
