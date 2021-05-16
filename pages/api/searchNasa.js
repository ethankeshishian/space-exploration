const url = `https://images-api.nasa.gov/search`;

export default searchNasa = async (req, res) => {
  console.log(req.body); // The request body
  console.log(req.query); // The url query string
  console.log(req.cookies); // The passed cookies
  // const response = await fetch(url + '?q=' + , {
  //   method: 'GET'
  // })
};
