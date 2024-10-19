document.getElementById('calculateFare').addEventListener('click', function() {
    const childAge = document.getElementById('childAge').value;
    const elderlyAssistance = document.getElementById('elderlyAssistance').checked;
    const womenOnlyBus = document.getElementById('womenOnlyBus').checked;
    
    let fare = 50; // Base fare
    let discountMessage = "";

    // Apply child discount
    if (childAge > 0 && childAge <= 12) {
        fare *= 0.5; // 50% discount
        discountMessage += "Child discount applied. ";
    }

    // Apply elderly assistance discount
    if (elderlyAssistance) {
        fare *= 0.7; // 30% discount
        discountMessage += "Elderly assistance requested. ";
    }

    // Women-only bus option
    if (womenOnlyBus) {
        discountMessage += "Women-only bus selected. ";
    }

    document.getElementById('totalFare').innerHTML = `$${fare.toFixed(2)}`;
    document.getElementById('discountMessage').textContent = discountMessage;
});
// Search button functionality
document.getElementById('searchButton').addEventListener('click', function() {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;

    if (from && to && date) {
        alert(`Searching buses from ${from} to ${to} on ${date}`);
    } else {
        alert('Please fill in all the fields before searching.');
    }
});

// Calculate fare with additional features
document.getElementById('calculateFare').addEventListener('click', function() {
    const childAge = document.getElementById('childAge').value;
    const elderlyAssistance = document.getElementById('elderlyAssistance').checked;
    const womenOnlyBus = document.getElementById('womenOnlyBus').checked;

    let fare = 50; // Base fare
    let discountMessage = "";

    // Apply child discount
    if (childAge > 0 && childAge <= 12) {
        fare *= 0.5; // 50% discount
        discountMessage += "Child discount applied. ";
    }

    // Apply elderly assistance discount
    if (elderlyAssistance) {
        fare *= 0.7; // 30% discount
        discountMessage += "Elderly assistance requested. ";
    }

    // Women-only bus option
    if (womenOnlyBus) {
        discountMessage += "Women-only bus selected. ";
    }

    document.getElementById('totalFare').innerHTML = `$${fare.toFixed(2)}`;
    document.getElementById('discountMessage').textContent = discountMessage;
});
document.getElementById('searchButton').addEventListener('click', function() {
    const from = document.getElementById('from').value.trim().toLowerCase();
    const to = document.getElementById('to').value.trim().toLowerCase();
    const date = document.getElementById('date').value;

    const busRoutes = [
        { from: 'mumbai', to: 'bangalore', fare: 800, bus: 'Volvo AC Sleeper' },
        { from: 'pune', to: 'mumbai', fare: 300, bus: 'Shivneri AC Bus' },
        { from: 'nashik', to: 'dhule', fare: 250, bus: 'Semi-Sleeper' },
        { from: 'pune', to: 'nandurbar', fare: 500, bus: 'Luxury Bus' },
        { from: 'mumbai', to: 'pune', fare: 350, bus: 'Private AC' }
    ];

    // Clear previous search results
    const busResults = document.getElementById('busResults');
    busResults.innerHTML = '';

    // Check if inputs are valid
    if (from && to && date) {
        const availableBuses = busRoutes.filter(route => route.from === from && route.to === to);

        if (availableBuses.length > 0) {
            availableBuses.forEach(bus => {
                const busInfo = `
                    <div class="bus-card">
                        <h4>${bus.bus}</h4>
                        <p><strong>From:</strong> ${capitalizeFirstLetter(from)}</p>
                        <p><strong>To:</strong> ${capitalizeFirstLetter(to)}</p>
                        <p><strong>Date:</strong> ${date}</p>
                        <p><strong>Fare:</strong> $${bus.fare}</p>
                        <button class="book-btn">Book Now</button>
                    </div>
                `;
                busResults.innerHTML += busInfo;
            });
        } else {
            busResults.innerHTML = '<p>No buses available for the selected route.</p>';
        }
    } else {
        alert('Please fill in all the fields before searching.');
    }
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
