import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getArticles } from '../../actions';
import { Card, Grid, Image, Feed } from 'semantic-ui-react';


const renderArticles = articles => articles.map((article, i) => (
  <Feed.Event key={i}>
    <Feed.Label href={article.url}>{article.title}</Feed.Label>
    <br /><Image href={article.url} src={article.urlToImage} />
    <Feed.Content>
      <Feed.Summary>
        <Feed.Date>{article.publishedAt}</Feed.Date>
      </Feed.Summary>
      <Feed.Extra text>{article.description}</Feed.Extra>
      <br /><Feed.Meta />
      <br /><br /></Feed.Content>
  </Feed.Event>
    ));

class Articles extends Component {

  componentDidMount() {
    this.props.getArticles();
  }
  render() {
    const { articles } = this.props;
    return (
      <Grid stackable>{renderArticles(articles)}</Grid>
    );
  }
}

export default connect(({ articles }) => ({ articles }), { getArticles })(Articles);
