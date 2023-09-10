import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
        <div className='contaner my-3'>
            <h2>NewsMonkey top headlines</h2>
            <div className='row'>
                <div className='col-md-3'>
                    <NewsItem title="MyTitle1" description = "hello this is the news item 1"/>
                </div>
                <div className='col-md-3'>
                    <NewsItem title="MyTitle1" description = "hello this is the news item 1"/>
                </div>
                <div className='col-md-3'>
                    <NewsItem title="MyTitle1" description = "hello this is the news item 1"/>
                </div>
                <div className='col-md-3'>
                    <NewsItem title="MyTitle1" description = "hello this is the news item 1"/>
                </div>
            </div>
        </div>
        
    )
  }
}
