import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery');


const listMarcap = galleryItems.map(({ preview, original, description }) => {

        return ` <li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        />
                    </a>
                </li>`
   
}).join('')

list.insertAdjacentHTML("afterbegin", listMarcap);

list.addEventListener('click', showOriginalSize);

function showOriginalSize(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return
    }

   const modal = basicLightbox.create(`<img src="${event.target.dataset.source}"/>`, 
    { onShow: (modal) => {document.addEventListener('keydown', closeOriginalSizeByEsc)},

      onClose: (modal) => { document.removeEventListener('keydown', closeOriginalSizeByEsc) }
    })
    
   modal.show()
   
    function closeOriginalSizeByEsc(event) {

        if (event.code !== 'Escape') {
            return
        }

        modal.close();
    }
}

//------------ Variant #1 -----------------------------------//

// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// const list = document.querySelector('.gallery');


// const listMarcap = galleryItems.map(({ preview, original, description }) => {

//         return ` <li class="gallery__item">
//                     <a class="gallery__link" href="${original}">
//                         <img
//                         class="gallery__image"
//                         src="${preview}"
//                         data-source="${original}"
//                         alt="${description}"
//                         />
//                     </a>
//                 </li>`
   
// }).join('')

// list.insertAdjacentHTML("afterbegin", listMarcap);

// list.addEventListener('click', showOriginalSize);


//  function showOriginalSize(event) {
//     event.preventDefault();
  
//     const urlOriginal = event.target.dataset.source;
//     const modal = basicLightbox.create(`<img src="${urlOriginal}">`,{closable: true})
//     if (event.target !== event.currentTarget) {
//         modal.show()
//     } 

//     window.addEventListener('keydown', closeOriginalSizeByEsc);
//     function closeOriginalSizeByEsc(event) {
//          console.log(event.code);

//         if (event.code !== 'Escape') {
//             return
//         }
//         window.removeEventListener('keydown', closeOriginalSizeByEsc)
//         modal.close();
       
     
//     }

  
// }

//-----------------------------------------------------------------------------------//




