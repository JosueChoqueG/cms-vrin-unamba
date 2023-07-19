---
id: a06ff53f-d3b7-41e7-8238-a6d311cbec1a
blueprint: page
title: 'Our Services'
author: dc11e792-8eb4-4c01-aaa0-a81f48cc974e
template: home
block_types:
  -
    page_heading: 'Our Services'
    page_sub_heading: 'Our Services'
    template: |-
      <section class="page-heading">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="header-text">
                  <h4>{{page_heading}}</h4>
                  <h1>{{page_sub_heading}}</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
    type: page_heading
    enabled: true
  -
    heading_1: 'Our Services'
    heading_2: 'Provided <em>Services</em>'
    template: |-
      <section class="services" id="services">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-heading">
                  <h6>{{heading_1}}</h6>
                  <h4>{{heading_2}}</h4>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="owl-service-item owl-carousel">
      	          
      	        {{collection:our_services}}  
      	          
                  <div class="item">
                    <div class="service-item">
                      <div class="icon">
                        <img src="{{service_image}}" alt="{{title}}">
                      </div>
                      <h4>{{title}}</h4>
                      {{content}}
                    </div>
                  </div>
                  {{/collection:our_services}}
                  
                 
                </div>
              </div>
            </div>
          </div>
        </section>
    type: our_service
    enabled: true
  -
    image: cta-left-image-1661927334.png
    title_1: 'Get the sale right now!'
    title_2: 'Up to 50% OFF For 1+ courses'
    description: "Kogi VHS freegan bicycle rights try-hard green juice probably haven't heard of them cliche la croix af chillwave."
    button_text: 'View courses'
    button_link: 'entry::598d6815-7f0b-4481-9cab-cf5c857885f9'
    link_target: _self
    template: |-
      <section class="simple-cta">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 offset-lg-1">
                <div class="left-image">
                  <img src="{{image}}" alt="{{title_1}}">
                </div>
              </div>
              <div class="col-lg-5 align-self-center">
                <h6>{{title_1}}</h6>
                <h4>{{title_2}}</h4>
                <p>{{description}}</p>
                <div class="white-button">
                  <a href="{{button_link}}" target="{{link_target}}">{{button_text}}</a>
                </div>
              </div>
            </div>
          </div>
        </section>
    type: highlight_box
    enabled: true
  -
    title_1: 'OUR OFFICE'
    title_2: 'Get closer to <em>EduWell</em>'
    description: |-
      Trust fund nocore broklyn humblebrag mustache pork kitsch, bicycle rights hexagon schlitz keytar palo is santo drinking vinegar fam ramps.

      Four dollar toast and edison bulb vinyl, listicle hashtag pug scenester typewrit er yuccie street artboard or whatever to fill place.

      - Selfies you probably haven't heard of them.
      - Tousled cold-pressed chicharrones yuccie.
      - Pabst iPhone chartreuse shabby chic tumeric.
      - Scenester normcore mumblecore snackwave.
    video_thumbnail: video-thumb.jpg
    button_link: 'entry::240dc032-627b-408f-a805-1b3c596a269c'
    button_label: 'Our Services'
    button_target: _blank
    video_url: 'https://www.youtube.com/channel/UCp7T2WyMWuKIEEQyr6EqLuw'
    template: |-
      <section class="contact-us our-office">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="left-info">
                  <div class="section-heading">
                    <h6>{{title_1}}</h6>
                    <h4>{{title_2}}</h4>
                  </div>
                  {{description}}
                  <div class="main-button-gradient">
                    <a href="{{button_link}}" target="{{button_target}}">{{button_label}}</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-8">
                <div id="video">
                  <div class="thumb">
                    <img src="{{video_thumbnail}}" alt="{{title_2}}">
                    <div class="play-button">
                      <a rel="nofollow" href="{{video_url}}" target="_blank"><i class="fa fa-play"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              
             
            </div>
          </div>
        </section>
    type: video_highlight
    enabled: true
  -
    title_1: 'FEATURED SERVICE'
    title_2: 'Best Of Our <em>Product</em>'
    middle_image:
      - featured-product.jpg
    type: featured_service
    enabled: true
    template: |-
      <section class="featured-product">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-heading">
                   <h6>{{title_1}}</h6>
                  <h4>{{title_2}}</h4>
                </div>
              </div>
              <div class="col-lg-3 align-self-center">
                <div class="left-info">
      	          
      	         {{ collection:our_services limit="2" offset="0" is_featured:exists="true" status:in="published"}}
      			  
      			  <div class="col-lg-12">
                    <div class="info-item {{ if last }}last-info{{/if}}">
                      <div class="icon">
                        <img src="{{service_image}}" alt="{{title}}">
                      </div>
                      <h4>{{title}}</h4>
                      {{content}}
                    </div>
                  </div>
       
      			 {{ /collection:our_services }}  
      	          
                  
                </div>
              </div>
              <div class="col-lg-6">
                <div class="product-image">
                  <img src="{{middle_image}}" alt="{{title_1}}">
                </div>
              </div>
              <div class="col-lg-3 align-self-center">
                <div class="right-info">
      	           {{ collection:our_services limit="2" offset="2" is_featured:exists="true" status:in="published"}}
                  <div class="col-lg-12">
                    <div class="info-item">
                      <div class="icon">
                        <img src="{{service_image}}" alt="{{title}}">
                      </div>
                      <h4>{{title}}</h4>
                      {{content}}
                    </div>
                  </div>
                  {{ /collection:our_services }}
                  
                </div>
              </div>
            </div>
          </div>
        </section>
updated_by: dc11e792-8eb4-4c01-aaa0-a81f48cc974e
updated_at: 1675839125
published: true
---
