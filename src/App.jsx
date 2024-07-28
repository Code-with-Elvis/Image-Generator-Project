import { useGlobalContext } from './context/AppContext'
import Photos from './Photos'
import SearchForm from './SearchForm'

const App = () => {
  const { name } = useGlobalContext()
  return (
    <main className="px-4">
      <SearchForm />
      <Photos />
    </main>
  )
}
export default App
