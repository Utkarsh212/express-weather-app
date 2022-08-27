const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const submitBtn = document.getElementById('submitBtn');

const datahide = document.querySelector('.middle_layer');

const getTemprature = async (event) => {
    event.preventDefault();
    if (cityName.value === "") {
        city_name.innerText = `Please Enter City Name Before Searching`;
        datahide.classList.add("data_hide");
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=259fd50c0e2abb4263fbae582828ffc1`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            const tempStatus = arrData[0].weather[0].main;

            switch (tempStatus) {
                case "Clear":
                    tempStatus.innerHTML = "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
                    break;
                case "Clouds":
                    tempStatus.innerHTML = "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
                    break;
                case "Rain":
                    tempStatus.innerHTML = "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
                    break;
                default:
                    tempStatus.innerHTML = "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
            }
            datahide.classList.remove('data_hide');
            cityName.value = "";
        } catch (err) {
            cityName.value = " ";
            datahide.classList.add("data_hide");
            city_name.innerText = `Please Enter the Correct City Name`;
            console.log(err.message);
        }

    }
}

submitBtn.addEventListener('click', getTemprature);