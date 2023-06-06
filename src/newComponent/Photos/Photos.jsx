import React, { useState, useCallback, useRef, useEffect } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { getPhotos, uploadPhotos } from "../../utils/api";

function Photos() {

   const fileInputRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
      getPhotos().then((res) => {
        console.log(res.data);
        const picture = res.data.map((pho) => {
          console.log(pho.fileName);
           return {
              src: `http://localhost:3000/photos/${pho.fileName}`,
              width: 4,
              height: 3,
           }
        })
        setPhoto(picture);
      }).catch((err) => {
        console.log(err);
      })
  }, [photo])

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const handleProfileClick = () => {
    if(fileInputRef) {
        fileInputRef.current.click();
    }
}

const handleFileAdd = async (files) => {
   const formData = new FormData();
   console.log(typeof(files))
   files && [...files].forEach((file) => {
    formData.append('photos', file);
   });

   try {
     await uploadPhotos(formData);
     
   }catch(error ){
     console.log(error);
   }
}

const handleFileChange = (e) => {
  console.log(e.target.files);
  const {files} = e.target
  if(!files) return;
  handleFileAdd(files)

}

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3
  }
];

  return (
    <div>
      <div className="w-full flex justify-end my-4 ">
        <button  className="px-6 py-2 rounded-2xl bg-[var(--secondary)] hover:bg-[var(--secondary-light)] text-lg text-center text-white" onClick={(e) => handleProfileClick(e)}>Add a photo +</button>
      </div>

       <div>
         <input type="file" ref={fileInputRef} className='d-none' accept="image/*" multiple onChange={(e) => handleFileChange(e)} />
      </div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default Photos;
