document.querySelector(".gallery").addEventListener("click",function(e){e.preventDefault();var t=e.target.closest(".list-item__link");if(t){var l=document.querySelector("#largeImg.gallery__large-img.gallery__img");l.src=t.href,l.title=t.title}});
//# sourceMappingURL=index.788ed729.js.map
