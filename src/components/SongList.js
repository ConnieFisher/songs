import React, { Component } from 'react'
import { connect } from 'react-redux';



class SongList extends Component {
    state = {  }
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song}>
                    <div className="right floated content">
                        <button className="ui button primary">
                            Select
                        </button>                            
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }
    
    render() { 
        


        return ( 
            <div className="ui divied list">{this.renderList()}</div>

         );
    }
}
 

const mapStateToProps = (state) => {
    

    return { songs: state.songs };
};
    

  
export default connect(mapStateToProps)(SongList);
