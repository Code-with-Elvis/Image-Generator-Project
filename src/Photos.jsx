import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useGlobalContext } from './context/AppContext'
import './SkeletonLoader.css'

const Photos = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext()
  let url = `https://api.unsplash.com/search/photos/?client_id=${
    import.meta.env.VITE_API_KEY
  }&query=${searchTerm}`

  const { data, isLoading, isError } = useQuery({
    queryKey: ['photos', searchTerm],
    queryFn: async () => {
      let { data } = await axios.get(url)
      return data.results
    },
  })

  if (isLoading) {
    return (
      <section className=" mt-10 grid gap-2 grid-cols-3 max-[500px]:grid-cols-2">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="skeleton skeleton-card"></div>
        ))}
      </section>
    )
  }
  if (isError) {
    return (
      <div className="text-center mt-10 font-medium text-red-500">
        Error Fetching Data
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className="text-center mt-10 font-medium text-yellow-600">
        No image found 😥
      </div>
    )
  }

  return (
    <section className="mt-10 max-w-[900px] mx-auto pb-10 columns-3 gap-2 max-[500px]:columns-2">
      {data?.map(({ urls, description, id }) => (
        <div key={id}>
          <img
            src={urls?.regular}
            alt={description}
            className="max-w-full mb-2"
          />
        </div>
      ))}
    </section>
  )
}
export default Photos
