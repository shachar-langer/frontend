import React from 'react'
import { Button } from '@material-ui/core'

import useTeam from './useTeam'
import Staff from './staff'

type TeamProps = {
  makeAndTrackRef: () => React.MutableRefObject<any>
  availability: string
  setAvailability: React.Dispatch<React.SetStateAction<string>>
}

const Team: React.FC<TeamProps> = ({ makeAndTrackRef, availability, setAvailability }) => {
  const { teamMembers } = useTeam()

  const onClick = () => {
    if (availability !== 'volunteer') {
      // tslint:disable-next-line: no-expression-statement
      setAvailability('volunteer')
    }
    // tslint:disable-next-line: no-expression-statement
    document.getElementsByClassName('join')[0].scrollIntoView()
  }

  return (
    <div className="team">
      <div className="volunteer">
        <h1 ref={makeAndTrackRef()}>Community of volunteers</h1>
        <p ref={makeAndTrackRef()}>
          Go deeper than that. Large corporations have taken control of a once open system. While they have brought efficiency, the platforms they have built
          are for their benefit.
        </p>
        <Button className="mhi-button" ref={makeAndTrackRef()} onClick={onClick}>
          Volunteer
        </Button>
      </div>
      <div className="staff">
        {teamMembers.map(member => (
          <Staff
            key={member.name}
            makeAndTrackRef={makeAndTrackRef}
            name={member.name}
            title={member.title}
            image_file_name={member.image_file_name}
            background_color={member.background_color}
            background_shape={member.background_shape}
          />
        ))}
      </div>
    </div>
  )
}

export default Team
