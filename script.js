const Form = () => {
  const [state, setState] = React.useState({
    bombOne: "6020",
    bombTwo: "11749",
    bombThree: "21065" });


  const ipfsAbs =
  "https://ipfs.io/ipfs/QmQKWCoR8sz9r1mERBrZ67wUqSJXpDdgV3ETJeDhAZ7uaR/";

  const submitHandler = e => {
    e.preventDefault();
  };

  const changeHandler = e => {
    setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value }));

  };

  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h1", null, "ABS x Wildfire",
    " ", /*#__PURE__*/
    React.createElement("img", {
      width: "40px",
      src: "//cdn.shopify.com/s/files/1/1520/5960/t/423/assets/logo-wildfire.svg?v=1855630928499410503",
      alt: "The Hundreds" })), /*#__PURE__*/


    React.createElement("h2", null, "by ", /*#__PURE__*/
    React.createElement("a", { href: "https://twitter.com/BoringGrey" }, "boringgrey")), /*#__PURE__*/

    React.createElement("h3", null, /*#__PURE__*/
    React.createElement("a", { href: "https://thehundreds.com/blogs/content/firestarters-story-behind-wildfire-flag" }, "The story behind Wildfire")), /*#__PURE__*/



    React.createElement("h3", null, "Put the Bomb ID # of your Bomb(s) in the fields below and generate a Wildfire collage of your bombs, then take a screenshot. The images will be taken directly from IPFS in high resolution, so it might take a few seconds to download."), /*#__PURE__*/





    React.createElement("form", null, /*#__PURE__*/
    React.createElement("div", { class: "container" }, /*#__PURE__*/
    React.createElement("div", { class: "item" }, /*#__PURE__*/
    React.createElement("label", { className: "label" }, "Bomb ID #"), /*#__PURE__*/
    React.createElement("input", {
      onChange: changeHandler,
      value: state.bombOne,
      type: "text",
      name: "bombOne",
      placeholder: "Bomb ID #",
      autocomplete: "off" })), /*#__PURE__*/


    React.createElement("div", { class: "item" }, /*#__PURE__*/
    React.createElement("label", { className: "label" }, "Bomb ID #"), /*#__PURE__*/
    React.createElement("input", {
      onChange: changeHandler,
      value: state.bombTwo,
      type: "text",
      name: "bombTwo",
      placeholder: "Bomb ID #",
      autocomplete: "off" })), /*#__PURE__*/


    React.createElement("div", { class: "item" }, /*#__PURE__*/
    React.createElement("label", { className: "label" }, "Bomb ID #"), /*#__PURE__*/
    React.createElement("input", {
      onChange: changeHandler,
      value: state.bombThree,
      type: "text",
      name: "bombThree",
      placeholder: "Bomb ID #",
      autocomplete: "off" })))), /*#__PURE__*/




    React.createElement("div", { class: "pfp" }, /*#__PURE__*/
    React.createElement("div", {
      class: "wildfire",
      id: "one",
      style: {
        backgroundImage: `url(${ipfsAbs + state.bombOne + ".png"})` } }), /*#__PURE__*/


    React.createElement("div", {
      class: "wildfire",
      id: "two",
      style: {
        backgroundImage: `url(${ipfsAbs + state.bombTwo + ".png"})` } }), /*#__PURE__*/


    React.createElement("div", {
      class: "wildfire",
      id: "three",
      style: {
        backgroundImage: `url(${ipfsAbs + state.bombThree + ".png"})` } }))));





};
ReactDOM.render( /*#__PURE__*/React.createElement(Form, null), document.getElementById("abs"));
