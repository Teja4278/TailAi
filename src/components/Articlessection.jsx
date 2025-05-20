import React from 'react';

// Dummy article data
const articles = [
  {
    image: require('../assets/tale7.webp'),
    title: 'Effective Marketing Strategies for SaaS',
    author: 'Sarah Wilson',
    date: 'October 5, 2023',
  },
  {
    image: require('../assets/tale8.webp'),
    title: 'The Future of SaaS Startups and AI',
    author: 'Michael Brown',
    date: 'October 4, 2023',
  },
  {
    image: require('../assets/tale9.webp'),
    title: 'Building Effective SaaS Websites And Templates',
    author: 'Emily Johnson',
    date: 'October 3, 2023',
  },
];

const Articlessection = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Explore Our Latest Articles</h2>
      <div className="row">
        {articles.map((article, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="card-img-top"
                style={{ height: '240px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title fw-semibold">{article.title}</h5>
                <div className="d-flex justify-content-between text-muted small mt-3">
                  <span>By {article.author}</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articlessection;
