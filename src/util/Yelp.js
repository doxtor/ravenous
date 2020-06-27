
const apikey = 'xfugwgYrS0y1MNGyYgCzeDpEJqHQlJfSO9hpBvra9F6X93WfzdhpezadCoiaaILqn1SNxUY83kbCqRI8xrYFP4w8CAXK5Ry7SKewpp7FtbOzE4UvSGxu1QALMrj2XnYx'

const Yelp = {
	search (term,location,sortBy) {
	return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
		headers: {
			Authorization: `Bearer ${apikey}`
	}
	}).then(response => {
		return response.json();
	}).then(jsonResponse => {
		if (jsonResponse.businesses) {
			return jsonResponse.businesses.map(business => {
				return {
					id: business.id,
					imageSrc: business.image_url,
					name: business.name,
					address: business.location.address1,
					city: business.location.city,
					state: business.location.state,
					zipCode: business.location.zipCode,
					category: business.categories[0].title,
					rating: business.rating,
					reviewCount: business.review_count
				}
			})
		}
	});
}
};

export default Yelp;