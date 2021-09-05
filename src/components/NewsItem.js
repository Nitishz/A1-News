import React from 'react'

const NewsItem = (props) => {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className='my-3'>
                <div className="card">
                    <span class='position-absolute top-0 translate-midle badge rounded-pill bg-danger' style={{left: '0', zIndex: '1'}}>{source}</span>
                    <img src={imageUrl ? imageUrl : 'https://www.northampton.ac.uk/wp-content/uploads/2018/11/default-svp_news.jpg'} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
