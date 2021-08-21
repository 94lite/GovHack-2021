import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, Carousel, Input } from "antd";

const tree_types = [
  {
    name: "tree-a",
    genus: "tree-a-is",
    description: "description for tree-a, the description of the tree goes here, something something something",
    maturity_rate: "x years",
    pts: 400,
  },
  {
    name: "tree-b",
    genus: "tree-b-is",
    description: "description for tree-b, the description of the tree goes here, something something something",
    maturity_rate: "x years",
    pts: 600,
  },
  {
    name: "tree-c",
    genus: "tree-c-is",
    description: "description for tree-c, the description of the tree goes here, something something something",
    maturity_rate: "x years",
    pts: 700,
  },
  {
    name: "tree-d",
    genus: "tree-d-is",
    description: "description for tree-d, the description of the tree goes here, something something something",
    maturity_rate: "x years",
    pts: 1000,
  },
  {
    name: "tree-e",
    genus: "tree-e-is",
    description: "description for tree-e, the description of the tree goes here, something something something",
    maturity_rate: "x years",
    pts: 10000,
  }
]

const style = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'green',
};

const p_style= {
  margin: "0 0 4px 0"
}

const footer_style = {
  marginTop: "8px",
  display: "flex",
  justifyContent: "space-between"
}

export default function RedeemTree(props) {
  const [tree_i, focusTree] = useState(0);
  const [page, setPage] = useState("select");
  const newTreeForm = useSelector((state) => state.garden);
  const setGlobalTree = useDispatch();
  const {
    name,
    genus,
    description,
    maturity_rate,
    pts
  } = tree_types[tree_i]

  useEffect(() => {
    setGlobalTree({ type: "INIT_TREE_FORM" });
  }, []);

  function swapPage() {
    switch (page) {
      case "select":
        setPage("form");
        break;
      case "form":
        console.log({
          type: name,
          ...newTreeForm,
        });
        props.setModVis(false);
        break;
      default:
        break;
    }
  }
  return (
    <div>
      {page === "select" ? (
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
          <Card
            title={
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{name}</span>
                <span>pts: {pts}</span>
              </div>
            }
            size="small"
            style={{ marginTop: "8px" }}
          >
            <p style={p_style}><u>Genus:</u> <i>{genus}</i></p>
            <p style={p_style}><u>Description:</u> {description}</p>
            <p style={p_style}><u>Maturity rate:</u> {maturity_rate}</p>
          </Card>
        </div>
      ) : (
        <div>
          <h3>{name} Details</h3>
          <Input
            addonBefore="Name"
            style={{ marginTop: "4px" }}
            value={newTreeForm.name}
            onChange={event => setGlobalTree({ type: "TREE_FORM", key: "name", value: event.target.value })}
          />
          <Input.TextArea
            autoSize={{ minRows: 3, maxRows: 3 }}
            placeholder="Personal Note"
            style={{ marginTop: "4px" }}
            value={newTreeForm.note}
            onChange={event => setGlobalTree({ type: "TREE_FORM", key: "note", value: event.target.value })}
          />
        </div>
      )}
      <div style={footer_style}>
        {page === "select" ? <div/> : <Button onClick={() => setPage("select")}>Back</Button>}
        <Button
          type="primary"
          onClick={() => swapPage()}
          disabled={page === "form" && newTreeForm.name === undefined}
        >
          {page === "select" ? "Next" : "Redeem"}
        </Button>
      </div>
    </div>
  )
}