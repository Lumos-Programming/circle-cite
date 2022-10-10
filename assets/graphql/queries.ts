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
          name
          createdAt
          updatedAt
          userSkillId
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
          articleImageId
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
          portfolioImageId
          owner
        }
        nextToken
      }
      project {
        items {
          id
          name
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
          name
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
      image {
        id
        name
        path
        identityId
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      skillUserId
      projectUserId
      eventUserId
      userImageId
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
        image {
          id
          name
          path
          identityId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        skillUserId
        projectUserId
        eventUserId
        userImageId
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
      name
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
          userImageId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      userSkillId
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
        name
        user {
          nextToken
        }
        createdAt
        updatedAt
        userSkillId
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
        image {
          id
          name
          path
          identityId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        skillUserId
        projectUserId
        eventUserId
        userImageId
        owner
      }
      project {
        id
        name
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
        createdAt
        updatedAt
        userProjectId
      }
      event {
        id
        name
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
        createdAt
        updatedAt
        userEventId
      }
      image {
        id
        name
        path
        identityId
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userArticleId
      projectArticleId
      eventArticleId
      articleImageId
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
          userImageId
          owner
        }
        project {
          id
          name
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
          name
          date
          description
          wanted
          published
          createdAt
          updatedAt
          userEventId
        }
        image {
          id
          name
          path
          identityId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userArticleId
        projectArticleId
        eventArticleId
        articleImageId
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
        image {
          id
          name
          path
          identityId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        skillUserId
        projectUserId
        eventUserId
        userImageId
        owner
      }
      image {
        id
        name
        path
        identityId
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userPortfolioId
      portfolioImageId
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
          userImageId
          owner
        }
        image {
          id
          name
          path
          identityId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userPortfolioId
        portfolioImageId
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
      name
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
          userImageId
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
          articleImageId
        }
        nextToken
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
        name
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
      name
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
          userImageId
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
          articleImageId
        }
        nextToken
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
        name
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
        createdAt
        updatedAt
        userEventId
      }
      nextToken
    }
  }
`;
export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
      id
      name
      path
      identityId
      createdAt
      updatedAt
    }
  }
`;
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        path
        identityId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
