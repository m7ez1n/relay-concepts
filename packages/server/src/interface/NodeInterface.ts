import { fromGlobalId } from 'graphql-relay';

import { GraphQLContext } from '../types';

import { nodeDefinitions } from './node';

const { nodeField, nodesField, nodeInterface } = nodeDefinitions(
  // A method that maps from a global id to an object
  async (globalId, context: GraphQLContext) => {
    const { id, type } = fromGlobalId(globalId);

    // Condition return loader
    // if (type === 'User') {
    //   return UserLoader.load(context, id);
    // }

    // it should not get here
    return null;
  },
  // A method that maps from an object to a type
  (obj) => {
    // Condition return type
    // if (obj instanceof User) {
    //   return UserType;
    // }

    // it should not get here
    return null;
  },
);

export const NodeInterface = nodeInterface;
export const NodeField = nodeField;
export const NodesField = nodesField;
