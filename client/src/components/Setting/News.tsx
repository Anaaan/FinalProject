import React, { useEffect, useState } from "react";

type Article = {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
};

const NewsPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const API_KEY = "f6e5880b17054350ace71a371c6bc5e7 "; // Store in .env file
        const url = `https://newsapi.org/v2/everything?q=finance+OR+investment+OR+stocks+OR+crypto+OR+budgeting&language=en&sortBy=publishedAt&apiKey=${API_KEY}`;

        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="news-container">
      <h2 className="news-title">Latest Financial News</h2>
      <div className="news-grid">
        {articles.map((article, index) => (
          <div key={index} className="news-card">
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} className="news-image" />
            )}
            <div className="news-content">
              <h3 className="news-heading">{article.title}</h3>
              <p className="news-description">{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-link">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
