/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      belongs
      discordId
      github
      zenn
      qiita
      twitter
      slide
      skill {
        items {
          id
          title
          createdAt
          updatedAt
          userSkillId
          articleSkillId
        }
        nextToken
      }
      article {
        items {
          id
          title
          body
          published
          createdAt
          updatedAt
          userArticleId
          projectArticleId
          eventArticleId
        }
        nextToken
      }
      portfolio {
        items {
          id
          title
          url
          description
          published
          createdAt
          updatedAt
          userPortfolioId
          owner
        }
        nextToken
      }
      project {
        items {
          id
          title
          description
          start
          end
          wanted
          published
          createdAt
          updatedAt
          userProjectId
        }
        nextToken
      }
      event {
        items {
          id
          title
          date
          description
          wanted
          published
          createdAt
          updatedAt
          userEventId
        }
        nextToken
      }
      file {
        bucket
        key
        region
      }
      createdAt
      updatedAt
      skillUserId
      projectUserId
      eventUserId
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        belongs
        discordId
        github
        zenn
        qiita
        twitter
        slide
        skill {
          nextToken
        }
        article {
          nextToken
        }
        portfolio {
          nextToken
        }
        project {
          nextToken
        }
        event {
          nextToken
        }
        file {
          bucket
          key
          region
        }
        createdAt
        updatedAt
        skillUserId
        projectUserId
        eventUserId
        owner
      }
      nextToken
    }
  }
`;
export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
      id
      title
      user {
        items {
          id
          name
          email
          belongs
          discordId
          github
          zenn
          qiita
          twitter
          slide
          createdAt
          updatedAt
          skillUserId
          projectUserId
          eventUserId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      userSkillId
      articleSkillId
    }
  }
`;
export const listSkills = /* GraphQL */ `
  query ListSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        user {
          nextToken
        }
        createdAt
        updatedAt
        userSkillId
        articleSkillId
      }
      nextToken
    }
  }
`;
export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      id
      title
      body
      published
      user {
        id
        name
        email
        belongs
        discordId
        github
        zenn
        qiita
        twitter
        slide
        skill {
          nextToken
        }
        article {
          nextToken
        }
        portfolio {
          nextToken
        }
        project {
          nextToken
        }
        event {
          nextToken
        }
        file {
          bucket
          key
          region
        }
        createdAt
        updatedAt
        skillUserId
        projectUserId
        eventUserId
        owner
      }
      project {
        id
        title
        description
        start
        end
        wanted
        published
        user {
          nextToken
        }
        article {
          nextToken
        }
        file {
          bucket
          key
          region
        }
        createdAt
        updatedAt
        userProjectId
      }
      event {
        id
        title
        date
        description
        wanted
        published
        user {
          nextToken
        }
        article {
          nextToken
        }
        file {
          bucket
          key
          region
        }
        createdAt
        updatedAt
        userEventId
      }
      skill {
        items {
          id
          title
          createdAt
          updatedAt
          userSkillId
          articleSkillId
        }
        nextToken
      }
      createdAt
      updatedAt
      userArticleId
      projectArticleId
      eventArticleId
    }
  }
`;
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        body
        published
        user {
          id
          name
          email
          belongs
          discordId
          github
          zenn
          qiita
          twitter
          slide
          createdAt
          updatedAt
          skillUserId
          projectUserId
          eventUserId
          owner
        }
        project {
          id
          title
          description
          start
          end
          wanted
          published
          createdAt
          updatedAt
          userProjectId
        }
        event {
          id
          title
          date
          description
          wanted
          published
          createdAt
          updatedAt
          userEventId
        }
        skill {
          nextToken
        }
        createdAt
        updatedAt
        userArticleId
        projectArticleId
        eventArticleId
      }
      nextToken
    }
  }
`;
export const getPortfolio = /* GraphQL */ `
  query GetPortfolio($id: ID!) {
    getPortfolio(id: $id) {
      id
      title
      url
      description
      published
      user {
        id
        name
        email
        belongs
        discordId
        github
        zenn
        qiita
        twitter
        slide
        skill {
          nextToken
        }
        article {
          nextToken
        }
        portfolio {
          nextToken
        }
        project {
          nextToken
        }
        event {
          nextToken
        }
        file {
          bucket
          key
          region
        }
        createdAt
        updatedAt
        skillUserId
        projectUserId
        eventUserId
        owner
      }
      file {
        bucket
        key
        region
      }
      createdAt
      updatedAt
      userPortfolioId
      owner
    }
  }
`;
export const listPortfolios = /* GraphQL */ `
  query ListPortfolios(
    $filter: ModelPortfolioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPortfolios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        url
        description
        published
        user {
          id
          name
          email
          belongs
          discordId
          github
          zenn
          qiita
          twitter
          slide
          createdAt
          updatedAt
          skillUserId
          projectUserId
          eventUserId
          owner
        }
        file {
          bucket
          key
          region
        }
        createdAt
        updatedAt
        userPortfolioId
        owner
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      title
      description
      start
      end
      wanted
      published
      user {
        items {
          id
          name
          email
          belongs
          discordId
          github
          zenn
          qiita
          twitter
          slide
          createdAt
          updatedAt
          skillUserId
          projectUserId
          eventUserId
          owner
        }
        nextToken
      }
      article {
        items {
          id
          title
          body
          published
          createdAt
          updatedAt
          userArticleId
          projectArticleId
          eventArticleId
        }
        nextToken
      }
      file {
        bucket
        key
        region
      }
      createdAt
      updatedAt
      userProjectId
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        start
        end
        wanted
        published
        user {
          nextToken
        }
        article {
          nextToken
        }
        file {
          bucket
          key
          region
        }
        createdAt
        updatedAt
        userProjectId
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      title
      date
      description
      wanted
      published
      user {
        items {
          id
          name
          email
          belongs
          discordId
          github
          zenn
          qiita
          twitter
          slide
          createdAt
          updatedAt
          skillUserId
          projectUserId
          eventUserId
          owner
        }
        nextToken
      }
      article {
        items {
          id
          title
          body
          published
          createdAt
          updatedAt
          userArticleId
          projectArticleId
          eventArticleId
        }
        nextToken
      }
      file {
        bucket
        key
        region
      }
      createdAt
      updatedAt
      userEventId
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        date
        description
        wanted
        published
        user {
          nextToken
        }
        article {
          nextToken
        }
        file {
          bucket
          key
          region
        }
        createdAt
        updatedAt
        userEventId
      }
      nextToken
    }
  }
`;
