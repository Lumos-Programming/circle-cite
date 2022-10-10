/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill {
    onCreateSkill {
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
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill {
    onUpdateSkill {
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
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill {
    onDeleteSkill {
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
export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle {
    onCreateArticle {
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
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle {
    onUpdateArticle {
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
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle {
    onDeleteArticle {
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
export const onCreatePortfolio = /* GraphQL */ `
  subscription OnCreatePortfolio($owner: String) {
    onCreatePortfolio(owner: $owner) {
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
export const onUpdatePortfolio = /* GraphQL */ `
  subscription OnUpdatePortfolio($owner: String) {
    onUpdatePortfolio(owner: $owner) {
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
export const onDeletePortfolio = /* GraphQL */ `
  subscription OnDeletePortfolio($owner: String) {
    onDeletePortfolio(owner: $owner) {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage {
    onCreateImage {
      id
      name
      path
      identityId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage {
    onUpdateImage {
      id
      name
      path
      identityId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage {
    onDeleteImage {
      id
      name
      path
      identityId
      createdAt
      updatedAt
    }
  }
`;
