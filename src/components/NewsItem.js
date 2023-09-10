import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description} = this.props;
    return (
      <div>
            <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src="https://png2.cleanpng.com/sh/a8fdefcc70794722697aff50cdbb3631/L0KzQYm3VcI6N5DmR91yc4Pzfri0gfFrNaVmg59ybnTscX77hfxmfpp4gdH3LXPrcbB1hfwudpZ8i59rcnBkdLTokCRqdpgyhtdCcz3kfrTvjCIud58yjOg2YoLocbzwjvcudpZ8i58AYkDnSbKBUMg6apI8TJC7MEC8R4K6VsE2Omg7Sao6N0a4RoW4TwBvbz==/kisspng-aaj-tak-india-television-channel-news-broadcasting-news-anchor-on-tv-breaking-news-5b0d9a8089ba74.2009713615276181765641.png" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
      </div>
    )
  }
}
