const monthName = document.getElementById('month-name')
const monthDay = document.getElementById('day-name')
const dayNumber = document.getElementById('day-number')
const year = document.getElementById('year')

const date = new Date();
const months = date.getMonth();
monthName.innerHTML = date.toLocaleString('en', {
    month: 'long'
})
monthDay.innerText = months.toLocaleString('en',{
    month: "long"
});
monthDay.innerHTML = date.toLocaleString('en', {
    weekday: 'long'
})

dayNumber.innerText = date.getDate()
year.innerText = date.getFullYear()