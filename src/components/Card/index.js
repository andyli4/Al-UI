import Card from './Card.vue'
Card.install=function(app){
    app.component(Card.name,Card)
}
export default Card