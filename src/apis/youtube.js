import axios from 'axios';

const KEY='AIzaSyD0Im4r1Cis9D7mfFeffyeJLL6Qk5eKZQg';

export default axios.create({

baseURL:'https://www.googleapis.com/youtube/v3',
params:{
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
}
});