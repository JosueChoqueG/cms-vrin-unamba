---
id: 15bd7958-9496-437f-baef-dca3f0046c7d
blueprint: page
title: Testimonials
author: dc11e792-8eb4-4c01-aaa0-a81f48cc974e
template: home
block_types:
  -
    page_heading: Testimonials
    page_sub_heading: 'Client Reviews'
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
    title_1: Testimonials
    title_2: 'Client Reviews'
    icon: quote.png
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
updated_by: dc11e792-8eb4-4c01-aaa0-a81f48cc974e
updated_at: 1674795822
published: true
---
