import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, Carousel, Input } from "antd";
import { GiFern, GiFruitTree, GiPalmTree, GiPineTree, GiTreeDoor } from "react-icons/gi";

const tree_types = [
  {
    name: "Spruce",
    genus: "Picea",
    description: "Spruces are large trees, from about 20–60m tall when mature, and have whorled branches and conical form.",
    maturity_rate: "x years",
    background: process.env.PUBLIC_URL + "/spruce.jpg",
    icon: <GiPineTree />,
    pts: 400,
  },
  {
    name: "Fern",
    genus: "Alsophila",
    description: "New Zealand ferns New Zealand has an unusually high number of fern species for a temperate country and about 40 per cent of these species occur nowhere else in the world.",
    maturity_rate: "x years",
    background: process.env.PUBLIC_URL + "/fern.png",
    icon: <GiFern />,
    pts: 600,
  },
  {
    name: "Cabbage Tree",
    genus: "Cordyline",
    description: "The cabbage tree is one of the most distinctive trees in the New Zealand landscape, especially on farms. They grow all over the country, but prefer wet, open areas like swamps.",
    maturity_rate: "x years",
    background: process.env.PUBLIC_URL + "/cabbage_tree.png",
    icon: <GiPalmTree />,
    pts: 700,
  },
  {
    name: "Pohutukawa",
    genus: "Metrosideros",
    description: "Pōhutukawa is New Zealand's Christmas tree, and holds a prominent place in Maori mythology.",
    maturity_rate: "x years",
    background: process.env.PUBLIC_URL + "/pohutukawa.jpeg",
    icon: <GiFruitTree />,
    pts: 1000
  },
  {
    name: "Great Kauri",
    genus: "Agathis",
    description: "Kauri are among the world's mightiest trees, growing to over 50m tall, with trunk girths up to 16m, and living for over 2,000 years.",
    maturity_rate: "x years",
    background: process.env.PUBLIC_URL + "/kauri.png",
    icon: <GiTreeDoor />,
    pts: 10000,
  }
]

const style = {
  fontSize: "larger",
  textShadow: "2px 2px grey",
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: "center center",
  backgroundSize: "cover"
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
    pts,
    icon,
    background
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
                  <div style={{ ...style, backgroundImage:`url('${background}')`}}>{tree.name}</div>
                </div>
              )
            })}
          </Carousel>
          <Card
            title={
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{icon} {name}</span>
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
          <h3 style={{ color: "white" }}>{icon} {name} Details</h3>
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
          style={{ background: "#50A387", borderColor: "#50A387" }}
        >
          {page === "select" ? "Next" : "Redeem"}
        </Button>
      </div>
    </div>
  )
}