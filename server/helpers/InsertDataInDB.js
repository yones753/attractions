const InsertDataInDB = () => {
    const url = 'https://data.gov.il/api/3/action/datastore_search?resource_id=29f4ec99-ec7f-43c1-947e-60a960980607&limit=40'
    request(url, function (error, response, body) {
        const result = JSON.parse(body)
        let res = result.result.records
        for (let i = 0; i < 40; i++) {
            let newAttraction = new Attraction({
                attraction_id: res[i].Id,
                name: res[i].Name,
                address: res[i].Address,
                attraction_type: res[i].Attraction_Type,
                opening_hours: res[i].Opening_Hours,
                url: res[i].URL,
                latitude: res[i].Y,
                longitude: res[i].X,
                isFavorites: false,
            })
            newAttraction.save()
        }
    })
}

module.exports = InsertDataInDB