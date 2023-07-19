---
id: 240dc032-627b-408f-a805-1b3c596a269c
blueprint: page
title: 'About Us'
author: dc11e792-8eb4-4c01-aaa0-a81f48cc974e
template: home
updated_by: dc11e792-8eb4-4c01-aaa0-a81f48cc974e
updated_at: 1676161747
block_types:
  -
    page_heading: 'About Us'
    page_sub_heading: 'More About Us'
    type: page_heading
    enabled: true
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
  -
    title_1: 'GET INFO'
    title_2: 'Read More <em>About Us</em>'
    description: |-
      You are allowed 100% to download and use our templates from TemplateMo for your commercial or business websites. You are not allowed to redistribute this template ZIP file on any other website without a permission from us.

      There are some unethical people on this planet earth who copied our templates so easily without any permission from us and then reposted on their websites. Their Karma will hit them really hard. Yeah, that is right.
    strategy_1_icon: service-icon-01-1661924515.png
    strategy_1_text: 'Best Strategy'
    strategy_1_data: 'Food & truck tumeric taxidermy hoodie chiasore bitters retroed gentrify street portland.'
    strategy_2_icon: service-icon-02-1661924544.png
    strategy_2_text: 'Creative Ideas'
    strategy_2_data: 'Food & truck tumeric taxidermy hoodie chiasore bitters retroed gentrify street portland.'
    template: |-
      <section class="get-info">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="left-image">
                  <img src="{{image_left}}" alt="{{title_1}}">
                </div>
              </div>
              <div class="col-lg-6 align-self-center">
                <div class="section-heading">
                  <h6>{{title_1}}</h6>
                  <h4>{{title_2}}</h4>
                  {{description}}
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="info-item">
                      <div class="icon">
                        <img src="{{strategy_1_icon}}" alt="{{strategy_1_text}}">
                      </div>
                      <h4>{{strategy_1_text}}</h4>
                      {{strategy_1_data}}
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="info-item">
                      <div class="icon">
                        <img src="{{strategy_2_icon}}" alt="{{strategy_2_text}}">
                      </div>
                      <h4>{{strategy_2_text}}</h4>
                      {{strategy_2_data}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    type: get_info
    enabled: true
    image_left: about-left-image.png
  -
    title_1: 'OUR TEAM'
    title_2: 'Our Team <em>Members</em>'
    type: team_members
    enabled: true
    template: |-
      <section class="our-team">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 offset-lg-3">
                <div class="section-heading">
                  <h6>{{title_1}}</h6>
                  <h4>{{title_2}}</h4>
                </div>
              </div>
              <div class="col-lg-10 offset-lg-1">
                <div class="naccs">
                  <div class="tabs">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="menu">
      	                  
      	                {{collection:team_members}}  
      	                  
      	                  
                          <div class="{{ if first }} active {{/if}}">
                            <img src="{{member_small_image}}" alt="{{title}}">
                            <h4>{{title}}</h4>
                            <span>{{designation}}</span>
                          </div>
                          
                          {{/collection:team_members}} 
                          
                          
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <ul class="nacc">
      	                  
      	                  
      	               {{collection:team_members}}    
      	                  
                          <li class="{{ if first }} active {{/if}}">
                            <div>
                              <div class="left-content">
                                <h4>{{title}}</h4>
                                {{content}}
                                
                                
                              </div>
                              <div class="right-image">
                                <img src="{{member_big_image}}" alt="{{title}}">
                              </div>
                            </div>
                          </li>
                         
                          {{/collection:team_members}} 
                         
                        
                           
                          </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  -
    image: cta-left-image-1661927334.png
    title_1: 'Get the sale right now!'
    title_2: 'Up to 50% OFF For 1+ courses'
    description: "Kogi VHS freegan bicycle rights try-hard green juice probably haven't heard of them cliche la croix af chillwave."
    button_text: 'Get Now'
    button_link: 'http://www.google.com'
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
    title_1: TESTIMONIALS
    title_2: 'What They <em>Think</em>'
    template: |-
      <section class="testimonials" id="testimonials">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-heading">
                  <h6>{{title_1}}</h6>
                  <h4>{{title_2}}</h4>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="owl-testimonials owl-carousel" style="position: relative; z-index: 5;">
      	          
      	          {{collection:testimonials}}  
                  <div class="item">
                    {{content}}
                      <h4>{{title}}</h4>
                      <span>{{designation}}</span>
                      <img src="{{icon}}" alt="{{title}}">
                  </div>
                  
                  {{/collection:testimonials}}  
            
                </div>
              </div>
            </div>
          </div>
        </section>
    type: testimonials
    enabled: true
    icon: quote.png
  -
    title_1: 'Our Office'
    title_2: 'Get Closer To EduWell'
    description: |-
      <p>Trust fund nocore broklyn humblebrag mustache
                    pork kitsch, bicycle rights hexagon schlitz keytar palo is
                    santo drinking vinegar fam ramps. <br><br>Four dollar toast and
                    edison bulb vinyl, listicle hashtag pug scenester typewrit
                    er yuccie street artboard or whatever to fill place.</p>
                  <ul>
                    <li>- Selfies you probably haven't heard of them.</li>
                    <li>- Tousled cold-pressed chicharrones yuccie.</li>
                    <li>- Pabst iPhone chartreuse shabby chic tumeric.</li>
                    <li>- Scenester normcore mumblecore snackwave.</li>
                  </ul>
    video_thumbnail: video-thumb.jpg
    button_link: 'https://www.youtube.com/channel/UCp7T2WyMWuKIEEQyr6EqLuw'
    button_label: 'Read More'
    button_target: _blank
    video_url: 'https://www.youtube.com/channel/UCp7T2WyMWuKIEEQyr6EqLuw'
    type: video_highlight
    enabled: true
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
published: true
---
