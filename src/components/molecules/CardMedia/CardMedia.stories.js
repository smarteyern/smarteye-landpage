import React from "react";

import CardMedia from "./CardMedia";
import placeImage from "assets/images/card01.jpg";

export default {
  title: "Components/Molecules/CardMedia",
  component: CardMedia,
};

export const usage = () => <CardMedia image={placeImage} />;
