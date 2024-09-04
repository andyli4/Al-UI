import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
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

const app = createApp(App)

app.component('font-awesome-icon',FontAwesomeIcon)

//Registering Custom Component
app.component('Al-Icon',Icon);
app.component('Al-Button',Button);
app.component('Al-Card',Card);
app.component('Al-Dialog',Dialog);
app.component('Al-Collapse',Collapse);
app.component('Al-CollapseItem',CollapseItem);
app.component('Al-Tooltip',Tooltip);
app.component('Al-Pager',Pager);
app.component('Al-Dropdown',Dropdown);

app.use(router)


app.mount('#app')
