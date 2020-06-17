import {backendLookup} from '../lookup';
import { TweetDetailComponent } from '../tweets';

export function apiProfileDetail(username, callback) {
    backendLookup("GET", `/profiles/${username}/`, callback)
}

export function apiProfileFollowToggle(username, action, callback) {
    const data = {action: `${action && action}`.toLowerCase()}
    backendLookup("POST", `/profiles/${username}/follow`, callback, data)
}