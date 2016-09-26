var React = require('react');
var CastMember = require('./CastMember');

var CastMemberList = React.createClass({
  render: function() {
    const castMembers = this.props.members.map((member) => {
      return <CastMember key={member.id} member={member} />
    });

    return (
      <div className="member-list">
        {castMembers}
      </div>
    );
  }
});

module.exports = CastMemberList;
