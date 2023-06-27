// const wrapper = document.querySelector('.wrapper'),
// selectBtn = wrapper.querySelector('.select-btn'),
// searchInp = wrapper.querySelector('input'),
// options = wrapper.querySelector('.options');

// let countries = ['India', 'USA', 'Japan', 'Russia', 'UK', 'China', 'France', 'Germany', 'Italy', 'Spain']


// function addCountry(selectedCountry) {
//     options.innerHTML = "";
//     countries.forEach(country => {
//         // if selected country is equal to country then selected class will be added
//         let isSelected = country == selectedCountry ? 'selected' : '';
//         // adding each country inside li and inserting all li inside options tag
//         let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
//         options.insertAdjacentHTML('beforeend', li);
//     })
// }

// addCountry();

// function updateName(selectedLi) {
//     searchInp.value = "";
//     addCountry(selectedLi.innerText);
//     wrapper.classList.remove("active");
//     selectBtn.firstElementChild.innerText = selectedLi.innerText;
// }

// searchInp.addEventListener("keyup", () => {
//     let arr = [];
//     let searchedVal = searchInp.value.toLowerCase();
//     arr = countries.filter(data => {
//         return data.toLowerCase().startsWith(searchedVal)
//     }).map(data => `<li onclick="updateName(this)>${data}</li>`).join('');
//     options.innerHTML = arr ? arr : `<li>Country not found</li>`;
// });

// selectBtn.addEventListener("click", () => {
//     wrapper.classList.toggle('active');
// })

const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");

let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
                 "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
                 "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
                 "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
                 "Peru", "Russia", "Romania", "South Africa", "South Korea", "Spain", "Sri Lanka", "Sweden", "Switzerland",
                 "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];

function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();

function updateName(selectedLi) {
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord); // 필터 조건 (충족하면 추가됨)
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));