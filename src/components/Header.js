import React, {Component} from 'react'

import './header.css'
import hnlogo from '../img/hnLogo.gif'
export default class Header extends Component {



    getNav = () => {
        let  navLinks = [
          {
            name: ' new',
            url: 'newest'
          },
          {
            name: 'comments',
            url: 'newcomments'
          },
          {
            name: 'show',
            url: 'show'
          },
          {
            name: 'ask',
            url: 'ask'
          },
          {
            name: 'jobs',
            url: 'jobs'
          },
          {
            name: 'submit',
            url: 'submit'
          }
        ];

        return (
            <div className="newsHeader-nav">
             { navLinks.map((navLink) => {
                 return (
                 <a key={navLink.url} className="newsHeader-navLink newsHeader-textLink" href={'https://news.ycombinator.com/' + navLink.url}>
                     {"   "  + navLink.name}
                      </a>
             )})}
            </div>
          );

    }
    getLogo = () => {
        return (
            <div className="newsHeader-logo">
                <a href="https://www.ycombinator.com"><img src={hnlogo} alt="logo" /></a>
            </div>
        );
    }

    getTitle = () => {
        return (
            <div className="newsHeader-title">
                <a className="newsHeader-textLink" href="https://news.ycombinator.com">Hacker News</a>
            </div>
        );
    }

    render() {
        return (
            <div className="newsHeader">
                {this.getLogo()}
                {this.getTitle()}
                {this.getNav()}
            </div>
        );
    }
}
// {_(navLinks).map(function (navLink) {
//     return (
//       <a key={navLink.url} className="newsHeader-navLink newsHeader-textLink" href={'https://news.ycombinator.com/' + navLink.url}>
//         {navLink.name}
//       </a>
//     );
//   }).value()}