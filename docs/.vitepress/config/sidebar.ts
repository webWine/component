import fs from 'fs'
import path from 'path'
import {
  componentMap,
  guideMap
} from './nameMap'

interface IComponentsMd{
  text:string,
  link:string
}
function getFiles(folder, type, nameMap, flag = false) {
  const filesName = fs.readdirSync(path.resolve(__dirname, "../../" + folder))
  let componentsMd:IComponentsMd[]= []
  filesName.forEach(item => {
    const name = item.split('.')[0]

    if (nameMap[type][name]) {
      componentsMd.push({
        text: !flag ? name + "  " + nameMap[type][name] : nameMap[type][name],
        link: "/" + folder + '/' + name
      })
    }
  })
  return componentsMd
}



const sidebar = {
  '/guide/': [
    {
      text: '基础',
      items: getFiles('guide', 'base', guideMap, true)
    }
  ],
  '/components/': [
    {
      text: '基础组件',
      items: getFiles('components', 'base', componentMap),
    },
    {
      text: "表单组件",
      items: getFiles('components', 'form', componentMap),
    }
  ],
}


export default sidebar