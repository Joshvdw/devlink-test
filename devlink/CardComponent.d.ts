import * as React from "react";
import * as Types from "./types";

declare function CardComponent(props: {
  as?: React.ElementType;
  name?: React.ReactNode;
  date?: React.ReactNode;
  keywords?: React.ReactNode;
  image?: Types.Asset.Image;
}): React.JSX.Element;
