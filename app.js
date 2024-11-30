const axios = require('axios');

// Göndermek istediğiniz çerezi (cookie)
const cookie = 'JSESSIONID=0000lkUmCmiHWPfKHmPXP9XYugA:1hqk3537r';

// Başlıkları ayarlayın
const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36',
  'Accept': 'application/json, text/javascript, */*; q=0.01',
  'Accept-Encoding': 'gzip, deflate, br',
  'Connection': 'keep-alive',
  'Content-Type': 'application/x-www-form-urlencoded',  // Form verisi olarak gönderiyoruz
  'Cookie': cookie,  // Çerezi buraya ekliyoruz
};

// Göndereceğiniz veriler
const postData = {
  searchWord: 'araba',
  pageNumber: 1,
};

// URL
const url = 'https://esatis.uyap.gov.tr/main/esatis/ihaleKelimeArama_brd.ajx';

axios.post(url, new URLSearchParams(postData), { headers })
  .then(response => {
    console.log('Response:', response.data);  // Gelen yanıtın içeriği
  })
  .catch(error => {
    console.error('Error:', error);
  });
