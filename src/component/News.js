import React from 'react'
import Footer from './Footer'
import Header from './Header'

const News = () => {
    var color = 'White'
  return (
<>
<Header/>
<div data-w-id="7e7d8120-d7c4-14e4-fb4d-a38b2683785b" class="container">
        <div class="grid-2-columns">
          <div id="w-node-_5cda19f2-6a98-7624-19fd-bba2860f3747-6530f6b1" class="relative-div">
            <h3 data-w-id="707a8e31-2d76-df86-368b-e8edcef50e6a" class="sub-text">Catch up on all our latest musings and thoughts below.<strong><br/></strong></h3>
            <h1 data-w-id="9b2f3c7c-095d-3536-c8d0-69871842fca2"  class="display-1 _2">Latest News</h1>
          </div>
          <div id="w-node-d2f1d323-9aad-b78a-8471-80d1289fe7dc-6530f6b1" data-w-id="d2f1d323-9aad-b78a-8471-80d1289fe7dc" >
            <a href="#Down" data-w-id="0d13720f-9440-8864-5caa-52efa94fc4fd" class="scroll-flex w-inline-block">
              <div  class="circle-bottom"></div>
              <div class="mouse-scroll">
                <div class="mouse-dots"></div>
              </div>
              <div class="scroll-image"></div>
            </a>
          </div>
        </div>
      </div>
      <div class="container">
        <div>
          <div data-w-id="f85cde68-f49d-9162-f772-a88350403d59"  class="social-wrapper-footer">
            <a href="https://www.instagram.com/" target="_blank" class="social-icon-wrapper w-inline-block" >
                <img src="https://uploads-ssl.webflow.com/623b341060c39e4dc7b99525/623c7e9fd621599df95cd867_instagram.png" loading="lazy" width="20" alt="" class="social-image" style={{filter: 'invert(0%)'}}/>
              <div class="social-overlay"></div>
            </a>
            <a href="https://www.twitter.com/" target="_blank" class="social-icon-wrapper w-inline-block">
                <img src="https://uploads-ssl.webflow.com/623b341060c39e4dc7b99525/623c7e9f37b44ce7ee306601_facebook.png" loading="lazy" width="20" alt="" class="social-image"/>
              <div class="social-overlay"></div>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" class="social-icon-wrapper w-inline-block">
                <img src="https://uploads-ssl.webflow.com/623b341060c39e4dc7b99525/623c7e9f5f08d7d3daed0dd9_linkedin.png" loading="lazy" width="18" alt="" class="social-image"/>
              <div class="social-overlay"></div>
            </a>
            <a href="https://www.dribbble.com/" target="_blank" class="social-icon-wrapper w-inline-block">
                <img src="https://uploads-ssl.webflow.com/623b341060c39e4dc7b99525/623c7e9f66ae86ca37aaa98c_dribbble.png" loading="lazy" width="20" alt="" class="social-image"/>
              <div class="social-overlay"></div>
            </a>
            <a href="https://www.dribbble.com/" target="_blank" class="social-icon-wrapper w-inline-block" style={{ backgroundColor : 'white'}}>
                <img src="https://uploads-ssl.webflow.com/623b341060c39e4dc7b99525/623c7e9e6ad17ea295c46e27_twiiter.png" loading="lazy" width="20" alt="" class="social-image"/>
              <div class="social-overlay"></div>
            </a>
          </div>
        </div>
      </div>
      


      <div id="Down" class="section wf-section">
      <div class="container">
        <div>
          <div class="w-dyn-list">
            <div role="list" class="blog-grid w-dyn-items">
              <div role="listitem" class="w-dyn-item">
                <a data-w-id="acbe8ee6-a4e4-6ab1-c88d-4fe6fe7934d0" href="/" class="blog-wrapper w-inline-block">
                  <div class="button-flex left">
                    <p class="category-text"></p>
                    <div class="horizontal-divider _15px"></div>
                    <p class="category-text"></p>
                  </div>
                  <div class="blog-text"></div>
                  <img src="" loading="lazy"  alt="" class="blog-image"/>
                  <div class="margin-15px">
                    <p class="project-summary"></p>
                  </div>
                  <div>
                    <div class="button">Read More</div>
                  </div>
                </a>
              </div>
            </div>
            <div class="w-dyn-empty">
              <div>No items found.</div>
            </div>
          </div>
          <div class="margin-120px">
            <div class="max-w-width _2">
              <div id="w-node-_70124fe1-2f62-c2a9-2bc4-6cb60d56d31f-6530f6b1" class="relative-div">
                <h3 data-w-id="70124fe1-2f62-c2a9-2bc4-6cb60d56d320"  class="sub-text">Want to start a project?</h3>
                <h3 data-w-id="70124fe1-2f62-c2a9-2bc4-6cb60d56d322"  class="display-1">Let&#x27;s Talk<br/></h3>
                <div data-w-id="70124fe1-2f62-c2a9-2bc4-6cb60d56d325"  class="margin-50px">
                  <a href="/" class="button w-button">contact us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
</>
  )
}

export default News