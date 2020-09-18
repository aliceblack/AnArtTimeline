import React from 'react';
import logo from './tree.png';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const classes = makeStyles();

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        isFetching: false,
        items: [{"id":0}]
    };
  }


  render() {
    var listItems = this.state.items.map(function(item) {
      return (
        <Card className="card-style">
           <CardMedia
        className="media-style"
        image={item?.media}
        title="Live from space album cover"
      />
          <CardContent>
            <Typography  color="textSecondary" gutterBottom>
              {item?.id}
            </Typography>
            <Typography variant="h5" component="h2">
              {item?.title}
            </Typography>
            <Typography  color="textSecondary">
              {item?.content}
            </Typography>
            <Typography variant="body2" component="p">
              {item?.reference}
            </Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      ); 
    }); 
    return (
      <div> 
        <div> 
          {listItems} 
        </div> 
      </div> 
    ); 
  } 

  componentDidMount() {
    const current = this;
    fetch("/items.json")
    .then(response=>response.json())
    .then(data=>{
      console.log(data);
      current.setState({items: data});
    })
  }
}

function App(classes) {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          An Art timeline
        </p>
        <Board></Board>
      </header>
    </div>
  );
}


export default App;
