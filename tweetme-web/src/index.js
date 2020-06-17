import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { FeedComponent, TweetsComponent, TweetDetailComponent } from './tweets';
import {ProfileBadgeComponent} from './profiles';
const appEl = document.getElementById('root');
const tweetDetailEl = document.querySelectorAll(".tweetme-detail")
const tweetsEl = document.getElementById("tweetme")
const tweetFeedEl = document.getElementById("tweetme-feed")
const userProfileBadgeEl = document.querySelectorAll('.tweetme-profile-badge')
const x = React.createElement

if(appEl) {
  ReactDOM.render(<App/>, appEl);
}

if(tweetsEl) {
  ReactDOM.render(x(TweetsComponent, tweetsEl.dataset), tweetsEl)
}

if(tweetFeedEl) {
  ReactDOM.render(x(FeedComponent, tweetFeedEl.dataset), tweetFeedEl)
}

tweetDetailEl.forEach(container => {
  ReactDOM.render(x(TweetDetailComponent, container.dataset), container)
})

userProfileBadgeEl.forEach(container => {
  ReactDOM.render(x(ProfileBadgeComponent, container.dataset), container)
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
