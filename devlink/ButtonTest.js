import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"JIGGLE_EFFECT","config":{"actionListId":"jiggle","autoStopEventId":"e-2"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"9355dd7a-ef7e-b46e-cea9-ac416321c264"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":null},"createdOn":1690298875021},"e-2":{"id":"e-2","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"RUBBER_BAND_EFFECT","config":{"actionListId":"rubberBand","autoStopEventId":"e"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"9355dd7a-ef7e-b46e-cea9-ac416321c264"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":null},"createdOn":1690298875022}},"actionLists":{"jiggle":{"id":"jiggle","actionItemGroups":[{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":100,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"zValue":-5,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":100,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"zValue":5,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":100,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"zValue":-5,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":100,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"zValue":5,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":100,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"zValue":-5,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":100,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"zValue":5,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":100,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"zValue":-5,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":100,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"zValue":5,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":100,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"zValue":-5,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":100,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"zValue":5,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":100,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]}]},"rubberBand":{"id":"rubberBand","actionItemGroups":[{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":250,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":1.25,"yValue":0.7500000000000001}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outElastic","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":1,"yValue":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ButtonTest({
  as: _Component = _Builtin.Link,
  buttonSlotTest,
  buttonRuntimeProps = {},
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      data-w-id="9355dd7a-ef7e-b46e-cea9-ac416321c264"
      button={true}
      options={{
        href: "http://instagram.com",
        target: "_blank",
      }}
      {...buttonRuntimeProps}
    >
      {buttonSlotTest ?? "BUTTON TEST"}
    </_Component>
  );
}
