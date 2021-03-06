import React from "react";
import "./Track.css";

export default class Track extends React.Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this)
  }
  
  renderAction() {
    return this.props.isRemoval ? 
            <button className="Track-action"
                    onClick={this.removeTrack}>-</button> :
            <button className="Track-action"
                    onClick={this.addTrack}>+</button>;
  }

  addTrack() {
    let track = this.props.track;
    this.props.onAdd(track);
  }

  removeTrack() {
    let track = this.props.track;
    this.props.onRemove(track);
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album.name}
          </p>
        </div>
        {/* <button class="Track-action"><!-- + or - will go here --></button> */}
        {this.renderAction()}
      </div>
    );
  }
}
