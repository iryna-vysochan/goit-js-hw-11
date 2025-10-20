import{a as m,S as u,i as n}from"./assets/vendor-BSTwZ_tR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function g(a){return m.get("https://pixabay.com/api/",{params:{key:"52124620-04c3728bcdfdd891621e81587",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:36}}).then(t=>t.data.hits).catch(()=>[])}const o=document.querySelector(".gallery"),c=document.querySelector(".span-loader"),p=new u(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:1});function y(a){let t="";for(const r of a)t+=`<li class="gallery-item">
            <a class="gallery-link" href="${r.largeImageURL}">
            <img
                class="gallery-img"
                src="${r.webformatURL}"
                alt="${r.tags}"
            />
            <ul class="gallery-desc">
                <li class="gallery-desc-item">
                    <span class="gallery-desc-item-name">Likes</span>
                    <span class="gallery-desc-item-value">${r.likes}</span>
                </li>
                <li class="gallery-desc-item">
                    <span class="gallery-desc-item-name">Views</span>
                    <span class="gallery-desc-item-value">${r.views}</span>
                </li>
                <li class="gallery-desc-item">
                    <span class="gallery-desc-item-name">Comments</span>
                    <span class="gallery-desc-item-value">${r.comments}</span>
                </li>
                <li class="gallery-desc-item">
                    <span class="gallery-desc-item-name">Downloads</span>
                    <span class="gallery-desc-item-value">${r.downloads}</span>
                </li>
            </ul>
            </a>
        </li>`;o.insertAdjacentHTML("beforeend",t),p.refresh()}function f(){o.innerHTML=""}function h(){c.classList.add("loader")}function L(){c.classList.remove("loader")}const d=document.querySelector(".form"),b=a=>{a.preventDefault();const t=a.target.elements["search-text"].value.trim();if(d.reset(),!t){n.warning({title:"Warning",message:"Please enter a search query before submitting.",position:"topRight"});return}f(),h(),g(t).then(r=>{if(L(),r.length===0)throw new Error("Invalid search query");y(r)}).catch(()=>{n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})})};d.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
