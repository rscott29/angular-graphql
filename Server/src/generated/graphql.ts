import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};



export type Cat = {
   __typename?: 'Cat',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  breed?: Maybe<Scalars['String']>,
  age?: Maybe<Scalars['Int']>,
};

export type CreateCatInput = {
  name?: Maybe<Scalars['String']>,
  breed?: Maybe<Scalars['String']>,
  age?: Maybe<Scalars['Int']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  createCat?: Maybe<Cat>,
};


export type MutationCreateCatArgs = {
  createCatInput?: Maybe<CreateCatInput>
};

export type Query = {
   __typename?: 'Query',
  getCats?: Maybe<Array<Maybe<Cat>>>,
  cat?: Maybe<Cat>,
};


export type QueryCatArgs = {
  id: Scalars['ID']
};

export type Subscription = {
   __typename?: 'Subscription',
  catCreated?: Maybe<Cat>,
};
