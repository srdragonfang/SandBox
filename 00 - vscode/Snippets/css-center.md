"center:abs:transform": {
  "prefix": "center:abs:transform",
  "body": [
    "#parentContainer {",
    "  position: relative;",
    "}",
    "#childContainer {",
    "  position: absolute;",
    "  top: 50%;",
    "  left: 50%;",
    "  transform: translate(-50%, -50%);",
    "}"
  ],
  "description": "center:abs:transform"
},
"center:abs:margin": {
  "prefix": "center:abs:margin",
  "body": [
    "#parentContainer {",
    "  position: relative;",
    "}",
    "#childContainer {",
    "  position: absolute;",
    "  top: 0;",
    "  left: 0;",
    "  bottom: 0;",
    "  right: 0;",
    "  margin: auto;",
    "}"
  ],
  "description": "center:abs:margin"
},
"center:flexbox": {
  "prefix": "center:flexbox",
  "body": [
    "#parentContainer {",
    "  display: flex;",
    "  justify-content: center;",
    "  align-items: center;",
    "}"
  ],
  "description": "center:flexbox"
},
"center:flexbox:alignSelf": {
  "prefix": "center:flexbox:alignSelf",
  "body": [
    "#parentContainer {",
    "  display: flex;",
    "  justify-content: center;",
    "}",
    "#childContainer {",
    "  align-self: center;",
    "}"
  ],
  "description": "center:flexbox:alignSelf"
},
"center:flexbox:margin": {
  "prefix": "center:flexbox:margin",
  "body": [
    "#parentContainer {",
    "  display: flex;",
    "}",
    "#childContainer {",
    "  margin: auto;",
    "}"
  ],
  "description": "center:flexbox:margin"
},
"center:grid": {
  "prefix": "center:grid",
  "body": [
    "#parentContainer {",
    "  display: grid;",
    "  justify-content: center;",
    "  align-items: center;",
    "}"
  ],
  "description": "center:grid"
},
"center:grid:placeItems": {
  "prefix": "center:grid:placeItems",
  "body": [
    "#parentContainer {",
    "  display: grid;",
    "  place-items: center;",
    "}"
  ],
  "description": "center:grid:placeItems"
},
"center:grid:alignSelf": {
  "prefix": "center:grid:alignSelf",
  "body": [
    "#parentContainer {",
    "  display: grid;",
    "}",
    "#childContainer {",
    "  align-self: center;",
    "  justify-self: center;",
    "}"
  ],
  "description": "center:grid:alignSelf"
},
"center:grid:placeSelf": {
  "prefix": "center:grid:placeSelf",
  "body": [
    "#parentContainer {",
    "  display: grid;",
    "}",
    "#childContainer {",
    "  place-self: center;",
    "}"
  ],
  "description": "center:grid:placeSelf"
},
"center:grid:margin": {
  "prefix": "center:grid:margin",
  "body": [
    "#parentContainer {",
    "  display: grid;",
    "}",
    "#childContainer {",
    "  margin: auto;",
    "}"
  ],
  "description": "center:grid:margin"
}