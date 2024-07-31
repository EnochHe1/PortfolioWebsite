import React from 'react'
import CV from '../../Assets/Enoch_Resume.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn btn-primary'>Download CV</a> {}
        <a href="#contacts" className='btn'>Let's Chat!</a> {/*If you click here, it'll take you to another section */}
    </div>
  )
}

export default CTA