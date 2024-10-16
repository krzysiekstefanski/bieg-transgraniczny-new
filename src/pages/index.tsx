import React from "react";

import { Layout, Seo } from "../components-gb";
import { graphql } from "gatsby";
import { MainSection } from "../components-gb";

const IndexPage: React.FC = ({ data }): JSX.Element => {
	const { websiteCore, host, events, partners } = data.mainPage;
	const { logo: transgranicznyLogo } = data.transgranicznyPage;
	const { logo: niepodleglosciLogo } = data.niepodleglosciPage;

	return (
		<Layout data={{ websiteCore, partners }} isMainPage>
			<MainSection
				data={{ host, events, transgranicznyLogo, niepodleglosciLogo }}
			/>
		</Layout>
	);
};

export const data = graphql`
	{
		mainPage: wpPage(id: { eq: "cG9zdDoxMDM3" }) {
			websiteCore {
				sitetitle
				sitedescription
			}
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
				bannerimage {
					localFile {
						childImageSharp {
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
						childImageSharp {
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
		niepodleglosciPage: wpPage(id: { eq: "cG9zdDo5NzU=" }) {
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
		}
	}
`;

export const Head = () => <Seo />;

export default IndexPage;
