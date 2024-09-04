import Collapse from './Collapse.vue'
Collapse.install=function(app){
    app.component(Collapse.name,Collapse)
}



import CollapseItem from './CollapseItem.vue'
CollapseItem.install=function(app){
    app.component(CollapseItem.name,CollapseItem)
}
export default {
    CollapseItem,
    Collapse
};