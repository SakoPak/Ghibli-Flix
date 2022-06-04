import React, { useEffect, useState } from 'react'
import { indexProfiles } from '../../api/profile'
import ProfileCard from './ProfileCard'

function IndexProfiles (props) {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const { user, msgAlert } = props
    indexProfiles(user)
      .then((res) => res.data)
      .then((res) => {
        // passing all profiles + response as args to 'setProfiles' function
        setProfiles(res.profiles)
      })
      .then(() => {
        msgAlert({
          heading: 'Index success',
          message: 'Successfully indexed',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Index fail',
          message: 'Index error: ' + error.message,
          variant: 'danger'
        })
      })
  }, [])

  return (
    <div style={{ width: '85%', margin: '1rem auto' }}>

      <h1> Profiles </h1>
      <hr />
      {profiles && profiles.length > 0
        ? profiles.map((profile) => {
          return <ProfileCard key={profile.id} profile={profile} />
        })
        : 'loading...'}
    </div>
  )
}

export default IndexProfiles
