import * as React from "react";
import { graphql, Link } from "gatsby";
import { Layout, Seo } from "../components-gb";
import { Container, Text, Title } from "../components";
import styled from "styled-components";
import { Color, TextAlign } from "../enums";

const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - 170px);
	width: 100%;
`;

export const Button = styled(Link)`
	font-family: inherit;
	color: ${Color.White};
	font-size: 18px;
	line-height: 24px;
	font-weight: 500;
	text-decoration: none;
	background-color: ${Color.Primary};
	border: 0;
	border-radius: 3px;
	padding: 8px 16px;
	cursor: pointer;
	transition: color 0.1s ease, background-color 0.3s ease;

	&:hover {
		background-color: ${Color.Primary};

		svg {
			path {
				fill: #000;
			}
		}
	}
`;

const NotFoundPage = ({ data }) => {
	const { websiteCore, partners } = data.wpPage;
	return (
		<Layout data={{ websiteCore, partners }}>
			<Content>
				<Container gap={20}>
					<Title level={1} text={"404"} />
					<Title level={2} text={"Strony nie znaleziono"} />
					<Text
						text={"Możesz wrócić na stronę główną klikając przycisk poniżej"}
						align={TextAlign.Center}
					/>
					<Button to='/'>Strona główna</Button>
				</Container>
			</Content>
		</Layout>
	);
};

export const data = graphql`
	{
		wpPage(id: { eq: "cG9zdDoxMDM3" }) {
			websiteCore {
				sitedescription
				sitetitle
			}
			partners {
				partnerslist {
					partnersheight
					partnerspadding
					partnersimage {
						localFile {
							childImageSharp {
								gatsbyImageData
							}
						}
					}
				}
			}
		}
	}
`;

export const Head = () => <Seo />;

export default NotFoundPage;
