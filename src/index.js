// Libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

// Components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Definitions
const API_KEY = 'AIzaSyA50rmUxCIgLJMBPtWnoMtT7vbQTj4yonc';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    };

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    };

    render() {
        const videoSearch = _.debounce(term => { this.videoSearch(term) }, 400);
        return(
            <div>
                <h1>Hi!</h1>
                <SearchBar onSearchTermChange={ videoSearch }/>
                <VideoDetail video={ this.state.selectedVideo }/>
                <VideoList
                    onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
                    videos={ this.state.videos } 
                />
            </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));