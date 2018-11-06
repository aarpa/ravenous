const apiKey = 'c9nEGY2QvsaQjs1Cq2sobEuF8nAw0oUTaUmArZEx6MamxH98Qo7njgOjw8U7Tn98X0uEbsJk-tF4JHAuf2MEs_ZZAwSB-OWM63dDLoWYt8elyuUb7Bu4nJd4cubdW3Yx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => response.json()).then(jsonResponse => {
      if (jsonResponse.businesses) {
        console.log(jsonResponse.businesses);
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.imageSrc,
            name: business.name,
            address: business.address,
            city: business.city,
            state: business.state,
            zipCode: business.zipCode,
            category: business.category,
            rating: business.rating,
            reviewCount: business.reviewCount
          };
        });
      }
    });
  }
};

export default Yelp;
