import { ApolloClient, InMemoryCache } from "@apollo/client";

  const client = new ApolloClient({
    uri: 'https://movieql2.vercel.app/',
    cache: new InMemoryCache({
      typePolicies: {
        Movie: {
          fields: {
            isLiked: {
              merge(existing, incoming){
                if(existing){
                return existing;
                }else{
                return incoming;
                }
              }
            }
          }
        }
      }
    }),
    resolvers: {
      Movie: {
        isLiked: () => false
      },
      Mutation: {
        toggleLike: (_, { id }, { cache }) => {
          cache.modify({
            id: `Movie:${id}`,
            fields: {
              isLiked: (isLiked) => !isLiked,
            },
          })
        }
      }
    }
  });

  export default client;