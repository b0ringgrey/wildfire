const Form = () => {
  const [state, setState] = React.useState({
    bombOne:
    "https://pbs.twimg.com/profile_images/1484628496148099072/ljIIjeFo_400x400.jpg",
    bombTwo:
    "https://pbs.twimg.com/profile_images/1484236379227779072/hLqwg3YI_400x400.jpg",
    bombThree:
    "https://lh3.googleusercontent.com/C5ubcUTfHNyqJT9vEdLhk3WJ3enHQn54OhRNu2sciw5tVzbIoJHoj9CrfwziGFhdNCwroSvlFvpT5hUnA4hrl52Pprm6R-VWs48ysQ=w600" });


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
    React.createElement("form", null, /*#__PURE__*/
    React.createElement("input", { onChange: changeHandler, type: "text", name: "bombOne" }), /*#__PURE__*/
    React.createElement("input", { onChange: changeHandler, type: "text", name: "bombTwo" }), /*#__PURE__*/
    React.createElement("input", { onChange: changeHandler, type: "text", name: "bombThree" })), /*#__PURE__*/

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