import { render, screen } from "@testing-library/react-native";
import RepositoryListContainer from ".";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };

      const testNodes = repositories.edges.map((edge) => {
        let node = edge.node;
        delete node.id;
        delete node.ownerAvatarUrl;
        return node;
      });

      const [firstRepositoryTestData, secondRepositoryTestData] = testNodes;

      render(<RepositoryListContainer repositories={repositories} />);

      const repositoryItems = screen.getAllByTestId("repositoryItem");
      const [firstRepository, secondRepository] = repositoryItems;

      expect(firstRepository).toHaveTextContent(
        firstRepositoryTestData.fullName,
        {
          exact: false,
        }
      );
      expect(firstRepository).toHaveTextContent(
        firstRepositoryTestData.description,
        {
          exact: false,
        }
      );
      expect(firstRepository).toHaveTextContent(
        firstRepositoryTestData.language,
        {
          exact: false,
        }
      );
      expect(firstRepository).toHaveTextContent(
        `${firstRepositoryTestData.stargazersCount}Stars`,
        {
          exact: false,
        }
      );
      expect(firstRepository).toHaveTextContent(
        `${firstRepositoryTestData.forksCount}Forks`,
        {
          exact: false,
        }
      );
      expect(firstRepository).toHaveTextContent(
        `${firstRepositoryTestData.reviewCount}Reviews`,
        {
          exact: false,
        }
      );
      expect(firstRepository).toHaveTextContent(
        `${firstRepositoryTestData.ratingAverage}Rating`,
        {
          exact: false,
        }
      );

      expect(secondRepository).toHaveTextContent(
        secondRepositoryTestData.fullName,
        {
          exact: false,
        }
      );
      expect(secondRepository).toHaveTextContent(
        secondRepositoryTestData.description,
        {
          exact: false,
        }
      );
      expect(secondRepository).toHaveTextContent(
        secondRepositoryTestData.language,
        {
          exact: false,
        }
      );
      expect(secondRepository).toHaveTextContent(
        `${secondRepositoryTestData.stargazersCount}Stars`,
        {
          exact: false,
        }
      );
      expect(secondRepository).toHaveTextContent(
        `${secondRepositoryTestData.forksCount}Forks`,
        {
          exact: false,
        }
      );
      expect(secondRepository).toHaveTextContent(
        `${secondRepositoryTestData.reviewCount}Reviews`,
        {
          exact: false,
        }
      );
      expect(secondRepository).toHaveTextContent(
        `${secondRepositoryTestData.ratingAverage}Rating`,
        {
          exact: false,
        }
      );
    });
  });
});
