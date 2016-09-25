import React from 'react';
import CastMember from './CastMember';

const CastMemberList = ({members}) => {
  const castMembers = members.map((member) => {
    return <CastMember key={member.id} member={member} />
  });

  return (
    <div>
      {castMembers}
    </div>
  );
}

export default CastMemberList;

