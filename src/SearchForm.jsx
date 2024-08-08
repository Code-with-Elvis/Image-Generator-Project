import { useState } from 'react'
import { useGlobalContext } from './context/AppContext'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()

  let [value, setValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setSearchTerm(value)
  }
  return (
    <form
      className="mt-24 w-[400px] relative mx-auto max-[500px]:w-full"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="search"
        placeholder="Monkey"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full border-[1.5px] border-green-600 h-10 focus:border-green-800 outline-none pl-4 pr-[140px] max-[500px]:pr-[100px] placeholder:text-gray-500"
      />
      <button
        className=" absolute right-[1px] -translate-y-1/2 top-1/2 px-4 h-[38px] bg-green-600 text-white font-medium text-sm disabled:cursor-not-allowed"
        disabled={value === ''}
      >
        Search <span className="max-[500px]:hidden">Image</span>
      </button>
    </form>
  )
}
export default SearchForm
