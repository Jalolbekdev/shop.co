import React from 'react'

export default function Browse() {
  return (
    <section className='browse'>
      <div className="container">
        <div className="browse__wrap">
            <p className="browse__title">BROWSE BY dress STYLE</p>
            <div className="browse__contents">
                <div className="browse__casual">
                    <div className="browse__casual-img"><img src="/images/browse-img1.png" alt="" /></div>
                    <p className="browse__casual-title">Casual</p>
                </div>
                <div className="browse__formal">
                    <div className="browse__formal-img"><img src="/images/browse-formal.png" alt="" /></div>
                    <p className="browse__formal-title">Formal</p>
                </div>
                <div className="browse__party">
                    <div className="browse__party-img"><img src="/images/browse-party.png" alt="" /></div>
                    <p className="browse__party-title">Formal</p>
                </div>
                <div className="browse__gym">
                    <div className="browse__gym-img"><img src="/images/browse-gym.png" alt="" /></div>
                    <p className="browse__gym-title">Formal</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
