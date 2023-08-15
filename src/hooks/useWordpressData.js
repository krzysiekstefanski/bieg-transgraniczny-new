import { graphql, useStaticQuery } from 'gatsby';

export const useWordPressPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpPost(sort: { fields: [date], order: DESC }) {
        edges {
          node {
            title
            excerpt
            slug
            date(formatString: "DD-MM-YYYY")
          }
        }
      }
      allWpPage(sort: { fields: [date], order: DESC }) {
        edges {
          node {
            content
          }
        }
      }
    }
  `);

  return data.allWpPage.edges;
};