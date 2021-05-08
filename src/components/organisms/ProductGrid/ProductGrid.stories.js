import React from "react";

import ProductGrid from "./ProductGrid";
import placeImage1 from "assets/images/card01.jpg";
import placeImage2 from "assets/images/card02.jpg";
import placeImage3 from "assets/images/card03.jpg";

export default {
  title: "Components/Organisms/ProductGrid",
  component: ProductGrid,
};

export const usage = () => {
  return (
    <>
      <ProductGrid
        products={[
          { id: 1, image: placeImage1, title: "Título 1", summary: "Texto" },
          { id: 2, image: placeImage2, title: "Título 2", summary: "Texto" },
          { id: 3, image: placeImage3, title: "Título 3", summary: "Texto" },
          { id: 4, image: placeImage1, title: "Título 4", summary: "Texto" },
          { id: 5, image: placeImage2, title: "Título 5", summary: "Texto" },
          { id: 6, image: placeImage3, title: "Título 6", summary: "Texto" },
        ]}
      />
    </>
  );
};
