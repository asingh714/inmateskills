exports.seed = function(knex) {
  return knex("prisons").insert([
    {
      id: 1,
      name: "Bedford Hills",
      username: "bedford_hills",
      password: "password",
      address: "247 Harris Road",
      city: "Bedford Hills",
      state: "New York",
      zip_code: 10507,
      prison_info:
        "Bedford Hills Correctional Facility is located in Westchester County New York. ",
      prison_image: "https://d3blhdga6ro23n.cloudfront.net/uploads/prison_photo/image/5579/web_NY_DOC_-_Bedford_Hills_Correctional_Facility__Women_.jpg"
    },
    {
      id: 2,
      name: "Adirondack",
      username: "adirondack",
      password: "password",
      address: "196 Old Ray Brook Road",
      city: "Ray Brook",
      state: "New York",
      zip_code: 12977,
      prison_info: "Adirondack Correctional Facility is located in Ray Brook New York.",
      prison_image: "https://d3blhdga6ro23n.cloudfront.net/uploads/prison_photo/image/5575/web_NY_DOC_-_Adirondack_Correctional_Facility.jpg"
    },
    {
      id: 3,
      name: "Woodbourne",
      username: "woodbourne",
      password: "password",
      address: "99 Prison Road",
      city: "Woodbourne",
      state: "New York",
      zip_code: 12788,
      prison_info: "Woodbourne Correctional Facility is a medium security prison located in Sullivan County New York.",
      prison_image: "https://d3blhdga6ro23n.cloudfront.net/uploads/prison_photo/image/6861/web_NY_DOC_-_Woodbourne_Correctional_Facility.jpg"
    }
  ]);
};
