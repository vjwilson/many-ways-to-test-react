var React = require('react');

var CastMember = React.createClass({
  render: function() {
    var imageUrl = `/images/${this.props.member.thumbnailUrl}`;

    return (
      <div className="media">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src={imageUrl} alt={this.props.member.name} />
          </a>
        </div>
        <div className="media-body">
          <h2 className="media-heading">{this.props.member.name}</h2>
          {this.props.member.bio}
        </div>
      </div>
    );
  }
});

module.exports = CastMember;

