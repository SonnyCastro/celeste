import { withApollo } from "next-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://blooming-plateau-28061.herokuapp.com";

const apolloClient = new ApolloClient({
  uri: `${API_URL}/graphql`,
  cache: new InMemoryCache(),
});

export default withApollo(apolloClient);
