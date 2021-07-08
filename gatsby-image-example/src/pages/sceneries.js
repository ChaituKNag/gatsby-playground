import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
const Sceneries = ({ data }) => {
  const images = data ? data.allFile.edges : null;
  return (
    <div>
      {images && images.map((image, i) => {
        return <div key={`image-${i}`} style={{ maxWidth: 300, margin: '20px auto' }}>
          <Img fluid={image.node.childImageSharp.fluid} alt="" />
        </div>;
      })}
    </div>
  )
}

export default Sceneries;

export const query = graphql`
{
    allFile (filter: {relativePath: {regex: "/data/"}}){
      edges {
        node {
          childImageSharp {
            fluid {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
  
`;