// Include the two React dependencies

var React = require('react');
var Router = require('react-router');

// Create the main component

var Main = React.createClass({
// render is required for component classes
  render: function() {
    return (
      // One main container div is rendered for the entire app
      <div className="main-container"> 

        <div className="container">
          {/* This is how you comment out in React*/}
        {/* using Navbar template from bootstrap*/}
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                  <a class="navbar-brand" href="#">New York Times - React</a>
              </div>

              <div className="collapse navbar-ex1-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#/search">Search</a></li> 
                  <li><a href="#/saved">Saved Articles</a></li>
                </ul>
              </div>
            </div>
          </nav>


    );
  }
})