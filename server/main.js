var express = require("express"),
  app = express(),
  port = process.env.PORT || 7000;

app.listen(port);

const cardListDetails = [
  {
    title: "Google",
    imageUrl: "https://pngimg.com/uploads/google/google_PNG19638.png",
    description:
      "Lorem ipsum dolor sit amet, at solum copiosae maiestatis eos, in nominavi philosophia his, an saepe admodum pri.",
    details: ["Lorem ipsum dolor sit amet", "at solum copiosae maiestatis eos"],
  },
  {
    title: "Ibm",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    description:
      "Lorem ipsum dolor sit amet, at solum copiosae maiestatis eos, in nominavi philosophia his, an saepe admodum pri.",
    details: ["Lorem ipsum dolor sit amet", "at solum copiosae maiestatis eos"],
  },
  {
    title: "Facebook",
    imageUrl:
      "https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-1.png",
    description:
      "Lorem ipsum dolor sit amet, at solum copiosae maiestatis eos, in nominavi philosophia his, an saepe admodum pri.",
    details: ["Lorem ipsum dolor sit amet", "at solum copiosae maiestatis eos"],
  },
  {
    title: "Twitter",
    imageUrl:
      "https://www.pikpng.com/pngl/m/17-170048_download-red-logo-png-twitter-logo-red-png.png",
    description:
      "Lorem ipsum dolor sit amet, at solum copiosae maiestatis eos, in nominavi philosophia his, an saepe admodum pri.",
    details: ["Lorem ipsum dolor sit amet", "at solum copiosae maiestatis eos"],
  },
];

app.route("/getCompanyList").get(function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.json(cardListDetails);
});

app.route("/getCompanyDetails/:companyName").get(function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const companyDetails = cardListDetails.find(
    (item) => item.title.toLowerCase() === req.params.companyName.toLowerCase()
  );
  if (companyDetails) {
    const details = {
      name: companyDetails.title,
      title: companyDetails.title + " Data Service",
      subTitle: companyDetails.description,
      imageUrl: companyDetails.imageUrl,
      website: "",
      backgroundImage:
        "https://www.klaviyo.com/wp-content/uploads/2016/09/abstract-background.jpg",
      details: {
        subtitle: `Lorem ipsum dolor sit amet, at solum copiosae maiestatis eos, in nominavi philosophia his, an saepe admodum pri.`,
        description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
            est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
            velit, sed quia non numquam eius modi tempora incidunt ut labore
            et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
            veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
            vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur?`,
      },
      extras: [
        {
          heading: "Product enterprise",
          logo: "",
          details: ["Cloud Pak for Applications"],
        },
        {
          heading: "Product enterprise",
          logo: "",
          details: ["Cloud Pak for Applications"],
        },
      ],
      highlights: [
        {
          title: "Product enterprise",
          description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?`,
        },
      ],
    };
    res.json(details);
  }
  res.json(cardListDetails);
});

console.log("API server started on: " + port);
