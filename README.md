# React Dropdown

## Install

```bash
npm i thomas_lefevre_plugin_dropdown --save
```

## Example

```jsx
import React from 'react';
import Dropdown from "thomas_lefevre_plugin_dropdown";
import 'thomas_lefevre_plugin_dropdown/src/Dropdown.css';

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