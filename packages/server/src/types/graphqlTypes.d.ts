import { Context } from "./context";
/* tslint:disable */
import { GraphQLResolveInfo } from 'graphql';
/**
 * This file is auto-generated by graphql-schema-typescript
 * Please note that any changes in this file may be overwritten
 */
 

/*******************************
 *                             *
 *          TYPE DEFS          *
 *                             *
 *******************************/
export interface GQLQuery {
  hello: string | null;
}

export interface GQLMutation {
  sendForgotPasswordEmail: boolean | null;
  forgotPasswordChange: Array<GQLError> | null;
  login: Array<GQLError> | null;
  logoutUser: boolean | null;
  register: Array<GQLError | null> | null;
}

export interface GQLError {
  path: string;
  message: string;
}

export interface GQLBook {
  book: string | null;
}

/*********************************
 *                               *
 *         TYPE RESOLVERS        *
 *                               *
 *********************************/
/**
 * This interface define the shape of your resolver
 * Note that this type is designed to be compatible with graphql-tools resolvers
 * However, you can still use other generated interfaces to make your resolver type-safed
 */
export interface GQLResolver {
  Query?: GQLQueryTypeResolver;
  Mutation?: GQLMutationTypeResolver;
  Error?: GQLErrorTypeResolver;
  Book?: GQLBookTypeResolver;
}
export interface GQLQueryTypeResolver<TParent = undefined> {
  hello?: QueryToHelloResolver<TParent>;
}

export interface QueryToHelloResolver<TParent = undefined, TResult = string | null> {
  (parent: TParent, args: {}, context: Context, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface GQLMutationTypeResolver<TParent = undefined> {
  sendForgotPasswordEmail?: MutationToSendForgotPasswordEmailResolver<TParent>;
  forgotPasswordChange?: MutationToForgotPasswordChangeResolver<TParent>;
  login?: MutationToLoginResolver<TParent>;
  logoutUser?: MutationToLogoutUserResolver<TParent>;
  register?: MutationToRegisterResolver<TParent>;
}

export interface MutationToSendForgotPasswordEmailArgs {
  email: string;
}
export interface MutationToSendForgotPasswordEmailResolver<TParent = undefined, TResult = boolean | null> {
  (parent: TParent, args: MutationToSendForgotPasswordEmailArgs, context: Context, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface MutationToForgotPasswordChangeArgs {
  newPassword: string;
  key: string;
}
export interface MutationToForgotPasswordChangeResolver<TParent = undefined, TResult = Array<GQLError> | null> {
  (parent: TParent, args: MutationToForgotPasswordChangeArgs, context: Context, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface MutationToLoginArgs {
  email: string;
  password: string;
}
export interface MutationToLoginResolver<TParent = undefined, TResult = Array<GQLError> | null> {
  (parent: TParent, args: MutationToLoginArgs, context: Context, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface MutationToLogoutUserResolver<TParent = undefined, TResult = boolean | null> {
  (parent: TParent, args: {}, context: Context, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface MutationToRegisterArgs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export interface MutationToRegisterResolver<TParent = undefined, TResult = Array<GQLError | null> | null> {
  (parent: TParent, args: MutationToRegisterArgs, context: Context, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface GQLErrorTypeResolver<TParent = GQLError> {
  path?: ErrorToPathResolver<TParent>;
  message?: ErrorToMessageResolver<TParent>;
}

export interface ErrorToPathResolver<TParent = GQLError, TResult = string> {
  (parent: TParent, args: {}, context: Context, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface ErrorToMessageResolver<TParent = GQLError, TResult = string> {
  (parent: TParent, args: {}, context: Context, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface GQLBookTypeResolver<TParent = GQLBook> {
  book?: BookToBookResolver<TParent>;
}

export interface BookToBookResolver<TParent = GQLBook, TResult = string | null> {
  (parent: TParent, args: {}, context: Context, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}
