import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import { TailwindProvider } from 'tailwindcss-react-native'

export default function App() {
  return (
    <TailwindProvider>
      <Provider>
        <NativeNavigation />
      </Provider>
    </TailwindProvider>

  )
}
