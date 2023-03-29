import { ApiItemsResponse, Item } from '@/common/types'
import { ErrorMessage } from '@/components/ErrorMessage'

import { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'

const PAGE_SIZE = '10'

interface PageProps {
  itemsResponse: ApiItemsResponse
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  const { API_URL } = process.env
  const { page = 0, query = '' } = context.query

  const res = await fetch(`${API_URL}/items?limit=${PAGE_SIZE}&offset=${page}&query=${query}`)

  const itemsResponse: ApiItemsResponse = await res.json()

  return {
    props: {
      itemsResponse,
    },
  }
}

interface HomeProps {
  itemsResponse: ApiItemsResponse
}

const Home: NextPage<HomeProps> = ({ itemsResponse }) => {
  const Items = itemsResponse.items.map((item: Item) => (
    <div key={item.id}>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <Image src={item.imageSrc} alt={item.title} width={300} height={300} />
    </div>
  ))

  if (!itemsResponse.items.length) {
    return <ErrorMessage message='Oops, no items found.' />
  }

  return <div>{Items}</div>
}

export default Home
