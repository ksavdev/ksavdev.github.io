// document.getElementById('addressForm').addEventListener('submit', async (e) => {
//     e.preventDefault(); // Отменяем стандартное поведение формы
    
//     const address = document.getElementById('address').value; // Получаем введенный адрес

//     if (!address) {
//         document.getElementById('result').innerText = 'Please enter an address.';
//         return;
//     }

//     try {
//         // Отправляем запрос к Nominatim API
//         const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`);
//         const data = await response.json();

//         if (data.length === 0) {
//             document.getElementById('result').innerText = 'No results found.';
//             return;
//         }

//         // Берем первый результат
//         const { display_name, lat, lon } = data[0];

//         // Отображаем результат
//         document.getElementById('result').innerHTML = `
//             <p><strong>Full Address:</strong> ${display_name}</p>
//             <p><strong>Latitude:</strong> ${lat}</p>
//             <p><strong>Longitude:</strong> ${lon}</p>
//         `;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         document.getElementById('result').innerText = 'An error occurred. Please try again.';
//     }
// });



const swiper = new Swiper('.swiper', {

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
  });

