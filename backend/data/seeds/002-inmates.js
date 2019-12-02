exports.seed = function(knex) {
  return knex("inmates").insert([
    {
      id: 1,
      name: "Thomas Bryant",
      release_date: "1/3/2020",
      availability: true,
      inmate_info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quo eveniet blanditiis obcaecati. Ut officia nostrum recusandae tenetur consequuntur, quam suscipit voluptate. Quod commodi eveniet eius consequatur ut tenetur nobis.",
      inmate_image:
        "https://images.unsplash.com/photo-1565204241577-d3fa4a829588?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80",
      resume: "",
      prison_id: 1,
      prison_name: "Bedford Hills"
    },
    {
      id: 2,
      name: "Michael Scott",
      release_date: "4/5/2020",
      availability: true,
      inmate_info:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quos nostrum officiis harum amet nobis, eos doloribus, nihil veritatis neque voluptatibus odit. Deserunt sit ducimus omnis incidunt alias repellat accusamus.",
      inmate_image:
        "https://images.unsplash.com/photo-1565204241577-d3fa4a829588?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80",
      resume: "",
      prison_id: 1,
      prison_name: "Bedford Hills"
    },
    {
      id: 3,
      name: "Steven Smith",
      release_date: "2/3/2020",
      availability: true,
      inmate_info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, voluptatum nam? Perferendis dignissimos saepe recusandae totam reiciendis officia facilis voluptates repellat, error sapiente dolores nam deserunt laborum dicta eius ea!",
      inmate_image:
        "https://images.unsplash.com/photo-1565204241577-d3fa4a829588?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80",
      resume: "",
      prison_id: 2,
      prison_name: "Adirondack"
    }
  ]);
};
