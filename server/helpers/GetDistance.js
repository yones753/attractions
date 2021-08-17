const GetDistance = (coordinat1, coordinat2) => {
  const radiusEarth = 6371; 
  let  dLat= convert2Rad(coordinat1.longitude - coordinat2.longitude);
  let  dLon = convert2Rad(coordinat1.latitude - coordinat2.latitude);

  let a =
    Math.sin(dLon / 2) * Math.sin(dLon / 2) +
    Math.cos(convert2Rad(coordinat1.longitude)) * Math.cos(convert2Rad(coordinat2.longitude)) *
    Math.sin(dLat / 2) * Math.sin(dLat / 2)
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = radiusEarth * c;
  let distance = Number((d).toFixed(1));
  return distance;
}

function convert2Rad(deg) {
  return deg * (Math.PI / 180)
}

module.exports = GetDistance