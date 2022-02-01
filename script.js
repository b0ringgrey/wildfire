const Form = () => {
  const [state, setState] = React.useState({
    bombOne:
    "https://lh3.googleusercontent.com/fpxkW42dJqikW4Ed9w0ubqF4QHBsh7jddWeXRzH1OKTubnEYd0ByrvLiXB_7F0xQ3L5lROpxdoUmTJpK2S7r2Au7XSuyQjU7PwG5Qt8=s0",
    bombTwo:
    "https://lh3.googleusercontent.com/pksyaB2SBcYZfxvpoOMJA263y3dLSMN55rBvE_TpJvfdzDzvJisNjuZ1li6vH2iOKqdtVU6hUhIRqkyFyVTGyWy_RNYlE-ZUABYr5w=s0",
    bombThree:
    "https://lh3.googleusercontent.com/xFsStH9iu1ApdqWe7mSSD0lr9egP3MsorDk8idI7Y5VXDoqvPhb7a_1KBWvdgCvfm_vStUwBGMmgJdF6Mm8GOdHmeQrG-GbqtZnq=s0" });


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
    React.createElement("h1", null, "ABS x Wildfire"), /*#__PURE__*/
    React.createElement("h2", null, "by ", /*#__PURE__*/
    React.createElement("a", { href: "https://opensea.io/b0ring_gray" }, "boringgrey"), " (", /*#__PURE__*/
    React.createElement("a", { href: "https://twitter.com/BoringGrey" }, "twitter"), ")"), /*#__PURE__*/

    React.createElement("h3", null, /*#__PURE__*/
    React.createElement("a", { href: "https://thehundreds.com/blogs/content/firestarters-story-behind-wildfire-flag" }, "The story behind Wildfire")), /*#__PURE__*/



    React.createElement("h3", null, "Copy the image address of your Bomb and paste it into the fields below and generate a Wildfire collage of your bomb, then take a screenshot."), /*#__PURE__*/



    React.createElement("form", null, /*#__PURE__*/
    React.createElement("div", { class: "container" }, /*#__PURE__*/
    React.createElement("div", { class: "item" }, /*#__PURE__*/
    React.createElement("label", { className: "label" }, "image url 1"), /*#__PURE__*/
    React.createElement("input", { onChange: changeHandler, type: "text", name: "bombOne" })), /*#__PURE__*/

    React.createElement("div", { class: "item" }, /*#__PURE__*/
    React.createElement("label", { className: "label" }, "image url 2"), /*#__PURE__*/
    React.createElement("input", { onChange: changeHandler, type: "text", name: "bombTwo" })), /*#__PURE__*/

    React.createElement("div", { class: "item" }, /*#__PURE__*/
    React.createElement("label", { className: "label" }, "image url 3"), /*#__PURE__*/
    React.createElement("input", { onChange: changeHandler, type: "text", name: "bombThree" })))), /*#__PURE__*/



    React.createElement("div", { class: "pfp" }, /*#__PURE__*/
    React.createElement("div", {
      class: "wildfire",
      id: "one",
      style: { backgroundImage: `url(${state.bombOne})` } }), /*#__PURE__*/

    React.createElement("div", {
      class: "wildfire",
      id: "two",
      style: { backgroundImage: `url(${state.bombTwo})` } }), /*#__PURE__*/

    React.createElement("div", {
      class: "wildfire",
      id: "three",
      style: { backgroundImage: `url(${state.bombThree})` } }))));




};
ReactDOM.render( /*#__PURE__*/React.createElement(Form, null), document.getElementById("abs"));