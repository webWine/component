import  DefaultTheme from "vitepress/theme";
import componentList from "../config/componentList";



// const modulesFiles = import.meta.glob("./examples/*/*.vue")
// console.log("modulesFiles",modulesFiles);

export default {
    ...DefaultTheme,
    enhanceApp({app}){
        componentList.forEach(([name,comp])=>{
            app.component(name,comp)
        })
        
    }
}