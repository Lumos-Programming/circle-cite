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
export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill {
    onCreateSkill {
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
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill {
    onUpdateSkill {
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
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill {
    onDeleteSkill {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
