var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var PropTypes = require('prop-types')

// state
// lifecycle event
// UI

/*
Learning about the "this" keyword
  - Implicit Binding
  - Explicit Binding
  - new Binding
  - window Binding
*/
// IMPLICIT BINDING
// Where is this function invoked?
var sayName = function(name) {
  console.log('Hello, ' + name)
}
//sayName('Micah')

var me = {
  name: 'Micah',
  age: 37,
  sayName: function() {
    console.log(this.name);
  }
}
// 1. How would you call the function?
//me.sayName()
// 2. What is to the left of the function name?
// me; Then 'me' is where this function is invoked. So,
// within this nested function, the "this" keyword = the 'me' object.

var sayNameMixin = function(obj){
  obj.sayName = function(){
    console.log(this.name);
  }
}

var you = {
  name: 'Joey',
  age: 21
}

//sayNameMixin(me)
sayNameMixin(you) // passes [you] into the 'sayNameMixin' function (but not to the nested function!)
//me.sayName();
you.sayName(); // invokes the nested function, 'sayName', by specifying the name of the object that can access it (refer to the nested function, which calls obj.sayName)

///








///////////// end 'this' keyword learning ///////////////////////


class MyMap extends React.Component {
  render() {
    return (
      <div>
        <h1>Map...</h1>
      <ul>
        {
          this.props.list.map(function(user) {
            return <li>{user}</li>
          })
        }
      </ul>
    </div>
    )
  }
}
MyMap.propTypes = { list: PropTypes.array.isRequired }

class MyFilter extends React.Component {
  render() {
    return (
      <div>
        <h1>Filter...</h1>
        <h2>Friends</h2>
        <ul>
          {
            this.props.list.filter(function (user) {
                return user.friend === true
              }).map(function(user) {
                return <li>{user.name}</li>
            })
          }
        </ul>
        <h2>Non-Friends</h2>
        <ul>
          {
            this.props.list.filter(function (user) {
                return user.friend === false
              }).map(function(user) {
                return <li>{user.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
MyFilter.propTypes = { list: PropTypes.array.isRequired }

class App extends React.Component {
  render() {
    return (
      <div>
        <MyMap list={['George', 'Mary', 'Rudolph']} />
        <MyFilter list={[
          { name: 'Tyler M.', friend: true },
          { name: 'Ryan', friend: true },
          { name: 'Michael', friend: false },
          { name: 'Mikenzi', friend: false },
          { name: 'Jessica', friend: true },
          { name: 'Dan', friend: false } ]} />
      </div>
    )
  }
}

{AddTen(2,3,4)}
function AddTen(n1,n2,n3) {
  var numbers = [n1,n2,n3];
  var numbersPlusTen = numbers.map(function (num) {
    return num + 10;
  });
  console.log(numbersPlusTen)
}

{ListFriends('Ean Hi', 'Murphy Hi', 'Merrick Hi')}
function ListFriends(f1,f2,f3){
  var friends = [f1,f2,f3];
  var listItems = friends.map(function(friend){
    return "<li> " + friend + "</li>";
  });
  console.log(listItems);
}

{FilterFriends('Ean', 'Tyler', 'Mikenzi', 'Eric', 'Jessica')}
function FilterFriends(f1,f2,f3,f4,f5){
  var friends = [f1,f2,f3,f4,f5];
  var newFriends = friends.filter(function (friend) {
    return friend[0] === 'E'
  });
  console.log(newFriends)
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
