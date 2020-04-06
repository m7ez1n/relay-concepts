import { GraphQLObjectType } from 'graphql';

// Export mutations here

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    // Using spread operator with mutations
  }),
});
