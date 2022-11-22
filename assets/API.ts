/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  email: string,
  belongs?: string | null,
  join?: string | null,
  leave?: string | null,
  discordId?: string | null,
  github?: string | null,
  zenn?: string | null,
  qiita?: string | null,
  twitter?: string | null,
  slide?: string | null,
  file?: S3ObjectInput | null,
};

export type S3ObjectInput = {
  bucket: string,
  key: string,
  region: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  email?: ModelStringInput | null,
  belongs?: ModelStringInput | null,
  join?: ModelStringInput | null,
  leave?: ModelStringInput | null,
  discordId?: ModelStringInput | null,
  github?: ModelStringInput | null,
  zenn?: ModelStringInput | null,
  qiita?: ModelStringInput | null,
  twitter?: ModelStringInput | null,
  slide?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  name?: string | null,
  description?: string | null,
  email: string,
  belongs?: string | null,
  join?: string | null,
  leave?: string | null,
  discordId?: string | null,
  github?: string | null,
  zenn?: string | null,
  qiita?: string | null,
  twitter?: string | null,
  slide?: string | null,
  skill?: ModelUserSkillsConnection | null,
  article?: ModelArticleConnection | null,
  portfolio?: ModelPortfolioConnection | null,
  project?: ModelProjectUsersConnection | null,
  event?: ModelEventUsersConnection | null,
  link?: ModelUserLinksConnection | null,
  file?: S3Object | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelUserSkillsConnection = {
  __typename: "ModelUserSkillsConnection",
  items:  Array<UserSkills | null >,
  nextToken?: string | null,
};

export type UserSkills = {
  __typename: "UserSkills",
  id: string,
  userID: string,
  skillID: string,
  user: User,
  skill: Skill,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Skill = {
  __typename: "Skill",
  id: string,
  title: string,
  user?: ModelUserSkillsConnection | null,
  article?: ModelArticleSkillsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelArticleSkillsConnection = {
  __typename: "ModelArticleSkillsConnection",
  items:  Array<ArticleSkills | null >,
  nextToken?: string | null,
};

export type ArticleSkills = {
  __typename: "ArticleSkills",
  id: string,
  skillID: string,
  articleID: string,
  skill: Skill,
  article: Article,
  createdAt: string,
  updatedAt: string,
};

export type Article = {
  __typename: "Article",
  id: string,
  title: string,
  body?: string | null,
  published?: boolean | null,
  user: User,
  project?: Project | null,
  event?: Event | null,
  skill?: ModelArticleSkillsConnection | null,
  createdAt: string,
  updatedAt: string,
  userArticleId?: string | null,
  projectArticleId?: string | null,
  eventArticleId?: string | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  title: string,
  description?: string | null,
  start?: string | null,
  end?: string | null,
  wanted?: boolean | null,
  published?: boolean | null,
  user?: ModelProjectUsersConnection | null,
  article?: ModelArticleConnection | null,
  file?: S3Object | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelProjectUsersConnection = {
  __typename: "ModelProjectUsersConnection",
  items:  Array<ProjectUsers | null >,
  nextToken?: string | null,
};

export type ProjectUsers = {
  __typename: "ProjectUsers",
  id: string,
  userID: string,
  projectID: string,
  user: User,
  project: Project,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelArticleConnection = {
  __typename: "ModelArticleConnection",
  items:  Array<Article | null >,
  nextToken?: string | null,
};

export type S3Object = {
  __typename: "S3Object",
  bucket: string,
  key: string,
  region: string,
};

export type Event = {
  __typename: "Event",
  id: string,
  title: string,
  date?: Array< string > | null,
  description?: string | null,
  wanted?: boolean | null,
  published?: boolean | null,
  user?: ModelEventUsersConnection | null,
  article?: ModelArticleConnection | null,
  file?: S3Object | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelEventUsersConnection = {
  __typename: "ModelEventUsersConnection",
  items:  Array<EventUsers | null >,
  nextToken?: string | null,
};

export type EventUsers = {
  __typename: "EventUsers",
  id: string,
  userID: string,
  eventID: string,
  user: User,
  event: Event,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelPortfolioConnection = {
  __typename: "ModelPortfolioConnection",
  items:  Array<Portfolio | null >,
  nextToken?: string | null,
};

export type Portfolio = {
  __typename: "Portfolio",
  id: string,
  title?: string | null,
  url?: string | null,
  description?: string | null,
  published?: boolean | null,
  user: User,
  file?: S3Object | null,
  createdAt: string,
  updatedAt: string,
  userPortfolioId?: string | null,
  owner?: string | null,
};

export type ModelUserLinksConnection = {
  __typename: "ModelUserLinksConnection",
  items:  Array<UserLinks | null >,
  nextToken?: string | null,
};

export type UserLinks = {
  __typename: "UserLinks",
  id: string,
  userID: string,
  linkID: string,
  user: User,
  link: Link,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Link = {
  __typename: "Link",
  id: string,
  url: string,
  likes?: number | null,
  user?: ModelUserLinksConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  email?: string | null,
  belongs?: string | null,
  join?: string | null,
  leave?: string | null,
  discordId?: string | null,
  github?: string | null,
  zenn?: string | null,
  qiita?: string | null,
  twitter?: string | null,
  slide?: string | null,
  file?: S3ObjectInput | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateLinkInput = {
  id?: string | null,
  url: string,
  likes?: number | null,
};

export type ModelLinkConditionInput = {
  url?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  and?: Array< ModelLinkConditionInput | null > | null,
  or?: Array< ModelLinkConditionInput | null > | null,
  not?: ModelLinkConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateLinkInput = {
  id: string,
  url?: string | null,
  likes?: number | null,
};

export type DeleteLinkInput = {
  id: string,
};

export type CreateSkillInput = {
  id?: string | null,
  title: string,
};

export type ModelSkillConditionInput = {
  title?: ModelIDInput | null,
  and?: Array< ModelSkillConditionInput | null > | null,
  or?: Array< ModelSkillConditionInput | null > | null,
  not?: ModelSkillConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateSkillInput = {
  id: string,
  title?: string | null,
};

export type DeleteSkillInput = {
  id: string,
};

export type CreateArticleInput = {
  id?: string | null,
  title: string,
  body?: string | null,
  published?: boolean | null,
  userArticleId?: string | null,
  projectArticleId?: string | null,
  eventArticleId?: string | null,
};

export type ModelArticleConditionInput = {
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  published?: ModelBooleanInput | null,
  and?: Array< ModelArticleConditionInput | null > | null,
  or?: Array< ModelArticleConditionInput | null > | null,
  not?: ModelArticleConditionInput | null,
  userArticleId?: ModelIDInput | null,
  projectArticleId?: ModelIDInput | null,
  eventArticleId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateArticleInput = {
  id: string,
  title?: string | null,
  body?: string | null,
  published?: boolean | null,
  userArticleId?: string | null,
  projectArticleId?: string | null,
  eventArticleId?: string | null,
};

export type DeleteArticleInput = {
  id: string,
};

export type CreatePortfolioInput = {
  id?: string | null,
  title?: string | null,
  url?: string | null,
  description?: string | null,
  published?: boolean | null,
  file?: S3ObjectInput | null,
  userPortfolioId?: string | null,
};

export type ModelPortfolioConditionInput = {
  title?: ModelStringInput | null,
  url?: ModelStringInput | null,
  description?: ModelStringInput | null,
  published?: ModelBooleanInput | null,
  and?: Array< ModelPortfolioConditionInput | null > | null,
  or?: Array< ModelPortfolioConditionInput | null > | null,
  not?: ModelPortfolioConditionInput | null,
  userPortfolioId?: ModelIDInput | null,
};

export type UpdatePortfolioInput = {
  id: string,
  title?: string | null,
  url?: string | null,
  description?: string | null,
  published?: boolean | null,
  file?: S3ObjectInput | null,
  userPortfolioId?: string | null,
};

export type DeletePortfolioInput = {
  id: string,
};

export type CreateProjectInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  start?: string | null,
  end?: string | null,
  wanted?: boolean | null,
  published?: boolean | null,
  file?: S3ObjectInput | null,
};

export type ModelProjectConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  wanted?: ModelBooleanInput | null,
  published?: ModelBooleanInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
};

export type UpdateProjectInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  start?: string | null,
  end?: string | null,
  wanted?: boolean | null,
  published?: boolean | null,
  file?: S3ObjectInput | null,
};

export type DeleteProjectInput = {
  id: string,
};

export type CreateEventInput = {
  id?: string | null,
  title: string,
  date?: Array< string > | null,
  description?: string | null,
  wanted?: boolean | null,
  published?: boolean | null,
  file?: S3ObjectInput | null,
};

export type ModelEventConditionInput = {
  title?: ModelStringInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  wanted?: ModelBooleanInput | null,
  published?: ModelBooleanInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
};

export type UpdateEventInput = {
  id: string,
  title?: string | null,
  date?: Array< string > | null,
  description?: string | null,
  wanted?: boolean | null,
  published?: boolean | null,
  file?: S3ObjectInput | null,
};

export type DeleteEventInput = {
  id: string,
};

export type CreateUserSkillsInput = {
  id?: string | null,
  userID: string,
  skillID: string,
};

export type ModelUserSkillsConditionInput = {
  userID?: ModelIDInput | null,
  skillID?: ModelIDInput | null,
  and?: Array< ModelUserSkillsConditionInput | null > | null,
  or?: Array< ModelUserSkillsConditionInput | null > | null,
  not?: ModelUserSkillsConditionInput | null,
};

export type UpdateUserSkillsInput = {
  id: string,
  userID?: string | null,
  skillID?: string | null,
};

export type DeleteUserSkillsInput = {
  id: string,
};

export type CreateProjectUsersInput = {
  id?: string | null,
  userID: string,
  projectID: string,
};

export type ModelProjectUsersConditionInput = {
  userID?: ModelIDInput | null,
  projectID?: ModelIDInput | null,
  and?: Array< ModelProjectUsersConditionInput | null > | null,
  or?: Array< ModelProjectUsersConditionInput | null > | null,
  not?: ModelProjectUsersConditionInput | null,
};

export type UpdateProjectUsersInput = {
  id: string,
  userID?: string | null,
  projectID?: string | null,
};

export type DeleteProjectUsersInput = {
  id: string,
};

export type CreateEventUsersInput = {
  id?: string | null,
  userID: string,
  eventID: string,
};

export type ModelEventUsersConditionInput = {
  userID?: ModelIDInput | null,
  eventID?: ModelIDInput | null,
  and?: Array< ModelEventUsersConditionInput | null > | null,
  or?: Array< ModelEventUsersConditionInput | null > | null,
  not?: ModelEventUsersConditionInput | null,
};

export type UpdateEventUsersInput = {
  id: string,
  userID?: string | null,
  eventID?: string | null,
};

export type DeleteEventUsersInput = {
  id: string,
};

export type CreateUserLinksInput = {
  id?: string | null,
  userID: string,
  linkID: string,
};

export type ModelUserLinksConditionInput = {
  userID?: ModelIDInput | null,
  linkID?: ModelIDInput | null,
  and?: Array< ModelUserLinksConditionInput | null > | null,
  or?: Array< ModelUserLinksConditionInput | null > | null,
  not?: ModelUserLinksConditionInput | null,
};

export type UpdateUserLinksInput = {
  id: string,
  userID?: string | null,
  linkID?: string | null,
};

export type DeleteUserLinksInput = {
  id: string,
};

export type CreateArticleSkillsInput = {
  id?: string | null,
  skillID: string,
  articleID: string,
};

export type ModelArticleSkillsConditionInput = {
  skillID?: ModelIDInput | null,
  articleID?: ModelIDInput | null,
  and?: Array< ModelArticleSkillsConditionInput | null > | null,
  or?: Array< ModelArticleSkillsConditionInput | null > | null,
  not?: ModelArticleSkillsConditionInput | null,
};

export type UpdateArticleSkillsInput = {
  id: string,
  skillID?: string | null,
  articleID?: string | null,
};

export type DeleteArticleSkillsInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  email?: ModelStringInput | null,
  belongs?: ModelStringInput | null,
  join?: ModelStringInput | null,
  leave?: ModelStringInput | null,
  discordId?: ModelStringInput | null,
  github?: ModelStringInput | null,
  zenn?: ModelStringInput | null,
  qiita?: ModelStringInput | null,
  twitter?: ModelStringInput | null,
  slide?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelLinkFilterInput = {
  id?: ModelIDInput | null,
  url?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  and?: Array< ModelLinkFilterInput | null > | null,
  or?: Array< ModelLinkFilterInput | null > | null,
  not?: ModelLinkFilterInput | null,
};

export type ModelLinkConnection = {
  __typename: "ModelLinkConnection",
  items:  Array<Link | null >,
  nextToken?: string | null,
};

export type ModelSkillFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelIDInput | null,
  and?: Array< ModelSkillFilterInput | null > | null,
  or?: Array< ModelSkillFilterInput | null > | null,
  not?: ModelSkillFilterInput | null,
};

export type ModelSkillConnection = {
  __typename: "ModelSkillConnection",
  items:  Array<Skill | null >,
  nextToken?: string | null,
};

export type ModelArticleFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  published?: ModelBooleanInput | null,
  and?: Array< ModelArticleFilterInput | null > | null,
  or?: Array< ModelArticleFilterInput | null > | null,
  not?: ModelArticleFilterInput | null,
  userArticleId?: ModelIDInput | null,
  projectArticleId?: ModelIDInput | null,
  eventArticleId?: ModelIDInput | null,
};

export type ModelPortfolioFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  url?: ModelStringInput | null,
  description?: ModelStringInput | null,
  published?: ModelBooleanInput | null,
  and?: Array< ModelPortfolioFilterInput | null > | null,
  or?: Array< ModelPortfolioFilterInput | null > | null,
  not?: ModelPortfolioFilterInput | null,
  userPortfolioId?: ModelIDInput | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  wanted?: ModelBooleanInput | null,
  published?: ModelBooleanInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  wanted?: ModelBooleanInput | null,
  published?: ModelBooleanInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
};

export type ModelUserSkillsFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  skillID?: ModelIDInput | null,
  and?: Array< ModelUserSkillsFilterInput | null > | null,
  or?: Array< ModelUserSkillsFilterInput | null > | null,
  not?: ModelUserSkillsFilterInput | null,
};

export type ModelProjectUsersFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  projectID?: ModelIDInput | null,
  and?: Array< ModelProjectUsersFilterInput | null > | null,
  or?: Array< ModelProjectUsersFilterInput | null > | null,
  not?: ModelProjectUsersFilterInput | null,
};

export type ModelEventUsersFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  eventID?: ModelIDInput | null,
  and?: Array< ModelEventUsersFilterInput | null > | null,
  or?: Array< ModelEventUsersFilterInput | null > | null,
  not?: ModelEventUsersFilterInput | null,
};

export type ModelUserLinksFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  linkID?: ModelIDInput | null,
  and?: Array< ModelUserLinksFilterInput | null > | null,
  or?: Array< ModelUserLinksFilterInput | null > | null,
  not?: ModelUserLinksFilterInput | null,
};

export type ModelArticleSkillsFilterInput = {
  id?: ModelIDInput | null,
  skillID?: ModelIDInput | null,
  articleID?: ModelIDInput | null,
  and?: Array< ModelArticleSkillsFilterInput | null > | null,
  or?: Array< ModelArticleSkillsFilterInput | null > | null,
  not?: ModelArticleSkillsFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    description?: string | null,
    email: string,
    belongs?: string | null,
    join?: string | null,
    leave?: string | null,
    discordId?: string | null,
    github?: string | null,
    zenn?: string | null,
    qiita?: string | null,
    twitter?: string | null,
    slide?: string | null,
    skill?:  {
      __typename: "ModelUserSkillsConnection",
      items:  Array< {
        __typename: "UserSkills",
        id: string,
        userID: string,
        skillID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        body?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userArticleId?: string | null,
        projectArticleId?: string | null,
        eventArticleId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    portfolio?:  {
      __typename: "ModelPortfolioConnection",
      items:  Array< {
        __typename: "Portfolio",
        id: string,
        title?: string | null,
        url?: string | null,
        description?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userPortfolioId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    project?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        userID: string,
        projectID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    event?:  {
      __typename: "ModelEventUsersConnection",
      items:  Array< {
        __typename: "EventUsers",
        id: string,
        userID: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    link?:  {
      __typename: "ModelUserLinksConnection",
      items:  Array< {
        __typename: "UserLinks",
        id: string,
        userID: string,
        linkID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    description?: string | null,
    email: string,
    belongs?: string | null,
    join?: string | null,
    leave?: string | null,
    discordId?: string | null,
    github?: string | null,
    zenn?: string | null,
    qiita?: string | null,
    twitter?: string | null,
    slide?: string | null,
    skill?:  {
      __typename: "ModelUserSkillsConnection",
      items:  Array< {
        __typename: "UserSkills",
        id: string,
        userID: string,
        skillID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        body?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userArticleId?: string | null,
        projectArticleId?: string | null,
        eventArticleId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    portfolio?:  {
      __typename: "ModelPortfolioConnection",
      items:  Array< {
        __typename: "Portfolio",
        id: string,
        title?: string | null,
        url?: string | null,
        description?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userPortfolioId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    project?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        userID: string,
        projectID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    event?:  {
      __typename: "ModelEventUsersConnection",
      items:  Array< {
        __typename: "EventUsers",
        id: string,
        userID: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    link?:  {
      __typename: "ModelUserLinksConnection",
      items:  Array< {
        __typename: "UserLinks",
        id: string,
        userID: string,
        linkID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    description?: string | null,
    email: string,
    belongs?: string | null,
    join?: string | null,
    leave?: string | null,
    discordId?: string | null,
    github?: string | null,
    zenn?: string | null,
    qiita?: string | null,
    twitter?: string | null,
    slide?: string | null,
    skill?:  {
      __typename: "ModelUserSkillsConnection",
      items:  Array< {
        __typename: "UserSkills",
        id: string,
        userID: string,
        skillID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        body?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userArticleId?: string | null,
        projectArticleId?: string | null,
        eventArticleId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    portfolio?:  {
      __typename: "ModelPortfolioConnection",
      items:  Array< {
        __typename: "Portfolio",
        id: string,
        title?: string | null,
        url?: string | null,
        description?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userPortfolioId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    project?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        userID: string,
        projectID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    event?:  {
      __typename: "ModelEventUsersConnection",
      items:  Array< {
        __typename: "EventUsers",
        id: string,
        userID: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    link?:  {
      __typename: "ModelUserLinksConnection",
      items:  Array< {
        __typename: "UserLinks",
        id: string,
        userID: string,
        linkID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateLinkMutationVariables = {
  input: CreateLinkInput,
  condition?: ModelLinkConditionInput | null,
};

export type CreateLinkMutation = {
  createLink?:  {
    __typename: "Link",
    id: string,
    url: string,
    likes?: number | null,
    user?:  {
      __typename: "ModelUserLinksConnection",
      items:  Array< {
        __typename: "UserLinks",
        id: string,
        userID: string,
        linkID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLinkMutationVariables = {
  input: UpdateLinkInput,
  condition?: ModelLinkConditionInput | null,
};

export type UpdateLinkMutation = {
  updateLink?:  {
    __typename: "Link",
    id: string,
    url: string,
    likes?: number | null,
    user?:  {
      __typename: "ModelUserLinksConnection",
      items:  Array< {
        __typename: "UserLinks",
        id: string,
        userID: string,
        linkID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLinkMutationVariables = {
  input: DeleteLinkInput,
  condition?: ModelLinkConditionInput | null,
};

export type DeleteLinkMutation = {
  deleteLink?:  {
    __typename: "Link",
    id: string,
    url: string,
    likes?: number | null,
    user?:  {
      __typename: "ModelUserLinksConnection",
      items:  Array< {
        __typename: "UserLinks",
        id: string,
        userID: string,
        linkID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSkillMutationVariables = {
  input: CreateSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type CreateSkillMutation = {
  createSkill?:  {
    __typename: "Skill",
    id: string,
    title: string,
    user?:  {
      __typename: "ModelUserSkillsConnection",
      items:  Array< {
        __typename: "UserSkills",
        id: string,
        userID: string,
        skillID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleSkillsConnection",
      items:  Array< {
        __typename: "ArticleSkills",
        id: string,
        skillID: string,
        articleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSkillMutationVariables = {
  input: UpdateSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type UpdateSkillMutation = {
  updateSkill?:  {
    __typename: "Skill",
    id: string,
    title: string,
    user?:  {
      __typename: "ModelUserSkillsConnection",
      items:  Array< {
        __typename: "UserSkills",
        id: string,
        userID: string,
        skillID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleSkillsConnection",
      items:  Array< {
        __typename: "ArticleSkills",
        id: string,
        skillID: string,
        articleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSkillMutationVariables = {
  input: DeleteSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type DeleteSkillMutation = {
  deleteSkill?:  {
    __typename: "Skill",
    id: string,
    title: string,
    user?:  {
      __typename: "ModelUserSkillsConnection",
      items:  Array< {
        __typename: "UserSkills",
        id: string,
        userID: string,
        skillID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleSkillsConnection",
      items:  Array< {
        __typename: "ArticleSkills",
        id: string,
        skillID: string,
        articleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateArticleMutationVariables = {
  input: CreateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type CreateArticleMutation = {
  createArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    body?: string | null,
    published?: boolean | null,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    project?:  {
      __typename: "Project",
      id: string,
      title: string,
      description?: string | null,
      start?: string | null,
      end?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    event?:  {
      __typename: "Event",
      id: string,
      title: string,
      date?: Array< string > | null,
      description?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    skill?:  {
      __typename: "ModelArticleSkillsConnection",
      items:  Array< {
        __typename: "ArticleSkills",
        id: string,
        skillID: string,
        articleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userArticleId?: string | null,
    projectArticleId?: string | null,
    eventArticleId?: string | null,
  } | null,
};

export type UpdateArticleMutationVariables = {
  input: UpdateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type UpdateArticleMutation = {
  updateArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    body?: string | null,
    published?: boolean | null,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    project?:  {
      __typename: "Project",
      id: string,
      title: string,
      description?: string | null,
      start?: string | null,
      end?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    event?:  {
      __typename: "Event",
      id: string,
      title: string,
      date?: Array< string > | null,
      description?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    skill?:  {
      __typename: "ModelArticleSkillsConnection",
      items:  Array< {
        __typename: "ArticleSkills",
        id: string,
        skillID: string,
        articleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userArticleId?: string | null,
    projectArticleId?: string | null,
    eventArticleId?: string | null,
  } | null,
};

export type DeleteArticleMutationVariables = {
  input: DeleteArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type DeleteArticleMutation = {
  deleteArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    body?: string | null,
    published?: boolean | null,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    project?:  {
      __typename: "Project",
      id: string,
      title: string,
      description?: string | null,
      start?: string | null,
      end?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    event?:  {
      __typename: "Event",
      id: string,
      title: string,
      date?: Array< string > | null,
      description?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    skill?:  {
      __typename: "ModelArticleSkillsConnection",
      items:  Array< {
        __typename: "ArticleSkills",
        id: string,
        skillID: string,
        articleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userArticleId?: string | null,
    projectArticleId?: string | null,
    eventArticleId?: string | null,
  } | null,
};

export type CreatePortfolioMutationVariables = {
  input: CreatePortfolioInput,
  condition?: ModelPortfolioConditionInput | null,
};

export type CreatePortfolioMutation = {
  createPortfolio?:  {
    __typename: "Portfolio",
    id: string,
    title?: string | null,
    url?: string | null,
    description?: string | null,
    published?: boolean | null,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPortfolioId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdatePortfolioMutationVariables = {
  input: UpdatePortfolioInput,
  condition?: ModelPortfolioConditionInput | null,
};

export type UpdatePortfolioMutation = {
  updatePortfolio?:  {
    __typename: "Portfolio",
    id: string,
    title?: string | null,
    url?: string | null,
    description?: string | null,
    published?: boolean | null,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPortfolioId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeletePortfolioMutationVariables = {
  input: DeletePortfolioInput,
  condition?: ModelPortfolioConditionInput | null,
};

export type DeletePortfolioMutation = {
  deletePortfolio?:  {
    __typename: "Portfolio",
    id: string,
    title?: string | null,
    url?: string | null,
    description?: string | null,
    published?: boolean | null,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPortfolioId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description?: string | null,
    start?: string | null,
    end?: string | null,
    wanted?: boolean | null,
    published?: boolean | null,
    user?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        userID: string,
        projectID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        body?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userArticleId?: string | null,
        projectArticleId?: string | null,
        eventArticleId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description?: string | null,
    start?: string | null,
    end?: string | null,
    wanted?: boolean | null,
    published?: boolean | null,
    user?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        userID: string,
        projectID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        body?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userArticleId?: string | null,
        projectArticleId?: string | null,
        eventArticleId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description?: string | null,
    start?: string | null,
    end?: string | null,
    wanted?: boolean | null,
    published?: boolean | null,
    user?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        userID: string,
        projectID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        body?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userArticleId?: string | null,
        projectArticleId?: string | null,
        eventArticleId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    date?: Array< string > | null,
    description?: string | null,
    wanted?: boolean | null,
    published?: boolean | null,
    user?:  {
      __typename: "ModelEventUsersConnection",
      items:  Array< {
        __typename: "EventUsers",
        id: string,
        userID: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        body?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userArticleId?: string | null,
        projectArticleId?: string | null,
        eventArticleId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    date?: Array< string > | null,
    description?: string | null,
    wanted?: boolean | null,
    published?: boolean | null,
    user?:  {
      __typename: "ModelEventUsersConnection",
      items:  Array< {
        __typename: "EventUsers",
        id: string,
        userID: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        body?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userArticleId?: string | null,
        projectArticleId?: string | null,
        eventArticleId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    date?: Array< string > | null,
    description?: string | null,
    wanted?: boolean | null,
    published?: boolean | null,
    user?:  {
      __typename: "ModelEventUsersConnection",
      items:  Array< {
        __typename: "EventUsers",
        id: string,
        userID: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        body?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userArticleId?: string | null,
        projectArticleId?: string | null,
        eventArticleId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserSkillsMutationVariables = {
  input: CreateUserSkillsInput,
  condition?: ModelUserSkillsConditionInput | null,
};

export type CreateUserSkillsMutation = {
  createUserSkills?:  {
    __typename: "UserSkills",
    id: string,
    userID: string,
    skillID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      title: string,
      user?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleSkillsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserSkillsMutationVariables = {
  input: UpdateUserSkillsInput,
  condition?: ModelUserSkillsConditionInput | null,
};

export type UpdateUserSkillsMutation = {
  updateUserSkills?:  {
    __typename: "UserSkills",
    id: string,
    userID: string,
    skillID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      title: string,
      user?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleSkillsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserSkillsMutationVariables = {
  input: DeleteUserSkillsInput,
  condition?: ModelUserSkillsConditionInput | null,
};

export type DeleteUserSkillsMutation = {
  deleteUserSkills?:  {
    __typename: "UserSkills",
    id: string,
    userID: string,
    skillID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      title: string,
      user?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleSkillsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateProjectUsersMutationVariables = {
  input: CreateProjectUsersInput,
  condition?: ModelProjectUsersConditionInput | null,
};

export type CreateProjectUsersMutation = {
  createProjectUsers?:  {
    __typename: "ProjectUsers",
    id: string,
    userID: string,
    projectID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description?: string | null,
      start?: string | null,
      end?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateProjectUsersMutationVariables = {
  input: UpdateProjectUsersInput,
  condition?: ModelProjectUsersConditionInput | null,
};

export type UpdateProjectUsersMutation = {
  updateProjectUsers?:  {
    __typename: "ProjectUsers",
    id: string,
    userID: string,
    projectID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description?: string | null,
      start?: string | null,
      end?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteProjectUsersMutationVariables = {
  input: DeleteProjectUsersInput,
  condition?: ModelProjectUsersConditionInput | null,
};

export type DeleteProjectUsersMutation = {
  deleteProjectUsers?:  {
    __typename: "ProjectUsers",
    id: string,
    userID: string,
    projectID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description?: string | null,
      start?: string | null,
      end?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateEventUsersMutationVariables = {
  input: CreateEventUsersInput,
  condition?: ModelEventUsersConditionInput | null,
};

export type CreateEventUsersMutation = {
  createEventUsers?:  {
    __typename: "EventUsers",
    id: string,
    userID: string,
    eventID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    event:  {
      __typename: "Event",
      id: string,
      title: string,
      date?: Array< string > | null,
      description?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateEventUsersMutationVariables = {
  input: UpdateEventUsersInput,
  condition?: ModelEventUsersConditionInput | null,
};

export type UpdateEventUsersMutation = {
  updateEventUsers?:  {
    __typename: "EventUsers",
    id: string,
    userID: string,
    eventID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    event:  {
      __typename: "Event",
      id: string,
      title: string,
      date?: Array< string > | null,
      description?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteEventUsersMutationVariables = {
  input: DeleteEventUsersInput,
  condition?: ModelEventUsersConditionInput | null,
};

export type DeleteEventUsersMutation = {
  deleteEventUsers?:  {
    __typename: "EventUsers",
    id: string,
    userID: string,
    eventID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    event:  {
      __typename: "Event",
      id: string,
      title: string,
      date?: Array< string > | null,
      description?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateUserLinksMutationVariables = {
  input: CreateUserLinksInput,
  condition?: ModelUserLinksConditionInput | null,
};

export type CreateUserLinksMutation = {
  createUserLinks?:  {
    __typename: "UserLinks",
    id: string,
    userID: string,
    linkID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    link:  {
      __typename: "Link",
      id: string,
      url: string,
      likes?: number | null,
      user?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserLinksMutationVariables = {
  input: UpdateUserLinksInput,
  condition?: ModelUserLinksConditionInput | null,
};

export type UpdateUserLinksMutation = {
  updateUserLinks?:  {
    __typename: "UserLinks",
    id: string,
    userID: string,
    linkID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    link:  {
      __typename: "Link",
      id: string,
      url: string,
      likes?: number | null,
      user?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserLinksMutationVariables = {
  input: DeleteUserLinksInput,
  condition?: ModelUserLinksConditionInput | null,
};

export type DeleteUserLinksMutation = {
  deleteUserLinks?:  {
    __typename: "UserLinks",
    id: string,
    userID: string,
    linkID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    link:  {
      __typename: "Link",
      id: string,
      url: string,
      likes?: number | null,
      user?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateArticleSkillsMutationVariables = {
  input: CreateArticleSkillsInput,
  condition?: ModelArticleSkillsConditionInput | null,
};

export type CreateArticleSkillsMutation = {
  createArticleSkills?:  {
    __typename: "ArticleSkills",
    id: string,
    skillID: string,
    articleID: string,
    skill:  {
      __typename: "Skill",
      id: string,
      title: string,
      user?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleSkillsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    article:  {
      __typename: "Article",
      id: string,
      title: string,
      body?: string | null,
      published?: boolean | null,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        description?: string | null,
        email: string,
        belongs?: string | null,
        join?: string | null,
        leave?: string | null,
        discordId?: string | null,
        github?: string | null,
        zenn?: string | null,
        qiita?: string | null,
        twitter?: string | null,
        slide?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      project?:  {
        __typename: "Project",
        id: string,
        title: string,
        description?: string | null,
        start?: string | null,
        end?: string | null,
        wanted?: boolean | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      event?:  {
        __typename: "Event",
        id: string,
        title: string,
        date?: Array< string > | null,
        description?: string | null,
        wanted?: boolean | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      skill?:  {
        __typename: "ModelArticleSkillsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userArticleId?: string | null,
      projectArticleId?: string | null,
      eventArticleId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateArticleSkillsMutationVariables = {
  input: UpdateArticleSkillsInput,
  condition?: ModelArticleSkillsConditionInput | null,
};

export type UpdateArticleSkillsMutation = {
  updateArticleSkills?:  {
    __typename: "ArticleSkills",
    id: string,
    skillID: string,
    articleID: string,
    skill:  {
      __typename: "Skill",
      id: string,
      title: string,
      user?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleSkillsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    article:  {
      __typename: "Article",
      id: string,
      title: string,
      body?: string | null,
      published?: boolean | null,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        description?: string | null,
        email: string,
        belongs?: string | null,
        join?: string | null,
        leave?: string | null,
        discordId?: string | null,
        github?: string | null,
        zenn?: string | null,
        qiita?: string | null,
        twitter?: string | null,
        slide?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      project?:  {
        __typename: "Project",
        id: string,
        title: string,
        description?: string | null,
        start?: string | null,
        end?: string | null,
        wanted?: boolean | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      event?:  {
        __typename: "Event",
        id: string,
        title: string,
        date?: Array< string > | null,
        description?: string | null,
        wanted?: boolean | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      skill?:  {
        __typename: "ModelArticleSkillsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userArticleId?: string | null,
      projectArticleId?: string | null,
      eventArticleId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteArticleSkillsMutationVariables = {
  input: DeleteArticleSkillsInput,
  condition?: ModelArticleSkillsConditionInput | null,
};

export type DeleteArticleSkillsMutation = {
  deleteArticleSkills?:  {
    __typename: "ArticleSkills",
    id: string,
    skillID: string,
    articleID: string,
    skill:  {
      __typename: "Skill",
      id: string,
      title: string,
      user?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleSkillsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    article:  {
      __typename: "Article",
      id: string,
      title: string,
      body?: string | null,
      published?: boolean | null,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        description?: string | null,
        email: string,
        belongs?: string | null,
        join?: string | null,
        leave?: string | null,
        discordId?: string | null,
        github?: string | null,
        zenn?: string | null,
        qiita?: string | null,
        twitter?: string | null,
        slide?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      project?:  {
        __typename: "Project",
        id: string,
        title: string,
        description?: string | null,
        start?: string | null,
        end?: string | null,
        wanted?: boolean | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      event?:  {
        __typename: "Event",
        id: string,
        title: string,
        date?: Array< string > | null,
        description?: string | null,
        wanted?: boolean | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      skill?:  {
        __typename: "ModelArticleSkillsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userArticleId?: string | null,
      projectArticleId?: string | null,
      eventArticleId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    description?: string | null,
    email: string,
    belongs?: string | null,
    join?: string | null,
    leave?: string | null,
    discordId?: string | null,
    github?: string | null,
    zenn?: string | null,
    qiita?: string | null,
    twitter?: string | null,
    slide?: string | null,
    skill?:  {
      __typename: "ModelUserSkillsConnection",
      items:  Array< {
        __typename: "UserSkills",
        id: string,
        userID: string,
        skillID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        body?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userArticleId?: string | null,
        projectArticleId?: string | null,
        eventArticleId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    portfolio?:  {
      __typename: "ModelPortfolioConnection",
      items:  Array< {
        __typename: "Portfolio",
        id: string,
        title?: string | null,
        url?: string | null,
        description?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userPortfolioId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    project?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        userID: string,
        projectID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    event?:  {
      __typename: "ModelEventUsersConnection",
      items:  Array< {
        __typename: "EventUsers",
        id: string,
        userID: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    link?:  {
      __typename: "ModelUserLinksConnection",
      items:  Array< {
        __typename: "UserLinks",
        id: string,
        userID: string,
        linkID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLinkQueryVariables = {
  id: string,
};

export type GetLinkQuery = {
  getLink?:  {
    __typename: "Link",
    id: string,
    url: string,
    likes?: number | null,
    user?:  {
      __typename: "ModelUserLinksConnection",
      items:  Array< {
        __typename: "UserLinks",
        id: string,
        userID: string,
        linkID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLinksQueryVariables = {
  filter?: ModelLinkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLinksQuery = {
  listLinks?:  {
    __typename: "ModelLinkConnection",
    items:  Array< {
      __typename: "Link",
      id: string,
      url: string,
      likes?: number | null,
      user?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSkillQueryVariables = {
  id: string,
};

export type GetSkillQuery = {
  getSkill?:  {
    __typename: "Skill",
    id: string,
    title: string,
    user?:  {
      __typename: "ModelUserSkillsConnection",
      items:  Array< {
        __typename: "UserSkills",
        id: string,
        userID: string,
        skillID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleSkillsConnection",
      items:  Array< {
        __typename: "ArticleSkills",
        id: string,
        skillID: string,
        articleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSkillsQueryVariables = {
  filter?: ModelSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSkillsQuery = {
  listSkills?:  {
    __typename: "ModelSkillConnection",
    items:  Array< {
      __typename: "Skill",
      id: string,
      title: string,
      user?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleSkillsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetArticleQueryVariables = {
  id: string,
};

export type GetArticleQuery = {
  getArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    body?: string | null,
    published?: boolean | null,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    project?:  {
      __typename: "Project",
      id: string,
      title: string,
      description?: string | null,
      start?: string | null,
      end?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    event?:  {
      __typename: "Event",
      id: string,
      title: string,
      date?: Array< string > | null,
      description?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    skill?:  {
      __typename: "ModelArticleSkillsConnection",
      items:  Array< {
        __typename: "ArticleSkills",
        id: string,
        skillID: string,
        articleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userArticleId?: string | null,
    projectArticleId?: string | null,
    eventArticleId?: string | null,
  } | null,
};

export type ListArticlesQueryVariables = {
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArticlesQuery = {
  listArticles?:  {
    __typename: "ModelArticleConnection",
    items:  Array< {
      __typename: "Article",
      id: string,
      title: string,
      body?: string | null,
      published?: boolean | null,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        description?: string | null,
        email: string,
        belongs?: string | null,
        join?: string | null,
        leave?: string | null,
        discordId?: string | null,
        github?: string | null,
        zenn?: string | null,
        qiita?: string | null,
        twitter?: string | null,
        slide?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      project?:  {
        __typename: "Project",
        id: string,
        title: string,
        description?: string | null,
        start?: string | null,
        end?: string | null,
        wanted?: boolean | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      event?:  {
        __typename: "Event",
        id: string,
        title: string,
        date?: Array< string > | null,
        description?: string | null,
        wanted?: boolean | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      skill?:  {
        __typename: "ModelArticleSkillsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userArticleId?: string | null,
      projectArticleId?: string | null,
      eventArticleId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPortfolioQueryVariables = {
  id: string,
};

export type GetPortfolioQuery = {
  getPortfolio?:  {
    __typename: "Portfolio",
    id: string,
    title?: string | null,
    url?: string | null,
    description?: string | null,
    published?: boolean | null,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPortfolioId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListPortfoliosQueryVariables = {
  filter?: ModelPortfolioFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPortfoliosQuery = {
  listPortfolios?:  {
    __typename: "ModelPortfolioConnection",
    items:  Array< {
      __typename: "Portfolio",
      id: string,
      title?: string | null,
      url?: string | null,
      description?: string | null,
      published?: boolean | null,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        description?: string | null,
        email: string,
        belongs?: string | null,
        join?: string | null,
        leave?: string | null,
        discordId?: string | null,
        github?: string | null,
        zenn?: string | null,
        qiita?: string | null,
        twitter?: string | null,
        slide?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      userPortfolioId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description?: string | null,
    start?: string | null,
    end?: string | null,
    wanted?: boolean | null,
    published?: boolean | null,
    user?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        userID: string,
        projectID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        body?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userArticleId?: string | null,
        projectArticleId?: string | null,
        eventArticleId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      title: string,
      description?: string | null,
      start?: string | null,
      end?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    date?: Array< string > | null,
    description?: string | null,
    wanted?: boolean | null,
    published?: boolean | null,
    user?:  {
      __typename: "ModelEventUsersConnection",
      items:  Array< {
        __typename: "EventUsers",
        id: string,
        userID: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        body?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userArticleId?: string | null,
        projectArticleId?: string | null,
        eventArticleId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      title: string,
      date?: Array< string > | null,
      description?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserSkillsQueryVariables = {
  id: string,
};

export type GetUserSkillsQuery = {
  getUserSkills?:  {
    __typename: "UserSkills",
    id: string,
    userID: string,
    skillID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      title: string,
      user?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleSkillsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUserSkillsQueryVariables = {
  filter?: ModelUserSkillsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserSkillsQuery = {
  listUserSkills?:  {
    __typename: "ModelUserSkillsConnection",
    items:  Array< {
      __typename: "UserSkills",
      id: string,
      userID: string,
      skillID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        description?: string | null,
        email: string,
        belongs?: string | null,
        join?: string | null,
        leave?: string | null,
        discordId?: string | null,
        github?: string | null,
        zenn?: string | null,
        qiita?: string | null,
        twitter?: string | null,
        slide?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      skill:  {
        __typename: "Skill",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectUsersQueryVariables = {
  id: string,
};

export type GetProjectUsersQuery = {
  getProjectUsers?:  {
    __typename: "ProjectUsers",
    id: string,
    userID: string,
    projectID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description?: string | null,
      start?: string | null,
      end?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListProjectUsersQueryVariables = {
  filter?: ModelProjectUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectUsersQuery = {
  listProjectUsers?:  {
    __typename: "ModelProjectUsersConnection",
    items:  Array< {
      __typename: "ProjectUsers",
      id: string,
      userID: string,
      projectID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        description?: string | null,
        email: string,
        belongs?: string | null,
        join?: string | null,
        leave?: string | null,
        discordId?: string | null,
        github?: string | null,
        zenn?: string | null,
        qiita?: string | null,
        twitter?: string | null,
        slide?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      project:  {
        __typename: "Project",
        id: string,
        title: string,
        description?: string | null,
        start?: string | null,
        end?: string | null,
        wanted?: boolean | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEventUsersQueryVariables = {
  id: string,
};

export type GetEventUsersQuery = {
  getEventUsers?:  {
    __typename: "EventUsers",
    id: string,
    userID: string,
    eventID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    event:  {
      __typename: "Event",
      id: string,
      title: string,
      date?: Array< string > | null,
      description?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListEventUsersQueryVariables = {
  filter?: ModelEventUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventUsersQuery = {
  listEventUsers?:  {
    __typename: "ModelEventUsersConnection",
    items:  Array< {
      __typename: "EventUsers",
      id: string,
      userID: string,
      eventID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        description?: string | null,
        email: string,
        belongs?: string | null,
        join?: string | null,
        leave?: string | null,
        discordId?: string | null,
        github?: string | null,
        zenn?: string | null,
        qiita?: string | null,
        twitter?: string | null,
        slide?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      event:  {
        __typename: "Event",
        id: string,
        title: string,
        date?: Array< string > | null,
        description?: string | null,
        wanted?: boolean | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserLinksQueryVariables = {
  id: string,
};

export type GetUserLinksQuery = {
  getUserLinks?:  {
    __typename: "UserLinks",
    id: string,
    userID: string,
    linkID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    link:  {
      __typename: "Link",
      id: string,
      url: string,
      likes?: number | null,
      user?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUserLinksQueryVariables = {
  filter?: ModelUserLinksFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserLinksQuery = {
  listUserLinks?:  {
    __typename: "ModelUserLinksConnection",
    items:  Array< {
      __typename: "UserLinks",
      id: string,
      userID: string,
      linkID: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        description?: string | null,
        email: string,
        belongs?: string | null,
        join?: string | null,
        leave?: string | null,
        discordId?: string | null,
        github?: string | null,
        zenn?: string | null,
        qiita?: string | null,
        twitter?: string | null,
        slide?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      link:  {
        __typename: "Link",
        id: string,
        url: string,
        likes?: number | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetArticleSkillsQueryVariables = {
  id: string,
};

export type GetArticleSkillsQuery = {
  getArticleSkills?:  {
    __typename: "ArticleSkills",
    id: string,
    skillID: string,
    articleID: string,
    skill:  {
      __typename: "Skill",
      id: string,
      title: string,
      user?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleSkillsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    article:  {
      __typename: "Article",
      id: string,
      title: string,
      body?: string | null,
      published?: boolean | null,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        description?: string | null,
        email: string,
        belongs?: string | null,
        join?: string | null,
        leave?: string | null,
        discordId?: string | null,
        github?: string | null,
        zenn?: string | null,
        qiita?: string | null,
        twitter?: string | null,
        slide?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      project?:  {
        __typename: "Project",
        id: string,
        title: string,
        description?: string | null,
        start?: string | null,
        end?: string | null,
        wanted?: boolean | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      event?:  {
        __typename: "Event",
        id: string,
        title: string,
        date?: Array< string > | null,
        description?: string | null,
        wanted?: boolean | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      skill?:  {
        __typename: "ModelArticleSkillsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userArticleId?: string | null,
      projectArticleId?: string | null,
      eventArticleId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListArticleSkillsQueryVariables = {
  filter?: ModelArticleSkillsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArticleSkillsQuery = {
  listArticleSkills?:  {
    __typename: "ModelArticleSkillsConnection",
    items:  Array< {
      __typename: "ArticleSkills",
      id: string,
      skillID: string,
      articleID: string,
      skill:  {
        __typename: "Skill",
        id: string,
        title: string,
        createdAt: string,
        updatedAt: string,
      },
      article:  {
        __typename: "Article",
        id: string,
        title: string,
        body?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userArticleId?: string | null,
        projectArticleId?: string | null,
        eventArticleId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    description?: string | null,
    email: string,
    belongs?: string | null,
    join?: string | null,
    leave?: string | null,
    discordId?: string | null,
    github?: string | null,
    zenn?: string | null,
    qiita?: string | null,
    twitter?: string | null,
    slide?: string | null,
    skill?:  {
      __typename: "ModelUserSkillsConnection",
      items:  Array< {
        __typename: "UserSkills",
        id: string,
        userID: string,
        skillID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        body?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userArticleId?: string | null,
        projectArticleId?: string | null,
        eventArticleId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    portfolio?:  {
      __typename: "ModelPortfolioConnection",
      items:  Array< {
        __typename: "Portfolio",
        id: string,
        title?: string | null,
        url?: string | null,
        description?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userPortfolioId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    project?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        userID: string,
        projectID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    event?:  {
      __typename: "ModelEventUsersConnection",
      items:  Array< {
        __typename: "EventUsers",
        id: string,
        userID: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    link?:  {
      __typename: "ModelUserLinksConnection",
      items:  Array< {
        __typename: "UserLinks",
        id: string,
        userID: string,
        linkID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    description?: string | null,
    email: string,
    belongs?: string | null,
    join?: string | null,
    leave?: string | null,
    discordId?: string | null,
    github?: string | null,
    zenn?: string | null,
    qiita?: string | null,
    twitter?: string | null,
    slide?: string | null,
    skill?:  {
      __typename: "ModelUserSkillsConnection",
      items:  Array< {
        __typename: "UserSkills",
        id: string,
        userID: string,
        skillID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        body?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userArticleId?: string | null,
        projectArticleId?: string | null,
        eventArticleId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    portfolio?:  {
      __typename: "ModelPortfolioConnection",
      items:  Array< {
        __typename: "Portfolio",
        id: string,
        title?: string | null,
        url?: string | null,
        description?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userPortfolioId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    project?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        userID: string,
        projectID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    event?:  {
      __typename: "ModelEventUsersConnection",
      items:  Array< {
        __typename: "EventUsers",
        id: string,
        userID: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    link?:  {
      __typename: "ModelUserLinksConnection",
      items:  Array< {
        __typename: "UserLinks",
        id: string,
        userID: string,
        linkID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    description?: string | null,
    email: string,
    belongs?: string | null,
    join?: string | null,
    leave?: string | null,
    discordId?: string | null,
    github?: string | null,
    zenn?: string | null,
    qiita?: string | null,
    twitter?: string | null,
    slide?: string | null,
    skill?:  {
      __typename: "ModelUserSkillsConnection",
      items:  Array< {
        __typename: "UserSkills",
        id: string,
        userID: string,
        skillID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        body?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userArticleId?: string | null,
        projectArticleId?: string | null,
        eventArticleId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    portfolio?:  {
      __typename: "ModelPortfolioConnection",
      items:  Array< {
        __typename: "Portfolio",
        id: string,
        title?: string | null,
        url?: string | null,
        description?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userPortfolioId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    project?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        userID: string,
        projectID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    event?:  {
      __typename: "ModelEventUsersConnection",
      items:  Array< {
        __typename: "EventUsers",
        id: string,
        userID: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    link?:  {
      __typename: "ModelUserLinksConnection",
      items:  Array< {
        __typename: "UserLinks",
        id: string,
        userID: string,
        linkID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateLinkSubscription = {
  onCreateLink?:  {
    __typename: "Link",
    id: string,
    url: string,
    likes?: number | null,
    user?:  {
      __typename: "ModelUserLinksConnection",
      items:  Array< {
        __typename: "UserLinks",
        id: string,
        userID: string,
        linkID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLinkSubscription = {
  onUpdateLink?:  {
    __typename: "Link",
    id: string,
    url: string,
    likes?: number | null,
    user?:  {
      __typename: "ModelUserLinksConnection",
      items:  Array< {
        __typename: "UserLinks",
        id: string,
        userID: string,
        linkID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLinkSubscription = {
  onDeleteLink?:  {
    __typename: "Link",
    id: string,
    url: string,
    likes?: number | null,
    user?:  {
      __typename: "ModelUserLinksConnection",
      items:  Array< {
        __typename: "UserLinks",
        id: string,
        userID: string,
        linkID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSkillSubscription = {
  onCreateSkill?:  {
    __typename: "Skill",
    id: string,
    title: string,
    user?:  {
      __typename: "ModelUserSkillsConnection",
      items:  Array< {
        __typename: "UserSkills",
        id: string,
        userID: string,
        skillID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleSkillsConnection",
      items:  Array< {
        __typename: "ArticleSkills",
        id: string,
        skillID: string,
        articleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSkillSubscription = {
  onUpdateSkill?:  {
    __typename: "Skill",
    id: string,
    title: string,
    user?:  {
      __typename: "ModelUserSkillsConnection",
      items:  Array< {
        __typename: "UserSkills",
        id: string,
        userID: string,
        skillID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleSkillsConnection",
      items:  Array< {
        __typename: "ArticleSkills",
        id: string,
        skillID: string,
        articleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSkillSubscription = {
  onDeleteSkill?:  {
    __typename: "Skill",
    id: string,
    title: string,
    user?:  {
      __typename: "ModelUserSkillsConnection",
      items:  Array< {
        __typename: "UserSkills",
        id: string,
        userID: string,
        skillID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleSkillsConnection",
      items:  Array< {
        __typename: "ArticleSkills",
        id: string,
        skillID: string,
        articleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateArticleSubscription = {
  onCreateArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    body?: string | null,
    published?: boolean | null,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    project?:  {
      __typename: "Project",
      id: string,
      title: string,
      description?: string | null,
      start?: string | null,
      end?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    event?:  {
      __typename: "Event",
      id: string,
      title: string,
      date?: Array< string > | null,
      description?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    skill?:  {
      __typename: "ModelArticleSkillsConnection",
      items:  Array< {
        __typename: "ArticleSkills",
        id: string,
        skillID: string,
        articleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userArticleId?: string | null,
    projectArticleId?: string | null,
    eventArticleId?: string | null,
  } | null,
};

export type OnUpdateArticleSubscription = {
  onUpdateArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    body?: string | null,
    published?: boolean | null,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    project?:  {
      __typename: "Project",
      id: string,
      title: string,
      description?: string | null,
      start?: string | null,
      end?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    event?:  {
      __typename: "Event",
      id: string,
      title: string,
      date?: Array< string > | null,
      description?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    skill?:  {
      __typename: "ModelArticleSkillsConnection",
      items:  Array< {
        __typename: "ArticleSkills",
        id: string,
        skillID: string,
        articleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userArticleId?: string | null,
    projectArticleId?: string | null,
    eventArticleId?: string | null,
  } | null,
};

export type OnDeleteArticleSubscription = {
  onDeleteArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    body?: string | null,
    published?: boolean | null,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    project?:  {
      __typename: "Project",
      id: string,
      title: string,
      description?: string | null,
      start?: string | null,
      end?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    event?:  {
      __typename: "Event",
      id: string,
      title: string,
      date?: Array< string > | null,
      description?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    skill?:  {
      __typename: "ModelArticleSkillsConnection",
      items:  Array< {
        __typename: "ArticleSkills",
        id: string,
        skillID: string,
        articleID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userArticleId?: string | null,
    projectArticleId?: string | null,
    eventArticleId?: string | null,
  } | null,
};

export type OnCreatePortfolioSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePortfolioSubscription = {
  onCreatePortfolio?:  {
    __typename: "Portfolio",
    id: string,
    title?: string | null,
    url?: string | null,
    description?: string | null,
    published?: boolean | null,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPortfolioId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdatePortfolioSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePortfolioSubscription = {
  onUpdatePortfolio?:  {
    __typename: "Portfolio",
    id: string,
    title?: string | null,
    url?: string | null,
    description?: string | null,
    published?: boolean | null,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPortfolioId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeletePortfolioSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePortfolioSubscription = {
  onDeletePortfolio?:  {
    __typename: "Portfolio",
    id: string,
    title?: string | null,
    url?: string | null,
    description?: string | null,
    published?: boolean | null,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPortfolioId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description?: string | null,
    start?: string | null,
    end?: string | null,
    wanted?: boolean | null,
    published?: boolean | null,
    user?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        userID: string,
        projectID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        body?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userArticleId?: string | null,
        projectArticleId?: string | null,
        eventArticleId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description?: string | null,
    start?: string | null,
    end?: string | null,
    wanted?: boolean | null,
    published?: boolean | null,
    user?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        userID: string,
        projectID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        body?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userArticleId?: string | null,
        projectArticleId?: string | null,
        eventArticleId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?:  {
    __typename: "Project",
    id: string,
    title: string,
    description?: string | null,
    start?: string | null,
    end?: string | null,
    wanted?: boolean | null,
    published?: boolean | null,
    user?:  {
      __typename: "ModelProjectUsersConnection",
      items:  Array< {
        __typename: "ProjectUsers",
        id: string,
        userID: string,
        projectID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        body?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userArticleId?: string | null,
        projectArticleId?: string | null,
        eventArticleId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    date?: Array< string > | null,
    description?: string | null,
    wanted?: boolean | null,
    published?: boolean | null,
    user?:  {
      __typename: "ModelEventUsersConnection",
      items:  Array< {
        __typename: "EventUsers",
        id: string,
        userID: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        body?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userArticleId?: string | null,
        projectArticleId?: string | null,
        eventArticleId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    date?: Array< string > | null,
    description?: string | null,
    wanted?: boolean | null,
    published?: boolean | null,
    user?:  {
      __typename: "ModelEventUsersConnection",
      items:  Array< {
        __typename: "EventUsers",
        id: string,
        userID: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        body?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userArticleId?: string | null,
        projectArticleId?: string | null,
        eventArticleId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    date?: Array< string > | null,
    description?: string | null,
    wanted?: boolean | null,
    published?: boolean | null,
    user?:  {
      __typename: "ModelEventUsersConnection",
      items:  Array< {
        __typename: "EventUsers",
        id: string,
        userID: string,
        eventID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    article?:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        title: string,
        body?: string | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
        userArticleId?: string | null,
        projectArticleId?: string | null,
        eventArticleId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSkillsSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateUserSkillsSubscription = {
  onCreateUserSkills?:  {
    __typename: "UserSkills",
    id: string,
    userID: string,
    skillID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      title: string,
      user?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleSkillsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSkillsSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateUserSkillsSubscription = {
  onUpdateUserSkills?:  {
    __typename: "UserSkills",
    id: string,
    userID: string,
    skillID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      title: string,
      user?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleSkillsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSkillsSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteUserSkillsSubscription = {
  onDeleteUserSkills?:  {
    __typename: "UserSkills",
    id: string,
    userID: string,
    skillID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    skill:  {
      __typename: "Skill",
      id: string,
      title: string,
      user?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleSkillsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateProjectUsersSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateProjectUsersSubscription = {
  onCreateProjectUsers?:  {
    __typename: "ProjectUsers",
    id: string,
    userID: string,
    projectID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description?: string | null,
      start?: string | null,
      end?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateProjectUsersSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateProjectUsersSubscription = {
  onUpdateProjectUsers?:  {
    __typename: "ProjectUsers",
    id: string,
    userID: string,
    projectID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description?: string | null,
      start?: string | null,
      end?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteProjectUsersSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteProjectUsersSubscription = {
  onDeleteProjectUsers?:  {
    __typename: "ProjectUsers",
    id: string,
    userID: string,
    projectID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description?: string | null,
      start?: string | null,
      end?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateEventUsersSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateEventUsersSubscription = {
  onCreateEventUsers?:  {
    __typename: "EventUsers",
    id: string,
    userID: string,
    eventID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    event:  {
      __typename: "Event",
      id: string,
      title: string,
      date?: Array< string > | null,
      description?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateEventUsersSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateEventUsersSubscription = {
  onUpdateEventUsers?:  {
    __typename: "EventUsers",
    id: string,
    userID: string,
    eventID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    event:  {
      __typename: "Event",
      id: string,
      title: string,
      date?: Array< string > | null,
      description?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteEventUsersSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteEventUsersSubscription = {
  onDeleteEventUsers?:  {
    __typename: "EventUsers",
    id: string,
    userID: string,
    eventID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    event:  {
      __typename: "Event",
      id: string,
      title: string,
      date?: Array< string > | null,
      description?: string | null,
      wanted?: boolean | null,
      published?: boolean | null,
      user?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateUserLinksSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateUserLinksSubscription = {
  onCreateUserLinks?:  {
    __typename: "UserLinks",
    id: string,
    userID: string,
    linkID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    link:  {
      __typename: "Link",
      id: string,
      url: string,
      likes?: number | null,
      user?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserLinksSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateUserLinksSubscription = {
  onUpdateUserLinks?:  {
    __typename: "UserLinks",
    id: string,
    userID: string,
    linkID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    link:  {
      __typename: "Link",
      id: string,
      url: string,
      likes?: number | null,
      user?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserLinksSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteUserLinksSubscription = {
  onDeleteUserLinks?:  {
    __typename: "UserLinks",
    id: string,
    userID: string,
    linkID: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      description?: string | null,
      email: string,
      belongs?: string | null,
      join?: string | null,
      leave?: string | null,
      discordId?: string | null,
      github?: string | null,
      zenn?: string | null,
      qiita?: string | null,
      twitter?: string | null,
      slide?: string | null,
      skill?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleConnection",
        nextToken?: string | null,
      } | null,
      portfolio?:  {
        __typename: "ModelPortfolioConnection",
        nextToken?: string | null,
      } | null,
      project?:  {
        __typename: "ModelProjectUsersConnection",
        nextToken?: string | null,
      } | null,
      event?:  {
        __typename: "ModelEventUsersConnection",
        nextToken?: string | null,
      } | null,
      link?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        key: string,
        region: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    link:  {
      __typename: "Link",
      id: string,
      url: string,
      likes?: number | null,
      user?:  {
        __typename: "ModelUserLinksConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateArticleSkillsSubscription = {
  onCreateArticleSkills?:  {
    __typename: "ArticleSkills",
    id: string,
    skillID: string,
    articleID: string,
    skill:  {
      __typename: "Skill",
      id: string,
      title: string,
      user?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleSkillsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    article:  {
      __typename: "Article",
      id: string,
      title: string,
      body?: string | null,
      published?: boolean | null,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        description?: string | null,
        email: string,
        belongs?: string | null,
        join?: string | null,
        leave?: string | null,
        discordId?: string | null,
        github?: string | null,
        zenn?: string | null,
        qiita?: string | null,
        twitter?: string | null,
        slide?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      project?:  {
        __typename: "Project",
        id: string,
        title: string,
        description?: string | null,
        start?: string | null,
        end?: string | null,
        wanted?: boolean | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      event?:  {
        __typename: "Event",
        id: string,
        title: string,
        date?: Array< string > | null,
        description?: string | null,
        wanted?: boolean | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      skill?:  {
        __typename: "ModelArticleSkillsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userArticleId?: string | null,
      projectArticleId?: string | null,
      eventArticleId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateArticleSkillsSubscription = {
  onUpdateArticleSkills?:  {
    __typename: "ArticleSkills",
    id: string,
    skillID: string,
    articleID: string,
    skill:  {
      __typename: "Skill",
      id: string,
      title: string,
      user?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleSkillsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    article:  {
      __typename: "Article",
      id: string,
      title: string,
      body?: string | null,
      published?: boolean | null,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        description?: string | null,
        email: string,
        belongs?: string | null,
        join?: string | null,
        leave?: string | null,
        discordId?: string | null,
        github?: string | null,
        zenn?: string | null,
        qiita?: string | null,
        twitter?: string | null,
        slide?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      project?:  {
        __typename: "Project",
        id: string,
        title: string,
        description?: string | null,
        start?: string | null,
        end?: string | null,
        wanted?: boolean | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      event?:  {
        __typename: "Event",
        id: string,
        title: string,
        date?: Array< string > | null,
        description?: string | null,
        wanted?: boolean | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      skill?:  {
        __typename: "ModelArticleSkillsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userArticleId?: string | null,
      projectArticleId?: string | null,
      eventArticleId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteArticleSkillsSubscription = {
  onDeleteArticleSkills?:  {
    __typename: "ArticleSkills",
    id: string,
    skillID: string,
    articleID: string,
    skill:  {
      __typename: "Skill",
      id: string,
      title: string,
      user?:  {
        __typename: "ModelUserSkillsConnection",
        nextToken?: string | null,
      } | null,
      article?:  {
        __typename: "ModelArticleSkillsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    article:  {
      __typename: "Article",
      id: string,
      title: string,
      body?: string | null,
      published?: boolean | null,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        description?: string | null,
        email: string,
        belongs?: string | null,
        join?: string | null,
        leave?: string | null,
        discordId?: string | null,
        github?: string | null,
        zenn?: string | null,
        qiita?: string | null,
        twitter?: string | null,
        slide?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      project?:  {
        __typename: "Project",
        id: string,
        title: string,
        description?: string | null,
        start?: string | null,
        end?: string | null,
        wanted?: boolean | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      event?:  {
        __typename: "Event",
        id: string,
        title: string,
        date?: Array< string > | null,
        description?: string | null,
        wanted?: boolean | null,
        published?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      skill?:  {
        __typename: "ModelArticleSkillsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userArticleId?: string | null,
      projectArticleId?: string | null,
      eventArticleId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
