import{a as m,S as p,i as n}from"./assets/vendor-ChKB54Ky.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="48983596-6477ed746a1aeaedff0beb1a5",g="https://pixabay.com/api/";function h(s){const o=`${g}?key=${y}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;return m.get(o).then(r=>!r.data.hits||r.data.hits.length===0?Promise.reject("No images found."):r.data.hits)}const u=document.querySelector(".gallery");let b=new p(".gallery a");function L(s){const o=s.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:i,comments:f,downloads:d})=>`
      <div class="gallery-item">
        <a href="${a}">
          <img src="${r}" alt="${e}" class="gallery-image" />
        </a>
        <div class="info">
          <p class="info-item"> ${t}</p>
          <p class="info-item"> ${i}</p>
          <p class="info-item"> ${f}</p>
          <p class="info-item"> ${d}</p>
        </div>
      </div>`).join("");u.innerHTML=o,b.refresh()}function $(){u.innerHTML=""}git;const c=document.querySelector("#search-form"),l=document.querySelector(".loader");c.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements.searchQuery.value.trim();if(!o){n.error({title:"Error",message:"Please enter a search query!"});return}$(),l.style.display="block",h(o).then(r=>{L(r),n.success({title:"Success",message:"Images loaded!"})}).catch(r=>{n.error({title:"Error",message:r})}).finally(()=>{l.style.display="none",c.reset()})});
//# sourceMappingURL=index.js.map
