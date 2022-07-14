const latitude = document.querySelector('.definition.definition_latitude');
const longitude = document.querySelector('.definition.definition_longitude');

const latitudeValue = latitude.querySelector('.definition__value');
const longitudeValue = longitude.querySelector('.definition__value');

const getCoordsButton = document.querySelector('.get-coords');

getCoordsButton.addEventListener('click', function() {
    window.navigator.geolocation.getCurrentPosition(
        function(data) {
            const ltd = data.coords.latitude;
            const lgt = data.coords.longitude;
            const url = `https://www.openstreetmap.org/#map=2/${ltd}/${lgt}`;

            latitudeValue.textContent = ltd;
            longitudeValue.textContent = lgt;
            console.log(data)
            const a = document.createElement('a');

            a.href = url;
            a.textContent = 'Я здесь';
            a.setAttribute('target', '_blank');

            document.body.appendChild(a);
        },
        function(error) {
            console.error(error);
        }
    )
})