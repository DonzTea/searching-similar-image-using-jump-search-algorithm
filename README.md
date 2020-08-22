# Pencarian Gambar Identik Menggunakan Algoritma Jump Search

Aplikasi ini merupakan penerapan dari algoritma jump search pada kasus pencarian gambar identik.

## Antarmuka aplikasi

![thumbnail 1](screenshots/thumbnail-1.png)
![thumbnail 2](screenshots/thumbnail-2.png)

## Disclaimer

> Aplikasi ini hanya sebatas tugas kuliah saya.

## Requirement

> npm v6.14.6

## Prerequisite

> 1.  Familiar dengan command prompt / terminal.
> 2.  Mengerti cara melakukan clone project / download zip source code dari Github.

## Instalasi

Ada dua cara instalasi yang saya uraikan, silakan gunakan cara yang dirasa nyaman dan familiar. Bagi yang terbiasa dengan perintah git, silakan gunakan [cara pertama](#instalasi-dengan-cara-clone-git-repository). Jika tidak familiar dengan git, bisa gunakan [cara kedua](#instalasi-dengan-cara-download-zip).

### Instalasi dengan cara clone git repository

1. Pada command prompt / terminal, eksekusi perintah berikut ini :

```
git clone git@github.com:DonzTea/searching-similar-image-using-jump-search-algorithm.git
```

2.  Masuk ke folder yang telah di-clone tersebut dengan perintah :

```
cd searching-similar-image-using-jump-search-algorithm
```

3.  Install library yang diperlukan beserta dependency-nya dengan perintah:

```
npm install
```

### Instalasi dengan cara download zip

1. Download source code dalam bentuk zip dengan cara klik tombol code, kemudian klik download zip seperti gambar di bawah ini.

<p align="center">
  <img src="screenshots/download-zip.png" alt="tutorial download zip">
</p>

2. Extract file zip yang telah didownload.
3. Buka command prompt / terminal, masuk ke direktori dimana folder yang telah diextract tadi berada.
4. Install library yang diperlukan beserta dependency-nya dengan perintah:

```
npm install
```

## Menjalankan aplikasi

1.  Start local server menggunakan command `npm run start`.
2.  Buka browser, kemudian akses `http://localhost:8080`.

## Tutorial penggunaan aplikasi

1. Klik tombol browse.

![tutorial](screenshots/tutorial.png)

2. Pilih gambar yang ingin dibandingkan keidentikannya pada folder `/img/testing-samples/`.
