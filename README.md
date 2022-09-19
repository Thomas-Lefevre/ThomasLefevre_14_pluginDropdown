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
import 'thomas_lefevre_plugin_dropdown/src/Dropdown.css';

/**
	* @param {array} list Element array
	* @param {fonction} setValue Fonction
	*/
function App() {
    return (
        <Dropdown 
            list={[datas]}
            setValue={func}
        />
    )
}

export default App
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