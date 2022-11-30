import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "gk9bgm29", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true,
  token:
    "sk7OU8hEUMs6p5yUIdTQG1VqkViGsvxjqIoQWuwgCRf1dFT1LqHD24TNfK3jP1pILvPdSNWiwmMU4nRY8ZYTxxkI63S9uXaZLUCJ16YnqrIW7Cs2ZyQ97IBjhO72RJE6PS7CVlC8TH3hRHuvBiAtjEkotx9FoVE28i6Ugh0sYHOjP8F0DaWn",
  apiVersion: "2022-02-01",
});
