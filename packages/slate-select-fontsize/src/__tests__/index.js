import React from "react";
import { Change, Value } from "slate";
import FontSize from "../";
import renderer from "react-test-renderer";

test("create a FontSize icon", () => {
  const initialValue = Value.fromJSON({
    document: {
      nodes: [
        {
          object: "block",
          type: "paragraph",
          nodes: [
            {
              object: "text",
              leaves: [
                {
                  text: "A line of text in a paragraph."
                }
              ]
            }
          ]
        }
      ]
    }
  });

  const component = renderer.create(
    <FontSize change={new Change({ value: initialValue })} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
