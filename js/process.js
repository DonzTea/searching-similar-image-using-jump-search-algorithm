var process = {
  sortedDiffRate: [],
  calcDiffRate: async function (blobImage) {
    var promises = [];

    for (let index = 0; index < gallery.images.length; index++) {
      const image = gallery.images[index];

      // gallery image
      var imageGallery = image.directory;

      resemble.outputSettings({
        largeImageThreshold: 0,
        useCrossOrigin: false,
        outputDiff: true,
      });

      promises.push(
        new Promise((resolve) => {
          resemble(blobImage)
            .compareTo(imageGallery)
            .scaleToSameSize()
            .onComplete(function (data) {
              resolve({ index, diffRate: data.rawMisMatchPercentage });
            });
        }),
      );
    }

    var results = await Promise.all(promises);
    for (let index = 0; index < results.length; index++) {
      var result = results[index];
      gallery.images[result.index].diffRate = result.diffRate;
    }
  },
  sortDiffRate: function () {
    var temp = [];

    gallery.images.forEach((image) => {
      var object = {};
      object.id = image.id;
      object.diffRate = parseFloat(image.diffRate);

      // push temp
      temp.push(object);
    });

    function compareValues(key, order = 'asc') {
      return function (a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
          // property doesn't exist on either object
          return 0;
        }

        const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
        const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }
        return order == 'desc' ? comparison * -1 : comparison;
      };
    }

    this.sortedDiffRate = temp.sort(compareValues('diffRate'));
  },
  jumpSearch: function (array, x) {
    var length = array.length;
    var step = Math.floor(Math.sqrt(length));
    var lowerBound = 0;
    while (array[Math.min(step, length) - 1] < x) {
      lowerBound = step;
      step += step;
      if (lowerBound >= length) {
        return -1;
      }
    }

    var upperBound = Math.min(step, length);
    while (array[lowerBound] < x) {
      lowerBound++;
      if (lowerBound == upperBound) {
        return -1;
      }
    }
    if (array[lowerBound] == x) {
      return lowerBound;
    }
    return -1;
  },
  output: function (id) {
    var caption = '';

    if (id > -1) {
      var image;

      gallery.images.forEach((element) => {
        if (element.id == id) {
          image = element;
          return;
        }
      });

      var imageName = image.name;
      var imageDir = image.directory;

      // output caption
      caption =
        'Input gambar identik gambar <b>"' +
        imageName +
        '".</b> <br> Ditemukan pada gambar dengan <b>nomor ' +
        id +
        '.</b>';

      // output image
      document.querySelector('img#outputImage').setAttribute('src', imageDir);
    } else {
      // output caption
      caption = 'Gambar serupa tidak ditemukan pada daftar gambar.';

      // output image
      document
        .querySelector('img#outputImage')
        .setAttribute('src', './img/no-image.jpg');
    }

    document.querySelector('label#outputCaption').innerHTML = caption;
  },
};
