/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createSkill = /* GraphQL */ `
  mutation CreateSkill(
    $input: CreateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    createSkill(input: $input, condition: $condition) {
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
export const updateSkill = /* GraphQL */ `
  mutation UpdateSkill(
    $input: UpdateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    updateSkill(input: $input, condition: $condition) {
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
export const deleteSkill = /* GraphQL */ `
  mutation DeleteSkill(
    $input: DeleteSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    deleteSkill(input: $input, condition: $condition) {
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
export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
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
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle(
    $input: UpdateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    updateArticle(input: $input, condition: $condition) {
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
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle(
    $input: DeleteArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    deleteArticle(input: $input, condition: $condition) {
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
export const createPortfolio = /* GraphQL */ `
  mutation CreatePortfolio(
    $input: CreatePortfolioInput!
    $condition: ModelPortfolioConditionInput
  ) {
    createPortfolio(input: $input, condition: $condition) {
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
export const updatePortfolio = /* GraphQL */ `
  mutation UpdatePortfolio(
    $input: UpdatePortfolioInput!
    $condition: ModelPortfolioConditionInput
  ) {
    updatePortfolio(input: $input, condition: $condition) {
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
export const deletePortfolio = /* GraphQL */ `
  mutation DeletePortfolio(
    $input: DeletePortfolioInput!
    $condition: ModelPortfolioConditionInput
  ) {
    deletePortfolio(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
      id
      name
      path
      identityId
      createdAt
      updatedAt
    }
  }
`;
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
      id
      name
      path
      identityId
      createdAt
      updatedAt
    }
  }
`;
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
      id
      name
      path
      identityId
      createdAt
      updatedAt
    }
  }
`;
