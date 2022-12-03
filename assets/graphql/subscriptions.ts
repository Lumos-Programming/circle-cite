/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
            likes
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
            likes
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
            likes
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
export const onCreateLink = /* GraphQL */ `
  subscription OnCreateLink {
    onCreateLink {
      id
      url
      likes
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
            likes
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
export const onUpdateLink = /* GraphQL */ `
  subscription OnUpdateLink {
    onUpdateLink {
      id
      url
      likes
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
            likes
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
export const onDeleteLink = /* GraphQL */ `
  subscription OnDeleteLink {
    onDeleteLink {
      id
      url
      likes
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
            likes
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
export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill {
    onCreateSkill {
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
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill {
    onUpdateSkill {
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
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill {
    onDeleteSkill {
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
              likes
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
              likes
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
              likes
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
              likes
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
              likes
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
              likes
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
export const onCreateUserSkills = /* GraphQL */ `
  subscription OnCreateUserSkills($owner: String) {
    onCreateUserSkills(owner: $owner) {
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
              likes
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
export const onUpdateUserSkills = /* GraphQL */ `
  subscription OnUpdateUserSkills($owner: String) {
    onUpdateUserSkills(owner: $owner) {
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
              likes
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
export const onDeleteUserSkills = /* GraphQL */ `
  subscription OnDeleteUserSkills($owner: String) {
    onDeleteUserSkills(owner: $owner) {
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
              likes
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
export const onCreateProjectUsers = /* GraphQL */ `
  subscription OnCreateProjectUsers($owner: String) {
    onCreateProjectUsers(owner: $owner) {
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
              likes
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
export const onUpdateProjectUsers = /* GraphQL */ `
  subscription OnUpdateProjectUsers($owner: String) {
    onUpdateProjectUsers(owner: $owner) {
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
              likes
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
export const onDeleteProjectUsers = /* GraphQL */ `
  subscription OnDeleteProjectUsers($owner: String) {
    onDeleteProjectUsers(owner: $owner) {
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
              likes
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
export const onCreateEventUsers = /* GraphQL */ `
  subscription OnCreateEventUsers($owner: String) {
    onCreateEventUsers(owner: $owner) {
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
              likes
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
export const onUpdateEventUsers = /* GraphQL */ `
  subscription OnUpdateEventUsers($owner: String) {
    onUpdateEventUsers(owner: $owner) {
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
              likes
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
export const onDeleteEventUsers = /* GraphQL */ `
  subscription OnDeleteEventUsers($owner: String) {
    onDeleteEventUsers(owner: $owner) {
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
              likes
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
export const onCreateUserLinks = /* GraphQL */ `
  subscription OnCreateUserLinks($owner: String) {
    onCreateUserLinks(owner: $owner) {
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
              likes
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
        likes
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
              likes
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
export const onUpdateUserLinks = /* GraphQL */ `
  subscription OnUpdateUserLinks($owner: String) {
    onUpdateUserLinks(owner: $owner) {
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
              likes
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
        likes
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
              likes
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
export const onDeleteUserLinks = /* GraphQL */ `
  subscription OnDeleteUserLinks($owner: String) {
    onDeleteUserLinks(owner: $owner) {
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
              likes
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
        likes
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
              likes
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
export const onCreateArticleSkills = /* GraphQL */ `
  subscription OnCreateArticleSkills {
    onCreateArticleSkills {
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
export const onUpdateArticleSkills = /* GraphQL */ `
  subscription OnUpdateArticleSkills {
    onUpdateArticleSkills {
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
export const onDeleteArticleSkills = /* GraphQL */ `
  subscription OnDeleteArticleSkills {
    onDeleteArticleSkills {
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
