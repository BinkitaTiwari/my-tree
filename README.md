# my-tree

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/my-tree.svg)](https://www.npmjs.com/package/my-tree) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save my-tree
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'my-tree'
import 'my-tree/dist/index.css'

class Example extends Component {

  render() {
    const config =
  {
  data:chartData[0],
  l: [{ 'icon': '#0000FF', 'name': 'Material' }, { 'icon': '#ff0000', 'name': 'Process Order ' }],  
  contextmenu: [{
    Text: 'HOME',
    Url: 'http://www.google.com',
  },

  {
    Text: 'Google Link',
    Url: 'http://www.google.com',
  },
  {
    Text: 'Yahoo!!',
    Url: 'http://www.google.com',
  }
  ],
  zoom: true,
  chartType: 'backward',
  handleChartClick:this.handleChartClick,
  selectedHeader:selectedHeader,
  getBackwardData:getBackwardData,
  getForwardData:getForwardData,
  showTreePlot:showTreePlot,
  nodeId:nodeId
  }

    return (
      <MyComponent  config={config}/>
    ) 
  }
}
```

## License

MIT © [](https://github.com/)
