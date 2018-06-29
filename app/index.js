var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var PropTypes = require('prop-types')

// state
// lifecycle event
// UI

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
