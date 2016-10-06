import React, {PropTypes} from 'react';
import CastMember from './CastMember';

const CastMemberList = ({ members }) => {
  const castMembers = members.map((member) => {
    return <CastMember key={member.id} member={member} />
  });

  return (
    <div className="member-list">
      {castMembers}
    </div>
  );
};

CastMemberList.propTypes = {
  members: PropTypes.array.isRequired
};

export default CastMemberList;
