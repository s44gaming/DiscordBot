module.exports = {
    name: 'ready',
    async execute(client) {
      console.log("Botti on valis ja Kirjautunut nimellä " + client.user.tag + "");
    }
}  