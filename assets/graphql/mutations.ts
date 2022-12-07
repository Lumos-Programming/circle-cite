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
      description
      email
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      description
      email
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      description
      email
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
export const createLink = /* GraphQL */ `
  mutation CreateLink(
    $input: CreateLinkInput!
    $condition: ModelLinkConditionInput
  ) {
    createLink(input: $input, condition: $condition) {
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
export const updateLink = /* GraphQL */ `
  mutation UpdateLink(
    $input: UpdateLinkInput!
    $condition: ModelLinkConditionInput
  ) {
    updateLink(input: $input, condition: $condition) {
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
export const deleteLink = /* GraphQL */ `
  mutation DeleteLink(
    $input: DeleteLinkInput!
    $condition: ModelLinkConditionInput
  ) {
    deleteLink(input: $input, condition: $condition) {
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
export const createSkill = /* GraphQL */ `
  mutation CreateSkill(
    $input: CreateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    createSkill(input: $input, condition: $condition) {
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
export const updateSkill = /* GraphQL */ `
  mutation UpdateSkill(
    $input: UpdateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    updateSkill(input: $input, condition: $condition) {
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
export const deleteSkill = /* GraphQL */ `
  mutation DeleteSkill(
    $input: DeleteSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    deleteSkill(input: $input, condition: $condition) {
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
        description
        email
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
        description
        email
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
        description
        email
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
        description
        email
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
        description
        email
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
        description
        email
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createUserSkills = /* GraphQL */ `
  mutation CreateUserSkills(
    $input: CreateUserSkillsInput!
    $condition: ModelUserSkillsConditionInput
  ) {
    createUserSkills(input: $input, condition: $condition) {
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
export const updateUserSkills = /* GraphQL */ `
  mutation UpdateUserSkills(
    $input: UpdateUserSkillsInput!
    $condition: ModelUserSkillsConditionInput
  ) {
    updateUserSkills(input: $input, condition: $condition) {
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
export const deleteUserSkills = /* GraphQL */ `
  mutation DeleteUserSkills(
    $input: DeleteUserSkillsInput!
    $condition: ModelUserSkillsConditionInput
  ) {
    deleteUserSkills(input: $input, condition: $condition) {
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
export const createProjectUsers = /* GraphQL */ `
  mutation CreateProjectUsers(
    $input: CreateProjectUsersInput!
    $condition: ModelProjectUsersConditionInput
  ) {
    createProjectUsers(input: $input, condition: $condition) {
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
export const updateProjectUsers = /* GraphQL */ `
  mutation UpdateProjectUsers(
    $input: UpdateProjectUsersInput!
    $condition: ModelProjectUsersConditionInput
  ) {
    updateProjectUsers(input: $input, condition: $condition) {
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
export const deleteProjectUsers = /* GraphQL */ `
  mutation DeleteProjectUsers(
    $input: DeleteProjectUsersInput!
    $condition: ModelProjectUsersConditionInput
  ) {
    deleteProjectUsers(input: $input, condition: $condition) {
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
export const createEventUsers = /* GraphQL */ `
  mutation CreateEventUsers(
    $input: CreateEventUsersInput!
    $condition: ModelEventUsersConditionInput
  ) {
    createEventUsers(input: $input, condition: $condition) {
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
export const updateEventUsers = /* GraphQL */ `
  mutation UpdateEventUsers(
    $input: UpdateEventUsersInput!
    $condition: ModelEventUsersConditionInput
  ) {
    updateEventUsers(input: $input, condition: $condition) {
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
export const deleteEventUsers = /* GraphQL */ `
  mutation DeleteEventUsers(
    $input: DeleteEventUsersInput!
    $condition: ModelEventUsersConditionInput
  ) {
    deleteEventUsers(input: $input, condition: $condition) {
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
export const createUserLinks = /* GraphQL */ `
  mutation CreateUserLinks(
    $input: CreateUserLinksInput!
    $condition: ModelUserLinksConditionInput
  ) {
    createUserLinks(input: $input, condition: $condition) {
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
export const updateUserLinks = /* GraphQL */ `
  mutation UpdateUserLinks(
    $input: UpdateUserLinksInput!
    $condition: ModelUserLinksConditionInput
  ) {
    updateUserLinks(input: $input, condition: $condition) {
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
export const deleteUserLinks = /* GraphQL */ `
  mutation DeleteUserLinks(
    $input: DeleteUserLinksInput!
    $condition: ModelUserLinksConditionInput
  ) {
    deleteUserLinks(input: $input, condition: $condition) {
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
export const createArticleSkills = /* GraphQL */ `
  mutation CreateArticleSkills(
    $input: CreateArticleSkillsInput!
    $condition: ModelArticleSkillsConditionInput
  ) {
    createArticleSkills(input: $input, condition: $condition) {
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
export const updateArticleSkills = /* GraphQL */ `
  mutation UpdateArticleSkills(
    $input: UpdateArticleSkillsInput!
    $condition: ModelArticleSkillsConditionInput
  ) {
    updateArticleSkills(input: $input, condition: $condition) {
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
export const deleteArticleSkills = /* GraphQL */ `
  mutation DeleteArticleSkills(
    $input: DeleteArticleSkillsInput!
    $condition: ModelArticleSkillsConditionInput
  ) {
    deleteArticleSkills(input: $input, condition: $condition) {
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
