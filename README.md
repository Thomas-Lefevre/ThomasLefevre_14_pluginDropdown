# React Dropdown

## Install

```bash
npm i thomas_lefevre_plugin_dropdown --save
```

## Example

The dropdown take two params : 

### list
This is the list of elements you want in the dropdown

### setValue
This is the function you want to trigger when an element is choose 

```jsx
import React from 'react';
import Dropdown from "thomas_lefevre_plugin_dropdown";

/**
	* @param {array} list Element array
	* @param {fonction} setValue Fonction
	*/
function StatesDropdown() {

    //retrieval and storage of the value of the chosen element in the dropdown
    const [state, setState] = useState('')

    //each time the dropdown value changes, a console.log with the new value will be displayed
    useEffect(() => {
        console.log("You chose "+state+"!");
    }, [state])

    //list of states that will appear in the dropdown 
    const statesNames = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas"]

    return (
        <Dropdown list={statesNames} setValue={setState} />
    )
}

export default StatesDropdown
```

## Style

```
.dropDown{
    /* Style the main element of the dropdown */

      display: flex;
      justify-content: space-between;
      cursor: pointer;
      width: fit-content;
      ...
}
```

```
.listElement{
    /* Style each element of the list */ 

      list-style: none;
      padding: 5px;
      ...
}
```

```
.listElement:hover{
    /* Style each element of the list on a hover */

      background-color: #027ffe;
      ...
}
```