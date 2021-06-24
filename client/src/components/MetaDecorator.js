import React from "react";
import { Helmet } from "react-helmet";

const MetaDecorator = ({ title, excerpt, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={excerpt} />
      <meta property="og:image" content={image} />
    </Helmet>
  );
};

export default MetaDecorator;
