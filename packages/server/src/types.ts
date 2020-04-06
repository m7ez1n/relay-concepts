import DataLoader from 'dataloader';

import { Types } from 'mongoose';
import { Context } from 'koa';

// import modules interfaces

export type DataLoaderKey = Types.ObjectId | string | undefined | null;

export interface GraphQLDataloaders {
  // using dataloader and module interface
}

export interface GraphQLContext {
  dataloaders: GraphQLDataloaders;
  appplatform: string;
  koaContext: Context;
}
