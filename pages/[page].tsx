import { ApiItemsResponse, Item } from '@/common/types'
import { GetServerSideProps, NextPage } from 'next'
import { ErrorMessage } from '../components/ErrorMessage'

const PAGE_SIZE = '10'

interface PageProps {
  itemsResponse: ApiItemsResponse
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  const API_URL = process.env.API_URL
  const { page, query } = context.query
  const queryValue = query?.toString() ?? '' // set default value of "" if query is undefined or null

  const res = await fetch(API_URL + `/items?limit=${PAGE_SIZE}&offset=${page}&query=${queryValue}`)

  const itemsResponse: ApiItemsResponse = await res.json()

  return {
    props: {
      itemsResponse,
    },
  }
}

interface HomePropsI {
  itemsResponse: ApiItemsResponse
}

const Home: NextPage<HomePropsI> = ({ itemsResponse }) => {
  const Items = itemsResponse.items.map((item: Item) => {
    return (
      <div key={item.id}>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <img src={item.imageSrc} alt={item.title} />
      </div>
    )
  })

  if (itemsResponse.items.length < 1) {
    return <ErrorMessage message='Opps no items found' />
  }
  return <div>{Items}</div>
}

export default Home
