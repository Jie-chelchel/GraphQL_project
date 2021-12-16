const express = require("express");

//glue express and GraphQL together
const expressGraphQL = require("express-graphql").graphqlHTTP;
const schema = require("./schema/schema");
const app = express();

//any request coming to the app looking for the rout /graphql, we want the GraphQL to hand it.
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log(`server listening on port 4000`);
});
