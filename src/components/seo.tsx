/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

function Seo() {
	const { site, wpPage } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
				wpPage {
					websiteCore {
						sitedescription
						sitetitle
					}
				}
			}
		`
	);

	const metaTitle = wpPage.websiteCore.sitetitle || site.siteMetadata.title;
	const metaDescription =
		wpPage.websiteCore.sitedescription || site.siteMetadata.description;

	return (
		<>
			<title>{metaTitle}</title>
			<meta name='description' content={metaDescription} />
			<meta property='og:title' content={metaTitle} />
			<meta property='og:description' content={metaDescription} />
			<meta property='og:type' content='website' />
			<meta name='twitter:card' content='summary' />
			<meta name='twitter:creator' content={`Krzysztof Stefański`} />
			<meta name='twitter:title' content={metaTitle} />
			<meta name='twitter:description' content={metaDescription} />
		</>
	);
}

export default Seo;
