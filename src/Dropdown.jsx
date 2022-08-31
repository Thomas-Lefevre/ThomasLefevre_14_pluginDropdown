import './Dropdown.css';
import { useState, useEffect } from 'react';
import arrowUp from "./icons/arrowUp.svg"
import arrowDown from "./icons/arrowDown.svg"

function Dropdown({ list, setValue }) {

  const [show, setShow] = useState(false)
  const [selectedValue, setSelectedValue] = useState()

  const data = []

  useEffect(() => {
    if (selectedValue === undefined) {
      setSelectedValue(data[0].value);
    }
    setValue(selectedValue)
  }, [selectedValue, setValue, data])


  for (let i = 0; i < list.length; i++) {
    const dataDropdown = {
      index: i,
      value: list[i]
    }

    data.push(dataDropdown)

  }

  function show_hide() {
    return show ? setShow(false) : setShow(true)
  }

  function selectItem(e) {
    setShow(false)
    setSelectedValue(e.value)
  }

  return (
    <div className="dropDown" onClick={show_hide}>
      <div className="list" >
        <div className='list_element first'>{selectedValue}</div>
        {show ?
          (<ul>
            {data.map(data => (
              <li key={data.index} className='listElement' onClick={() => selectItem(data)} >
                {data.value}
              </li>))}
          </ul>)
          : null}
      </div>
      {show ? <img className='arrow' src={arrowUp} alt="fleche haut" /> : <img className='arrow' src={arrowDown} alt="fleche bas" />}
    </div>);
}

export default Dropdown;
