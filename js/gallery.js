var gallery = {
  images: [
    {
      id: 1,
      name: 'Bunga Sakura',
      directory: './img/gallery/sakura.jpg',
      diffRate: 100,
    },
    {
      id: 2,
      name: 'Memasak',
      directory: './img/gallery/cooking.jpg',
      diffRate: 100,
    },
    {
      id: 3,
      name: 'Laporan',
      directory: './img/gallery/work-break.jpg',
      diffRate: 100,
    },
    {
      id: 4,
      name: 'Rerumputan Musim Gugur',
      directory: './img/gallery/fall.jpg',
      diffRate: 100,
    },
    {
      id: 5,
      name: 'Pantai',
      directory: './img/gallery/beach.jpg',
      diffRate: 100,
    },
    {
      id: 6,
      name: 'Gunung',
      directory: './img/gallery/mountain.jpg',
      diffRate: 100,
    },
    {
      id: 7,
      name: 'Jalan Kayu',
      directory: './img/gallery/wood-bridge.jpg',
      diffRate: 100,
    },
    {
      id: 8,
      name: 'Kota Malam',
      directory: './img/gallery/evening-city.jpg',
      diffRate: 100,
    },
    {
      id: 9,
      name: 'Laptop dan Kopi',
      directory: './img/gallery/works-and-coffee.jpg',
      diffRate: 100,
    },
    {
      id: 10,
      name: 'Balon',
      directory: './img/gallery/baloons.jpg',
      diffRate: 100,
    },
    {
      id: 11,
      name: 'Kue',
      directory: './img/gallery/rousing-cake.jpg',
      diffRate: 100,
    },
    {
      id: 12,
      name: 'Bunga Melati',
      directory: './img/gallery/jasmine.jpg',
      diffRate: 100,
    },
    {
      id: 13,
      name: 'Jalan di Hutan',
      directory: './img/gallery/long-trip.jpg',
      diffRate: 100,
    },
    {
      id: 14,
      name: 'Tebing Sisi Pantai',
      directory: './img/gallery/cliffs.jpg',
      diffRate: 100,
    },
    {
      id: 15,
      name: 'Bangau',
      directory: './img/gallery/storks.jpg',
      diffRate: 100,
    },
    {
      id: 16,
      name: 'Bergandeng Tangan',
      directory: './img/gallery/hand-in-hand.jpg',
      diffRate: 100,
    },
    {
      id: 17,
      name: 'Anak Kecil Tertawa',
      directory: './img/gallery/happy-boy.jpg',
      diffRate: 100,
    },
    {
      id: 18,
      name: 'Ombak',
      directory: './img/gallery/waves.jpg',
      diffRate: 100,
    },
    {
      id: 19,
      name: 'Jalan Jembatan',
      directory: './img/gallery/bridge.jpg',
      diffRate: 100,
    },
    {
      id: 20,
      name: 'Taj Mahal',
      directory: './img/gallery/taj-mahal.jpg',
      diffRate: 100,
    },
    {
      id: 21,
      name: 'Mesin',
      directory: './img/gallery/machine.jpg',
      diffRate: 100,
    },
    {
      id: 22,
      name: 'Kawanan Flamingo',
      directory: './img/gallery/flamingos.jpg',
      diffRate: 100,
    },
    {
      id: 23,
      name: 'Tali Cinta',
      directory: './img/gallery/red-thread.jpg',
      diffRate: 100,
    },
    {
      id: 24,
      name: 'Kurang Kerjaan',
      directory: './img/gallery/exploring-book.jpg',
      diffRate: 100,
    },
  ],
  init: function () {
    var galleryContainer = document.querySelector('div.image-gallery');
    var galleryString = '';
    this.images.forEach((item, index) => {
      galleryString += `<div class='image-gallery-${
        index + 1
      } col-lg-4 col-md-6 col-sm-12'>
                <div>
                    <div class='image-preview'>
                        <img id='image${index + 1}' src='${
        item.directory
      }' alt='${item.name}'>
                    </div>
                    <label>Gambar ${index + 1}.</label>
                </div>
            </div>`;
    });
    galleryContainer.innerHTML = galleryString;
  },
};
