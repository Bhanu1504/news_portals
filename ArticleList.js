import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleList = ({ articles }) => {
  
  return (
    <div className="article-list">
      {articles.map((article) => (
        <ArticleCard key={article.url} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
