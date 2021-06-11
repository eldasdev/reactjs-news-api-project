import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Row, CardSubtitle, CardFooter, Button } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }
  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2021-05-11&sortBy=publishedAt&apiKey=e85079e23c1849798b9b4e747d11c120"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          articles: data.articles
        })
      })
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        {this.state.articles.map((item, index) => {
          return (
            <Row>
              <Card>
              <CardImg top width="100%" src={item.urlToImage} alt={item.title} /> 
              <CardBody>
                <CardTitle tag="h3">{item.title}</CardTitle>
                <CardSubtitle tag="h5">{item.author}</CardSubtitle>
                <CardText>
                {item.content}
                </CardText>
              </CardBody>
              <CardFooter>
                <Button color="primary"><a href={item.url} style={{
                  color: "#ffffff",
                  textDecoration: "none"
                }}>Read More</a></Button>
              </CardFooter>
            </Card>
            </Row>
          )
        })}
      </div>
    )
  }
}

export default App;
