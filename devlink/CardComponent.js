import React from "react";
import * as _Builtin from "./_Builtin";

export function CardComponent({
  as: _Component = _Builtin.Block,
  name = "Heading",
  date = "Date",
  keywords = "lorem ipsum",
  image = "",
}) {
  return (
    <_Component className="card-component" tag="div">
      <_Builtin.Image
        className="event-image"
        loading="lazy"
        width="auto"
        height="auto"
        src={image}
      />
      <_Builtin.Heading tag="h4">{name}</_Builtin.Heading>
      <_Builtin.Paragraph>{date}</_Builtin.Paragraph>
      <_Builtin.Paragraph className="keywords">
        <_Builtin.Strong>{"Keywords"}</_Builtin.Strong>
      </_Builtin.Paragraph>
      <_Builtin.Paragraph>{keywords}</_Builtin.Paragraph>
    </_Component>
  );
}
