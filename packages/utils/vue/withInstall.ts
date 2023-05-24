import type {App, Component } from 'vue'

export const withIntsall = <T extends Component>(main: T) => {
    ; (main as Record<string,Component>).install = (app:App): void => {
        const {name} = main
        if(name){
            app.component(name, main)
        }
    }
}