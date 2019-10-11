import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
  image: string;
}

export const Background: React.FC<Props> = ({ children, style, className, image }) => (
  <StaticQuery
    query={graphql`
      query {
        weddingTable: file(relativePath: { eq: "backgrounds/wedding-table.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            },
          },
        },
        weddingTableCloseup: file(relativePath: { eq: "backgrounds/wedding-table-closeup.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            },
          },
        },
      },
    `}
    render={(data) => (
      <BackgroundImage fluid={data[image].childImageSharp.fluid} backgroundColor={`#040e18`} style={style} className={className}>
        {children}
      </BackgroundImage>
    )}
  />
);
