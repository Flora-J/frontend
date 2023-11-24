import React from "react";
import "./NewCollections.css";
import new_collection from '../../data/new_collections'

const NewCollections = () => {
  return <div className="new-collections">
    <h1>NOUVELLES COLLECTIONS</h1>
    <hr />
    <div className="collections">
      {new_collection.map((item, i) => {
        return <Item
      })}
    </div>
  </div>;
};

export default NewCollections;