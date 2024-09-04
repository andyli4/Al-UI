/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

import './styles/index.scss'

import './styles/index.scss'
import Icon from './components/icons'
import Button from './components/Button'
import Card from './components/Card'
import Dialog from './components/Dialog'
import Collapse from './components/Collapse'
import CollapseItem from './components/Collapse'
import Tooltip from './components/Tooltip'
import Pager from './components/Pager'
import Dropdown from './components/Dropdown'


const componentsArr=[Icon,Button,Card,Dialog,Collapse,CollapseItem,Tooltip,Pager,Dropdown];

const install=(app)=>{
    componentsArr.forEach(component=>{
        app.component(component.name,component)
    })
    app.component('font-awesome-icon',FontAwesomeIcon)
}

// two kinds of export
//export all and export based on needs
export default{
    install
}
export { install,Icon,Button,Card,Dialog,Collapse,CollapseItem,Tooltip,Pager,Dropdown}