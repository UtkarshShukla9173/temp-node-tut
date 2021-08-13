
const person = {
    name: 'bob',

}

//module.exports.singlePerson= person //singlePerson is a property name the will appear before the output of function i.e(person).
function display() {
    console.log(person)
}
display()
module.exports=display
module.exports.single=person
module.exports.items = [ 'item1','item2']
//.items is a property name and it will be displayed in result