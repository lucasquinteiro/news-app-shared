import React from 'react';

const NewsItem = ({title, urlToImage, description}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '400px',
      justifyContent: 'center',
      borderBottom: '1px solid grey',
    }}>
    <img style={{width: '400px', height: '200px'}} src={urlToImage} />
    <p style={{fontSize: '20px'}}>{title}</p>
    <p style={{fontSize: '12px', color: 'grey'}}>{description}</p>
  </div>
);

const HomeView = ({news, loading}) => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        {loading ? (
          <p>Loading news ...</p>
        ) : (
          news.map((item) => <NewsItem {...item} />)
        )}
      </div>
    </div>
  );
};

export default HomeView;
