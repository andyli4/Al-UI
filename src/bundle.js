/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

import './styles/index.scss'

import Icon from './components/icons/Icon.vue'
import Button from './components/Button/Button.vue'
import Card from './components/Card/Card.vue'
import Dialog from './components/Dialog/Dialog.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import Tooltip from './components/Tooltip/Tooltip.vue'
import Pager from './components/Pager/Pager.vue'
import Dropdown from './components/Dropdown/Dropdown.vue'


const componentsArr=[Icon,Button,Card,Dialog,Collapse,CollapseItem,Tooltip,Pager,Dropdown];

const install=(app)=>{
    componentsArr.forEach((component)=>{
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