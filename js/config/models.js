import Realm from "realm";

const favesSchema = {
  name: "Fave",
  primaryKey: "id",
  properties: {
    id: "string",
    favedOn: "date"
  }
};

const realm = new Realm({ schema: [favesSchema] });

export const addFave = id => {
  realm.write(() => {
    realm.create("Fave", { id, favedOn: new Date() });
  });
};

export const getFaves = () => {
  return realm.objects("Fave");
};
export const removeFave = id => {
  let fave = realm.objects("Fave").filtered(`id = ${id}`);
  realm.write(() => {
    realm.delete(fave);
  });
};

export default realm;
