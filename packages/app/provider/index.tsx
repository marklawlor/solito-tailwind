import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'
import { TailwindProvider } from 'tailwindcss-react-native'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <TailwindProvider>
        <Dripsy>{children}</Dripsy>
      </TailwindProvider>
    </NavigationProvider>
  )
}
