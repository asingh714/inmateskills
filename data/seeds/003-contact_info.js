exports.seed = function(knex) {
  return knex("contact_info").insert([
    {
      id: 1,
      name: "Samwell",
      email: "samwall@got.com",
      phone_number: "464-423-0910",
      job_details: "This is a grocery store job.",
      inmate_id: 1,
      prison_id: 1
    },
    {
      id: 2,
      name: "Arya",
      email: "arya@got.com",
      phone_number: "872-234-0812",
      job_details: "This is a job on a boat.",
      inmate_id: 2,
      prison_id: 1
    },
    {
      id: 3,
      name: "Pablo",
      email: "pablo@got.com",
      phone_number: "324-123-7234",
      job_details: "This is a job to produce goods.",
      inmate_id: 3,
      prison_id: 2
    }
  ]);
};
