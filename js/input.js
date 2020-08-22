var input = {
  handleInput: function () {
    window.addEventListener(
      'fileUploadWithPreview:imagesAdded',
      async function () {
        // get blob of uploaded image
        var inputImage = document.querySelector('input[name=inputImage]');
        var blobImage = inputImage.files[0];

        // clear preview of similar image
        document
          .querySelector('img#outputImage')
          .setAttribute('src', './img/no-image.jpg');

        // set processing caption
        document.querySelector('#outputCaption').innerHTML =
          'Mohon menunggu proses . . .';

        // calculate different ratio
        await process.calcDiffRate(blobImage);

        // sort different rate
        process.sortDiffRate();

        // validation
        var hasIdentical = false;
        for (i = 0; i < process.sortedDiffRate.length; i++) {
          var element = process.sortedDiffRate[i];
          if (element.diffRate > 0 && element.diffRate < 100) {
            hasIdentical = true;
            break;
          }
        }

        // get similar image
        var similarId;
        if (hasIdentical) {
          // get minimum value
          var minValue = process.sortedDiffRate[0].diffRate;
          // search identical image
          for (i = 0; i < gallery.images.length; i++) {
            var element = gallery.images[i];
            if (element.diffRate == minValue) {
              similarId = element.id;
              break;
            } else {
              similarId = -1;
            }
          }
        } else {
          // search 0 value (similar image)
          similarId =
            typeof process.sortedDiffRate[
              process.jumpSearch(process.sortedDiffRate, 0)
            ] != 'undefined'
              ? process.sortedDiffRate[
                  process.jumpSearch(process.sortedDiffRate, 0)
                ].id
              : -1;
        }

        // get similar image based id
        var similarId = gallery.images.sort(
          (a, b) => a.diffRate - b.diffRate,
        )[0].id;

        // show output
        process.output(similarId);
      },
    );
  },
  clearInputListener: function () {
    document.querySelector('span#clear').addEventListener('click', function () {
      // output caption
      var caption =
        'Nomor dan gambar dari hasil pencarian<br>akan ditampilkan di sini.';
      document.querySelector('label#outputCaption').innerHTML = caption;

      // output image
      document
        .querySelector('img#outputImage')
        .setAttribute('src', './img/no-image.jpg');
    });
  },
  init: function () {
    // init image drop zone
    new FileUploadWithPreview('uploadImage', {
      showDeleteButtonOnImages: true,
      text: {
        chooseFile: 'Pilih Gambar',
        browse: 'Browse',
        selectedCount: 'Gambar Terpilih',
      },
    });
    this.clearInputListener();
    this.handleInput();
  },
};
