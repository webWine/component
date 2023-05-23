import {UserConfig} from "vitepress"
import nav from "./config/nav"
import sidebar from "./config/sidebar"

// 
export const config:UserConfig={
    title:"Wine Component",
    description:"Vue3+ts component",
    themeConfig:{
        nav,
        sidebar
    }
}

export default config