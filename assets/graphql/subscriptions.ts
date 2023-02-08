/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
      id
      name
      description
      forRecruitment
      history
      email
      university
      faculty
      grade
      jobHunting
      join
      leave
      discordId
      github
      zenn
      qiita
      twitter
      slide
      skill {
        items {
          id
          userID
          skillID
          createdAt
          updatedAt
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
          userID
          projectID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      event {
        items {
          id
          userID
          eventID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      file {
        key
        name
        size
        type
        identityId
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
      id
      name
      description
      forRecruitment
      history
      email
      university
      faculty
      grade
      jobHunting
      join
      leave
      discordId
      github
      zenn
      qiita
      twitter
      slide
      skill {
        items {
          id
          userID
          skillID
          createdAt
          updatedAt
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
          userID
          projectID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      event {
        items {
          id
          userID
          eventID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      file {
        key
        name
        size
        type
        identityId
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
      id
      name
      description
      forRecruitment
      history
      email
      university
      faculty
      grade
      jobHunting
      join
      leave
      discordId
      github
      zenn
      qiita
      twitter
      slide
      skill {
        items {
          id
          userID
          skillID
          createdAt
          updatedAt
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
          userID
          projectID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      event {
        items {
          id
          userID
          eventID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      file {
        key
        name
        size
        type
        identityId
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill($filter: ModelSubscriptionSkillFilterInput) {
    onCreateSkill(filter: $filter) {
      id
      title
      user {
        items {
          id
          userID
          skillID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      article {
        items {
          id
          skillID
          articleID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill($filter: ModelSubscriptionSkillFilterInput) {
    onUpdateSkill(filter: $filter) {
      id
      title
      user {
        items {
          id
          userID
          skillID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      article {
        items {
          id
          skillID
          articleID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill($filter: ModelSubscriptionSkillFilterInput) {
    onDeleteSkill(filter: $filter) {
      id
      title
      user {
        items {
          id
          userID
          skillID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      article {
        items {
          id
          skillID
          articleID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle($filter: ModelSubscriptionArticleFilterInput) {
    onCreateArticle(filter: $filter) {
      id
      title
      body
      published
      user {
        id
        name
        description
        forRecruitment
        history
        email
        university
        faculty
        grade
        jobHunting
        join
        leave
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
      }
      skill {
        items {
          id
          skillID
          articleID
          createdAt
          updatedAt
        }
        nextToken
      }
      file {
        key
        name
        size
        type
        identityId
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
  subscription OnUpdateArticle($filter: ModelSubscriptionArticleFilterInput) {
    onUpdateArticle(filter: $filter) {
      id
      title
      body
      published
      user {
        id
        name
        description
        forRecruitment
        history
        email
        university
        faculty
        grade
        jobHunting
        join
        leave
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
      }
      skill {
        items {
          id
          skillID
          articleID
          createdAt
          updatedAt
        }
        nextToken
      }
      file {
        key
        name
        size
        type
        identityId
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
  subscription OnDeleteArticle($filter: ModelSubscriptionArticleFilterInput) {
    onDeleteArticle(filter: $filter) {
      id
      title
      body
      published
      user {
        id
        name
        description
        forRecruitment
        history
        email
        university
        faculty
        grade
        jobHunting
        join
        leave
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
      }
      skill {
        items {
          id
          skillID
          articleID
          createdAt
          updatedAt
        }
        nextToken
      }
      file {
        key
        name
        size
        type
        identityId
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
  subscription OnCreatePortfolio(
    $filter: ModelSubscriptionPortfolioFilterInput
    $owner: String
  ) {
    onCreatePortfolio(filter: $filter, owner: $owner) {
      id
      title
      url
      description
      published
      user {
        id
        name
        description
        forRecruitment
        history
        email
        university
        faculty
        grade
        jobHunting
        join
        leave
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
        owner
      }
      file {
        key
        name
        size
        type
        identityId
      }
      createdAt
      updatedAt
      userPortfolioId
      owner
    }
  }
`;
export const onUpdatePortfolio = /* GraphQL */ `
  subscription OnUpdatePortfolio(
    $filter: ModelSubscriptionPortfolioFilterInput
    $owner: String
  ) {
    onUpdatePortfolio(filter: $filter, owner: $owner) {
      id
      title
      url
      description
      published
      user {
        id
        name
        description
        forRecruitment
        history
        email
        university
        faculty
        grade
        jobHunting
        join
        leave
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
        owner
      }
      file {
        key
        name
        size
        type
        identityId
      }
      createdAt
      updatedAt
      userPortfolioId
      owner
    }
  }
`;
export const onDeletePortfolio = /* GraphQL */ `
  subscription OnDeletePortfolio(
    $filter: ModelSubscriptionPortfolioFilterInput
    $owner: String
  ) {
    onDeletePortfolio(filter: $filter, owner: $owner) {
      id
      title
      url
      description
      published
      user {
        id
        name
        description
        forRecruitment
        history
        email
        university
        faculty
        grade
        jobHunting
        join
        leave
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
        owner
      }
      file {
        key
        name
        size
        type
        identityId
      }
      createdAt
      updatedAt
      userPortfolioId
      owner
    }
  }
`;
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
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
          userID
          projectID
          createdAt
          updatedAt
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
        key
        name
        size
        type
        identityId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
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
          userID
          projectID
          createdAt
          updatedAt
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
        key
        name
        size
        type
        identityId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
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
          userID
          projectID
          createdAt
          updatedAt
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
        key
        name
        size
        type
        identityId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
      id
      title
      date
      description
      wanted
      published
      user {
        items {
          id
          userID
          eventID
          createdAt
          updatedAt
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
        key
        name
        size
        type
        identityId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
      id
      title
      date
      description
      wanted
      published
      user {
        items {
          id
          userID
          eventID
          createdAt
          updatedAt
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
        key
        name
        size
        type
        identityId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
      id
      title
      date
      description
      wanted
      published
      user {
        items {
          id
          userID
          eventID
          createdAt
          updatedAt
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
        key
        name
        size
        type
        identityId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserSkills = /* GraphQL */ `
  subscription OnCreateUserSkills(
    $filter: ModelSubscriptionUserSkillsFilterInput
    $owner: String
  ) {
    onCreateUserSkills(filter: $filter, owner: $owner) {
      id
      userID
      skillID
      user {
        id
        name
        description
        forRecruitment
        history
        email
        university
        faculty
        grade
        jobHunting
        join
        leave
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
        owner
      }
      skill {
        id
        title
        user {
          nextToken
        }
        article {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUserSkills = /* GraphQL */ `
  subscription OnUpdateUserSkills(
    $filter: ModelSubscriptionUserSkillsFilterInput
    $owner: String
  ) {
    onUpdateUserSkills(filter: $filter, owner: $owner) {
      id
      userID
      skillID
      user {
        id
        name
        description
        forRecruitment
        history
        email
        university
        faculty
        grade
        jobHunting
        join
        leave
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
        owner
      }
      skill {
        id
        title
        user {
          nextToken
        }
        article {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUserSkills = /* GraphQL */ `
  subscription OnDeleteUserSkills(
    $filter: ModelSubscriptionUserSkillsFilterInput
    $owner: String
  ) {
    onDeleteUserSkills(filter: $filter, owner: $owner) {
      id
      userID
      skillID
      user {
        id
        name
        description
        forRecruitment
        history
        email
        university
        faculty
        grade
        jobHunting
        join
        leave
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
        owner
      }
      skill {
        id
        title
        user {
          nextToken
        }
        article {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateProjectUsers = /* GraphQL */ `
  subscription OnCreateProjectUsers(
    $filter: ModelSubscriptionProjectUsersFilterInput
    $owner: String
  ) {
    onCreateProjectUsers(filter: $filter, owner: $owner) {
      id
      userID
      projectID
      user {
        id
        name
        description
        forRecruitment
        history
        email
        university
        faculty
        grade
        jobHunting
        join
        leave
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateProjectUsers = /* GraphQL */ `
  subscription OnUpdateProjectUsers(
    $filter: ModelSubscriptionProjectUsersFilterInput
    $owner: String
  ) {
    onUpdateProjectUsers(filter: $filter, owner: $owner) {
      id
      userID
      projectID
      user {
        id
        name
        description
        forRecruitment
        history
        email
        university
        faculty
        grade
        jobHunting
        join
        leave
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteProjectUsers = /* GraphQL */ `
  subscription OnDeleteProjectUsers(
    $filter: ModelSubscriptionProjectUsersFilterInput
    $owner: String
  ) {
    onDeleteProjectUsers(filter: $filter, owner: $owner) {
      id
      userID
      projectID
      user {
        id
        name
        description
        forRecruitment
        history
        email
        university
        faculty
        grade
        jobHunting
        join
        leave
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateEventUsers = /* GraphQL */ `
  subscription OnCreateEventUsers(
    $filter: ModelSubscriptionEventUsersFilterInput
    $owner: String
  ) {
    onCreateEventUsers(filter: $filter, owner: $owner) {
      id
      userID
      eventID
      user {
        id
        name
        description
        forRecruitment
        history
        email
        university
        faculty
        grade
        jobHunting
        join
        leave
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
        owner
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateEventUsers = /* GraphQL */ `
  subscription OnUpdateEventUsers(
    $filter: ModelSubscriptionEventUsersFilterInput
    $owner: String
  ) {
    onUpdateEventUsers(filter: $filter, owner: $owner) {
      id
      userID
      eventID
      user {
        id
        name
        description
        forRecruitment
        history
        email
        university
        faculty
        grade
        jobHunting
        join
        leave
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
        owner
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteEventUsers = /* GraphQL */ `
  subscription OnDeleteEventUsers(
    $filter: ModelSubscriptionEventUsersFilterInput
    $owner: String
  ) {
    onDeleteEventUsers(filter: $filter, owner: $owner) {
      id
      userID
      eventID
      user {
        id
        name
        description
        forRecruitment
        history
        email
        university
        faculty
        grade
        jobHunting
        join
        leave
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
        owner
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
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateArticleSkills = /* GraphQL */ `
  subscription OnCreateArticleSkills(
    $filter: ModelSubscriptionArticleSkillsFilterInput
  ) {
    onCreateArticleSkills(filter: $filter) {
      id
      skillID
      articleID
      skill {
        id
        title
        user {
          nextToken
        }
        article {
          nextToken
        }
        createdAt
        updatedAt
      }
      article {
        id
        title
        body
        published
        user {
          id
          name
          description
          forRecruitment
          history
          email
          university
          faculty
          grade
          jobHunting
          join
          leave
          discordId
          github
          zenn
          qiita
          twitter
          slide
          createdAt
          updatedAt
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
        }
        skill {
          nextToken
        }
        file {
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
        userArticleId
        projectArticleId
        eventArticleId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateArticleSkills = /* GraphQL */ `
  subscription OnUpdateArticleSkills(
    $filter: ModelSubscriptionArticleSkillsFilterInput
  ) {
    onUpdateArticleSkills(filter: $filter) {
      id
      skillID
      articleID
      skill {
        id
        title
        user {
          nextToken
        }
        article {
          nextToken
        }
        createdAt
        updatedAt
      }
      article {
        id
        title
        body
        published
        user {
          id
          name
          description
          forRecruitment
          history
          email
          university
          faculty
          grade
          jobHunting
          join
          leave
          discordId
          github
          zenn
          qiita
          twitter
          slide
          createdAt
          updatedAt
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
        }
        skill {
          nextToken
        }
        file {
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
        userArticleId
        projectArticleId
        eventArticleId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteArticleSkills = /* GraphQL */ `
  subscription OnDeleteArticleSkills(
    $filter: ModelSubscriptionArticleSkillsFilterInput
  ) {
    onDeleteArticleSkills(filter: $filter) {
      id
      skillID
      articleID
      skill {
        id
        title
        user {
          nextToken
        }
        article {
          nextToken
        }
        createdAt
        updatedAt
      }
      article {
        id
        title
        body
        published
        user {
          id
          name
          description
          forRecruitment
          history
          email
          university
          faculty
          grade
          jobHunting
          join
          leave
          discordId
          github
          zenn
          qiita
          twitter
          slide
          createdAt
          updatedAt
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
        }
        skill {
          nextToken
        }
        file {
          key
          name
          size
          type
          identityId
        }
        createdAt
        updatedAt
        userArticleId
        projectArticleId
        eventArticleId
      }
      createdAt
      updatedAt
    }
  }
`;
