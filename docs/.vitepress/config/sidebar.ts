import fs from 'fs'
import path from 'path'
import nameMap from './nameMap'

// const fs = require("fs")
// const path = require("path")

function getFiles(folder,type){
  const filesName = fs.readdirSync(path.resolve(__dirname,"../../"+folder))
  let componentsMd = []
  filesName.forEach(item=>{
    const name =  item.split('.')[0]
    
    if(nameMap[type][name]){
      componentsMd.push( {
        text:name+"  "+ nameMap[type][name],
        link:"/"+folder+'/'+name
      })
    }
  })
  return componentsMd
}
const sidebar = {
  '/guide/': [
    {
      text: '基础',
      items: [
        {
          text: '安装',
          link: '/guide/install',
        },
        {
          text: '快速开始',
          link: '/guide/start',
        }
      ],
    }
  ],
  '/components/': [
    {
      text: '基础组件',
      items:getFiles('components','base'),
    },
    {
      text:"表单组件",
      items:getFiles('components','form'),
    }
  ],
}


export default sidebar