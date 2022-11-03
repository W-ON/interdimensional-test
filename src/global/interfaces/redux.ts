import { ScreamingSnakeCase } from 'type-fest';

export type Constants<Type> = {
  [Property in keyof Type as ScreamingSnakeCase<`${string &
    Property}`>]: ScreamingSnakeCase<`${string & Property}`>;
};
