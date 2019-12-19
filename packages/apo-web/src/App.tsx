import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import { MainPage } from './pages/MainPage'
import { BooksPage } from './pages/BooksPage'
import { AuthorsPage } from './pages/AuthorsPage'

const client = new ApolloClient({ uri: 'http://localhost:4000' })

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/books">
          <BooksPage />
        </Route>
        <Route exact path="/authors">
          <AuthorsPage />
        </Route>
      </Router>
    </ApolloProvider>
  )
}

export default App
