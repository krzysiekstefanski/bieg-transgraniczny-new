import React from "react";

import {
	Layout,
	TopSection,
	BannerSection,
	Seo,
	VerificationSection,
	RewardsSection,
	GallerySection,
} from "../../components-gb";
import { graphql } from "gatsby";
import { EventTheme } from "../../enums-gb";

const TransgranicznyPage: React.FC = ({ data }): JSX.Element => {
	const { host, events, partners } = data.mainPage;
	const { pageCore, logo, top, banner, verification, rewards, gallery } =
		data.transgranicznyPage;
	const theme = EventTheme.Transgraniczny;

	return (
		<Layout data={{ pageCore, partners, logo }}>
			<TopSection theme={theme} data={top} />
			<BannerSection theme={theme} data={banner} />
			<VerificationSection theme={theme} data={verification} />
			<RewardsSection theme={theme} data={rewards} />
			<GallerySection theme={theme} data={gallery} />
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
			rewards {
				rewardsdisabled
				rewardstitle
				rewardstext
				rewardsimages {
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

export default TransgranicznyPage;
