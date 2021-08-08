export async function fetchServices() {
    try {
             let servicesResponse = await fetch('http://localhost:4000/allServices')
                return servicesResponse.json();
    }
    catch (err) {
        console.log(err);
    }

}