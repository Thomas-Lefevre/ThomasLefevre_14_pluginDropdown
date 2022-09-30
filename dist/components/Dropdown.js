"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("./styles/Dropdown.css");

var _react = _interopRequireWildcard(require("react"));

var _arrowUp = _interopRequireDefault(require("./styles/icons/arrowUp.svg"));

var _arrowDown = _interopRequireDefault(require("./styles/icons/arrowDown.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Dropdown(_ref) {
  let {
    list,
    setValue
  } = _ref;
  const [show, setShow] = (0, _react.useState)(false);
  const [selectedValue, setSelectedValue] = (0, _react.useState)();
  const data = [];
  (0, _react.useEffect)(() => {
    if (selectedValue === undefined) {
      setSelectedValue(data[0].value);
    }

    setValue(selectedValue);
  }, [selectedValue, setValue, data]);

  for (let i = 0; i < list.length; i++) {
    const dataDropdown = {
      index: i,
      value: list[i]
    };
    data.push(dataDropdown);
  }

  function show_hide() {
    return show ? setShow(false) : setShow(true);
  }

  function selectItem(e) {
    setShow(false);
    setSelectedValue(e.value);
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "dropDown",
    onClick: show_hide
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "list"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "firstElement"
  }, selectedValue), show ? /*#__PURE__*/_react.default.createElement("ul", null, data.map(data => /*#__PURE__*/_react.default.createElement("li", {
    key: data.index,
    className: "listElement",
    onClick: () => selectItem(data)
  }, data.value))) : null), show ? /*#__PURE__*/_react.default.createElement("img", {
    className: "arrow",
    src: _arrowUp.default,
    alt: "fleche haut"
  }) : /*#__PURE__*/_react.default.createElement("img", {
    className: "arrow",
    src: _arrowDown.default,
    alt: "fleche bas"
  }));
}

var _default = Dropdown;
exports.default = _default;