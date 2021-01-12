import React from 'react';
import PropTypes from 'prop-types'

const Profile =({FullName,Bio,Profession, children})=>{
return(
    <div>
        
    <h2>FullName:{FullName}</h2>
    <h2>Bio: {Bio}</h2>
    <h3>Profession : {Profession}</h3>
    {children}
</div>
)
}
Profile.defaultProps={
    FullName : 'Derouiche Aymen',
    Bio : 'Hi its code time hahahah ',
    Profession :' fullStack java script devlopper'
    }

 Profile.propTypes ={
FullName : PropTypes.string,
Profession : PropTypes.string
}

export default Profile