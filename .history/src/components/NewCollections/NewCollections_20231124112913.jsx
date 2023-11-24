import React from "react";
import "./NewCollections.css";
import new_collection from '../../assets/new_collections'

const NewCollections = () => {
  return <div className="new-collections">
    <h1>NOUVELLES COLLECTIONS</h1>
    <hr />
    <div className="collections">
      {new_collection}
    </div>
  </div>;
};

export default NewCollections;
