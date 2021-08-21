import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Carousel, Form } from "antd";

const tree_types = [
  {
    name: "tree-a",
    genus: "tree-a-is",
    description: "description for tree-a, the description of the tree goes here, something something something",
    maturity_rate: "x years"
  },
  {
    name: "tree-b",
    genus: "tree-b-is",
    description: "description for tree-b, the description of the tree goes here, something something something",
    maturity_rate: "x years"
  },
  {
    name: "tree-c",
    genus: "tree-c-is",
    description: "description for tree-c, the description of the tree goes here, something something something",
    maturity_rate: "x years"
  },
  {
    name: "tree-d",
    genus: "tree-d-is",
    description: "description for tree-d, the description of the tree goes here, something something something",
    maturity_rate: "x years"
  },
  {
    name: "tree-e",
    genus: "tree-e-is",
    description: "description for tree-e, the description of the tree goes here, something something something",
    maturity_rate: "x years"
  }
]

const style = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'green',
};

export default function RedeemTree() {
  const [tree_i, focusTree] = useState(0)
  const newTreeForm = useSelector((state) => state.garden);
  const {
    name,
    genus,
    description,
    maturity_rate
  } = tree_types[tree_i]
  return (
    <div>
      <Carousel beforeChange={(from, c) => focusTree(c)}>
        {tree_types.map(tree => {
          return (
            <div key={tree.name}>
              <div style={style}>{tree.name}</div>
            </div>
          )
        })}
      </Carousel>
      <Card title={name} size="small" style={{ marginTop: "8px" }}>
        <p><u>Genus:</u> <i>{genus}</i></p>
        <p><u>Description:</u> {description}</p>
        <p><u>Maturity rate:</u> {maturity_rate}</p>
      </Card>
    </div>
  )
}