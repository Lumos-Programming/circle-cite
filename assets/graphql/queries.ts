/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      description
      email
      belongs
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
          user {
            id
            name
            description
            email
            belongs
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
            link {
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
        nextToken
      }
      article {
        items {
          id
          title
          body
          published
          user {
            id
            name
            description
            email
            belongs
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
            link {
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
          user {
            id
            name
            description
            email
            belongs
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
            link {
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
        nextToken
      }
      project {
        items {
          id
          userID
          projectID
          user {
            id
            name
            description
            email
            belongs
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
            link {
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
        nextToken
      }
      event {
        items {
          id
          userID
          eventID
          user {
            id
            name
            description
            email
            belongs
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
            link {
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
        nextToken
      }
      link {
        items {
          id
          userID
          linkID
          user {
            id
            name
            description
            email
            belongs
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
            link {
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
          link {
            id
            url
            title
            image
            description
            user {
              nextToken
            }
            createdAt
            updatedAt
          }
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
        description
        email
        belongs
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
            user {
              id
              name
              description
              email
              belongs
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
            skill {
              id
              title
              createdAt
              updatedAt
            }
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
            user {
              id
              name
              description
              email
              belongs
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
            user {
              id
              name
              description
              email
              belongs
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
          nextToken
        }
        project {
          items {
            id
            userID
            projectID
            user {
              id
              name
              description
              email
              belongs
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
            user {
              id
              name
              description
              email
              belongs
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
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        link {
          items {
            id
            userID
            linkID
            user {
              id
              name
              description
              email
              belongs
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
            link {
              id
              url
              title
              image
              description
              createdAt
              updatedAt
            }
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
      nextToken
    }
  }
`;
export const getLink = /* GraphQL */ `
  query GetLink($id: ID!) {
    getLink(id: $id) {
      id
      url
      title
      image
      description
      user {
        items {
          id
          userID
          linkID
          user {
            id
            name
            description
            email
            belongs
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
            link {
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
          link {
            id
            url
            title
            image
            description
            user {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLinks = /* GraphQL */ `
  query ListLinks(
    $filter: ModelLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        title
        image
        description
        user {
          items {
            id
            userID
            linkID
            user {
              id
              name
              description
              email
              belongs
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
            link {
              id
              url
              title
              image
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
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
          userID
          skillID
          user {
            id
            name
            description
            email
            belongs
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
            link {
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
        nextToken
      }
      article {
        items {
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
              email
              belongs
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
            createdAt
            updatedAt
            userArticleId
            projectArticleId
            eventArticleId
          }
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
          items {
            id
            userID
            skillID
            user {
              id
              name
              description
              email
              belongs
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
            skill {
              id
              title
              createdAt
              updatedAt
            }
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
            skill {
              id
              title
              createdAt
              updatedAt
            }
            article {
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
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
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
        description
        email
        belongs
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
            user {
              id
              name
              description
              email
              belongs
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
            skill {
              id
              title
              createdAt
              updatedAt
            }
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
            user {
              id
              name
              description
              email
              belongs
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
            user {
              id
              name
              description
              email
              belongs
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
          nextToken
        }
        project {
          items {
            id
            userID
            projectID
            user {
              id
              name
              description
              email
              belongs
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
            user {
              id
              name
              description
              email
              belongs
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
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        link {
          items {
            id
            userID
            linkID
            user {
              id
              name
              description
              email
              belongs
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
            link {
              id
              url
              title
              image
              description
              createdAt
              updatedAt
            }
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
      project {
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
            user {
              id
              name
              description
              email
              belongs
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
            user {
              id
              name
              description
              email
              belongs
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
      event {
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
            user {
              id
              name
              description
              email
              belongs
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
            user {
              id
              name
              description
              email
              belongs
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
      skill {
        items {
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
              email
              belongs
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
            createdAt
            updatedAt
            userArticleId
            projectArticleId
            eventArticleId
          }
          createdAt
          updatedAt
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
          description
          email
          belongs
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
          link {
            items {
              id
              userID
              linkID
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
        project {
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
        event {
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
        skill {
          items {
            id
            skillID
            articleID
            skill {
              id
              title
              createdAt
              updatedAt
            }
            article {
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
            createdAt
            updatedAt
          }
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
        description
        email
        belongs
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
            user {
              id
              name
              description
              email
              belongs
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
            skill {
              id
              title
              createdAt
              updatedAt
            }
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
            user {
              id
              name
              description
              email
              belongs
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
            user {
              id
              name
              description
              email
              belongs
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
          nextToken
        }
        project {
          items {
            id
            userID
            projectID
            user {
              id
              name
              description
              email
              belongs
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
            user {
              id
              name
              description
              email
              belongs
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
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        link {
          items {
            id
            userID
            linkID
            user {
              id
              name
              description
              email
              belongs
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
            link {
              id
              url
              title
              image
              description
              createdAt
              updatedAt
            }
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
          description
          email
          belongs
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
          link {
            items {
              id
              userID
              linkID
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
          userID
          projectID
          user {
            id
            name
            description
            email
            belongs
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
            link {
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
        nextToken
      }
      article {
        items {
          id
          title
          body
          published
          user {
            id
            name
            description
            email
            belongs
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
            link {
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
          items {
            id
            userID
            projectID
            user {
              id
              name
              description
              email
              belongs
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
            user {
              id
              name
              description
              email
              belongs
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
          userID
          eventID
          user {
            id
            name
            description
            email
            belongs
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
            link {
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
        nextToken
      }
      article {
        items {
          id
          title
          body
          published
          user {
            id
            name
            description
            email
            belongs
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
            link {
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
          items {
            id
            userID
            eventID
            user {
              id
              name
              description
              email
              belongs
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
            user {
              id
              name
              description
              email
              belongs
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
      nextToken
    }
  }
`;
export const getUserSkills = /* GraphQL */ `
  query GetUserSkills($id: ID!) {
    getUserSkills(id: $id) {
      id
      userID
      skillID
      user {
        id
        name
        description
        email
        belongs
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
            user {
              id
              name
              description
              email
              belongs
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
            skill {
              id
              title
              createdAt
              updatedAt
            }
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
            user {
              id
              name
              description
              email
              belongs
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
            user {
              id
              name
              description
              email
              belongs
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
          nextToken
        }
        project {
          items {
            id
            userID
            projectID
            user {
              id
              name
              description
              email
              belongs
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
            user {
              id
              name
              description
              email
              belongs
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
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        link {
          items {
            id
            userID
            linkID
            user {
              id
              name
              description
              email
              belongs
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
            link {
              id
              url
              title
              image
              description
              createdAt
              updatedAt
            }
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
      skill {
        id
        title
        user {
          items {
            id
            userID
            skillID
            user {
              id
              name
              description
              email
              belongs
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
            skill {
              id
              title
              createdAt
              updatedAt
            }
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
            skill {
              id
              title
              createdAt
              updatedAt
            }
            article {
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
            createdAt
            updatedAt
          }
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
export const listUserSkills = /* GraphQL */ `
  query ListUserSkills(
    $filter: ModelUserSkillsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        skillID
        user {
          id
          name
          description
          email
          belongs
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
          link {
            items {
              id
              userID
              linkID
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
        skill {
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
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getProjectUsers = /* GraphQL */ `
  query GetProjectUsers($id: ID!) {
    getProjectUsers(id: $id) {
      id
      userID
      projectID
      user {
        id
        name
        description
        email
        belongs
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
            user {
              id
              name
              description
              email
              belongs
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
            skill {
              id
              title
              createdAt
              updatedAt
            }
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
            user {
              id
              name
              description
              email
              belongs
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
            user {
              id
              name
              description
              email
              belongs
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
          nextToken
        }
        project {
          items {
            id
            userID
            projectID
            user {
              id
              name
              description
              email
              belongs
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
            user {
              id
              name
              description
              email
              belongs
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
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        link {
          items {
            id
            userID
            linkID
            user {
              id
              name
              description
              email
              belongs
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
            link {
              id
              url
              title
              image
              description
              createdAt
              updatedAt
            }
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
      project {
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
            user {
              id
              name
              description
              email
              belongs
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
            user {
              id
              name
              description
              email
              belongs
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listProjectUsers = /* GraphQL */ `
  query ListProjectUsers(
    $filter: ModelProjectUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        projectID
        user {
          id
          name
          description
          email
          belongs
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
          link {
            items {
              id
              userID
              linkID
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
        project {
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
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getEventUsers = /* GraphQL */ `
  query GetEventUsers($id: ID!) {
    getEventUsers(id: $id) {
      id
      userID
      eventID
      user {
        id
        name
        description
        email
        belongs
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
            user {
              id
              name
              description
              email
              belongs
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
            skill {
              id
              title
              createdAt
              updatedAt
            }
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
            user {
              id
              name
              description
              email
              belongs
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
            user {
              id
              name
              description
              email
              belongs
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
          nextToken
        }
        project {
          items {
            id
            userID
            projectID
            user {
              id
              name
              description
              email
              belongs
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
            user {
              id
              name
              description
              email
              belongs
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
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        link {
          items {
            id
            userID
            linkID
            user {
              id
              name
              description
              email
              belongs
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
            link {
              id
              url
              title
              image
              description
              createdAt
              updatedAt
            }
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
      event {
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
            user {
              id
              name
              description
              email
              belongs
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
            user {
              id
              name
              description
              email
              belongs
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listEventUsers = /* GraphQL */ `
  query ListEventUsers(
    $filter: ModelEventUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        eventID
        user {
          id
          name
          description
          email
          belongs
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
          link {
            items {
              id
              userID
              linkID
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
        event {
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
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUserLinks = /* GraphQL */ `
  query GetUserLinks($id: ID!) {
    getUserLinks(id: $id) {
      id
      userID
      linkID
      user {
        id
        name
        description
        email
        belongs
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
            user {
              id
              name
              description
              email
              belongs
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
            skill {
              id
              title
              createdAt
              updatedAt
            }
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
            user {
              id
              name
              description
              email
              belongs
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
            user {
              id
              name
              description
              email
              belongs
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
          nextToken
        }
        project {
          items {
            id
            userID
            projectID
            user {
              id
              name
              description
              email
              belongs
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
            user {
              id
              name
              description
              email
              belongs
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
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        link {
          items {
            id
            userID
            linkID
            user {
              id
              name
              description
              email
              belongs
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
            link {
              id
              url
              title
              image
              description
              createdAt
              updatedAt
            }
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
      link {
        id
        url
        title
        image
        description
        user {
          items {
            id
            userID
            linkID
            user {
              id
              name
              description
              email
              belongs
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
            link {
              id
              url
              title
              image
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            owner
          }
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
export const listUserLinks = /* GraphQL */ `
  query ListUserLinks(
    $filter: ModelUserLinksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        linkID
        user {
          id
          name
          description
          email
          belongs
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
          link {
            items {
              id
              userID
              linkID
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
        link {
          id
          url
          title
          image
          description
          user {
            items {
              id
              userID
              linkID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getArticleSkills = /* GraphQL */ `
  query GetArticleSkills($id: ID!) {
    getArticleSkills(id: $id) {
      id
      skillID
      articleID
      skill {
        id
        title
        user {
          items {
            id
            userID
            skillID
            user {
              id
              name
              description
              email
              belongs
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
            skill {
              id
              title
              createdAt
              updatedAt
            }
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
            skill {
              id
              title
              createdAt
              updatedAt
            }
            article {
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
            createdAt
            updatedAt
          }
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
          email
          belongs
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
          link {
            items {
              id
              userID
              linkID
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
        project {
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
        event {
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
        skill {
          items {
            id
            skillID
            articleID
            skill {
              id
              title
              createdAt
              updatedAt
            }
            article {
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
            createdAt
            updatedAt
          }
          nextToken
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
export const listArticleSkills = /* GraphQL */ `
  query ListArticleSkills(
    $filter: ModelArticleSkillsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticleSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        skillID
        articleID
        skill {
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
        article {
          id
          title
          body
          published
          user {
            id
            name
            description
            email
            belongs
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
            link {
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
          createdAt
          updatedAt
          userArticleId
          projectArticleId
          eventArticleId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
