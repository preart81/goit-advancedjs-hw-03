import{S as f,i as n}from"./assets/vendor-f33cd494.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=l(r);fetch(r.href,t)}})();const p="45270476-0e4dc869b670f41fd1cb8efc7",y=a=>{const e=new URLSearchParams({key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:9});return fetch(`https://pixabay.com/api/?${e}`).then(l=>{if(!l.ok)throw new Error(l.statusText);return l.json()})},m=a=>a.map(e=>`  <div class="gallery-card">
        <a href="${e.largeImageURL}" class="gallery-card-link">
          <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" class="gallery-card-img" />
          <ul class="gallery-card-info">
            <li class="gallery-card-info-item">
              <p class="gallery-card-info-name">Likes</p>
              <p class="gallery-card-info-value">${e.likes}</p>
            </li>
            <li class="gallery-card-info-item">
              <p class="gallery-card-info-name">Views</p>
              <p class="gallery-card-info-value">${e.views}</p>
            </li> 
            <li class="gallery-card-info-item">
              <p class="gallery-card-info-name">Comments</p>
              <p class="gallery-card-info-value">${e.comments}</p>
            </li>
            <li class="gallery-card-info-item">
              <p class="gallery-card-info-name">Downloads</p>
              <p class="gallery-card-info-value">${e.downloads}</p>
            </li>
          </ul>
          </a>
        </div>`).join(""),g="Sorry, there are no images matching your search query. Please try again.",h=document.querySelector(".search-form"),s=document.querySelector(".search-text"),d=document.querySelector(".gallery"),u=document.querySelector(".loader");let c="";const S=a=>{if(a.preventDefault(),s.value=s.value.trim(),c=s.value,c===""){n.error({position:"topRight",title:"Error",message:"Enter text"});return}d.innerHTML="",u.style.display="block",y(c).then(e=>{if(e.hits.length===0){n.error({position:"topRight",title:"Error",message:g});return}d.innerHTML=m(e.hits),L.refresh()}).catch(e=>{console.log(e)}).finally(()=>{u.style.display="none"})};h.addEventListener("submit",S);let L=new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,animationSpeed:150,fadeSpeed:150});
//# sourceMappingURL=commonHelpers2.js.map
