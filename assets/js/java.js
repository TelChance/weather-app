var searchButton = document.querySelector('#btton');
var inputValue = document.querySelector('.inputValue');




searchButton.addEventListener('click', function(){
    var response = fetch('https://api.openweathermap.org/data/2.5/forecast?q= '+ inputValue.value +' &appid=da46cca779ef0da7dc960c9d6b40003a')
.then(response => response.json())
.then(data => console.log(data))
});
