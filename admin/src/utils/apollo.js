import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloLink } from "apollo-link"
import { createUploadLink } from 'apollo-upload-client'
import { setContext } from '@apollo/client/link/context'
import { AUTH_TOKEN } from './constants'

const uploadLink = createUploadLink({
    uri: 'http://192.168.31.212:8000',
    credentials: 'same-origin'
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem(AUTH_TOKEN);
    console.log(token)
    // console.log('Gopstop')
    // alert(token)
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            "Authorization": token ? `${token}` : "",
        }
    }
});

const client = new ApolloClient({
    link: ApolloLink.from([authLink, uploadLink]),
    cache: new InMemoryCache(),
    // defaultOptions: {
    //   watchQuery: {
    //     fetchPolicy: 'cache-and-network',
    //   },
    // }
  });
  
  export default client