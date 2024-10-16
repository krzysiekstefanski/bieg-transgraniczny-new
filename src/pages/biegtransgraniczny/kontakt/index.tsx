import React from "react";
import styled from "styled-components";
import {
	Layout,
	Seo,
	Container,
	PlayersList,
	ContactSection,
} from "../../../components-gb";
import { graphql } from "gatsby";
import { EventTheme } from "../../../enums-gb";
import { StyledComponent } from "../../../interfaces";

const Wrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	width: 100%;
	height: 130vw;
	max-height: 1200px;
	margin-bottom: 24px;
`;

const KontaktTransgranicznyPage: React.FC = ({ data }): JSX.Element => {
	const { host, events, partners } = data.mainPage;
	const { pageCore, logo, top, banner, verification, gallery } =
		data.transgranicznyPage;
	const theme = EventTheme.Transgraniczny;

	return (
		<Layout data={{ pageCore, partners, logo }}>
			<ContactSection data={[]} theme={theme} />
		</Layout>
	);
};

export const data = graphql`
	{
		mainPage: wpPage(id: { eq: "cG9zdDoxMDM3" }) {
			host {
				hosttitle
				hostsubtitle
				hostimage {
					localFile {
						childImageSharp {
							gatsbyImageData
						}
					}
				}
				hostimagemobile {
					localFile {
						childImageSharp {
							gatsbyImageData
						}
					}
				}
			}
			events {
				eventone {
					eventonename
					eventonephoto {
						localFile {
							childImageSharp {
								gatsbyImageData
							}
						}
					}
					eventonecolor
				}
				eventtwo {
					eventtwoname
					eventtwophoto {
						localFile {
							childImageSharp {
								gatsbyImageData
							}
						}
					}
					eventtwocolor
				}
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
		transgranicznyPage: wpPage(id: { eq: "cG9zdDo3MzM=" }) {
			pageCore {
				pagetitle
				pagedescription
			}
			logo {
				logophoto {
					localFile {
						childImageSharp {
							gatsbyImageData
						}
					}
				}
				logotext
			}
			top {
				herotitle
				herosubtitle
				herotext
				heroimage {
					localFile {
						childImageSharp {
							gatsbyImageData
						}
					}
				}
			}
			banner {
				bannertext
				bannerimage {
					localFile {
						childrenImageSharp {
							gatsbyImageData
						}
					}
				}
			}
			verification {
				verificationtitle
				verificationtext
				verificationimage {
					localFile {
						childrenImageSharp {
							gatsbyImageData
						}
					}
				}
			}
			gallery {
				gallerytitle
				galleryimages {
					localFile {
						childrenImageSharp {
							gatsbyImageData
						}
					}
				}
				gallerylinktoall
			}
		}
	}
`;

export const Head = () => <Seo />;

export default KontaktTransgranicznyPage;
