import React from 'react'

import SingleInmateInfo from "../../components/single-inmate-info/single-inmate-info.component"

const SingleSelectedInmateProfile = ({...props}) => {
  return (
    <SingleInmateInfo {...props} />
  )
}

export default SingleSelectedInmateProfile;