import React from 'react';
import Story from './Story/Story';
import './StoryReel.css';


function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://th.bing.com/th/id/OIP.0Vn5ctHZQcw8B5Sml8C30QHaJ4?pid=ImgDet&rs=1"
        profileSrc="https://res.cloudinary.com/teepublic/image/private/s--3NCQXyCw--/t_Preview/b_rgb:eae0c7,c_limit,f_jpg,h_630,q_90,w_630/v1503150174/production/designs/1835860_1.jpg"
        title="Saitama 埼玉県"
      />
      <Story
        image="https://th.bing.com/th/id/OIP.K2S2LLDtPtWE6AlqobR--wHaFA?pid=ImgDet&rs=1"
        profileSrc="https://th.bing.com/th/id/R.60bc4a01d8f5359e37514d3b0b1aa9ab?rik=xoy0fq2Q02QZCg&pid=ImgRaw&r=0"
        title="Chuck Norris"
      />
      <Story
        image="https://c1.staticflickr.com/9/8703/16925282625_9690498742_z.jpg"
        profileSrc="https://th.bing.com/th/id/R.c3ab395bcd3be924826ececf9d73270b?rik=M8pd2u8nZiG4ug&pid=ImgRaw&r=0"
        title="Clark Kent"
      />
      <Story
        image="https://th.bing.com/th/id/OIP.0i2Rat5b0mBkSMbrjRZkawHaE8?pid=ImgDet&rs=1"
        profileSrc="https://th.bing.com/th/id/R.2653ef8eca34a8ea9b726a507d6e25d8?rik=E53BRL0GuosswQ&pid=ImgRaw&r=0"
        title="Gooselin Sweet"
      />
      <Story
        image="https://th.bing.com/th/id/OIP.sAuYdLeeZwHUbV_1oPBztgHaJO?pid=ImgDet&rs=1"
        profileSrc="https://vignette.wikia.nocookie.net/step-by-step/images/6/63/Tumblr_m2gbl4enBN1r70k73o1_540.jpg/revision/latest/scale-to-width-down/310?cb=20150919024426"
        title="Frank Lamberd"
      />
    </div>
  );
}

export default StoryReel;
