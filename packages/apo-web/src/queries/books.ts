import { IBook } from './book'
import gql from 'graphql-tag'

export interface BookListData {
  books: IBook[]
}

export interface BookListVars {
  page: number
}

export const GET_BOOK_LIST = gql`
  query {
    books(page: 1) {
      id
      title
      description
      author_id
      author {
        id
        name
      }
      img
    }
  }
`
