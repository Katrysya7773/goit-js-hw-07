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

    console.log(event.target);

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


