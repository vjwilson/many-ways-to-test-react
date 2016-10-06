import React, {PropTypes} from 'react';

const CastMember = ({ member }) => {
  const imageUrl = `/images/${member.thumbnailUrl}`;

  return (
    <div className="media">
      <div className="media-left">
        <a href="#">
          <img className="media-object" src={imageUrl} alt={member.name} />
        </a>
      </div>
      <div className="media-body">
        <h2 className="media-heading">{member.name}</h2>
        {member.bio}
      </div>
    </div>
  );
};

CastMember.propTypes = {
  member: PropTypes.object.isRequired
};

export default CastMember;
