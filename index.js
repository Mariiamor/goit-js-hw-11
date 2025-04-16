import{a as h,S as f,i as g}from"./assets/vendor-CwNK-mcT.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function p(a){const s={params:{key:"48678129-2163769dcaa82a491114adb07",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}};return h.get("https://pixabay.com/api/",s)}const y="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3c!--%20Magnifying%20Glass%20--%3e%3ccircle%20cx='10'%20cy='10'%20r='7'%20stroke='%23fff'%20stroke-width='2'%20/%3e%3cline%20x1='15'%20y1='15'%20x2='21'%20y2='21'%20stroke='%23fff'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3c!--%20Cross%20inside%20the%20lens%20--%3e%3cline%20x1='7'%20y1='7'%20x2='13'%20y2='13'%20stroke='%23fff'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3cline%20x1='13'%20y1='7'%20x2='7'%20y2='13'%20stroke='%23fff'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3c/svg%3e",n=document.querySelector(".gallery"),l=document.querySelector(".loader-box");let b=new f(".gallery a",{captionsData:"alt",captionDelay:250});function v(a){const s=a.map(({webformatURL:i,largeImageURL:r,tags:e,likes:t,views:o,comments:u,downloads:m})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${r}">
              <figure class="thumb-container">
                <img
                  class="thumb-image"
                  src="${i}"
                  data-source="${r}"
                  alt="${e}"
                />

                <figcaption class="thumb-data">
                  <dl class="thumb-data-list">
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Likes</dt>
                      <dd class="thumb-data-data">${t}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Views</dt>
                      <dd class="thumb-data-data">${o}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Comments</dt>
                      <dd class="thumb-data-data">${u}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Downloads</dt>
                      <dd class="thumb-data-data">${m}</dd>
                    </div>
                  </dl>
                </figcaption>
              </figure>
            </a>
          </li>
        `).join("");n.innerHTML=s,b.refresh(),c()}function x(){n.innerHTML=""}function w(){n.classList.add("hidden"),l.classList.remove("hidden")}function c(){n.classList.remove("hidden"),l.classList.add("hidden")}function L(){g.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",iconUrl:y,maxWidth:"432px",backgroundColor:"#EF4040"})}const S=document.querySelector("form"),d=document.querySelector("#search-text");S.addEventListener("submit",k);function k(a){a.preventDefault();const s=d.value.trim();s&&(d.value="",x(),w(),p(s).then(i=>{const r=i.data.hits;$(r)}).catch(i=>{console.error("Error fetching images:",i),c()}))}function $(a){if(!a.length){L(),c();return}v(a)}
//# sourceMappingURL=index.js.map
