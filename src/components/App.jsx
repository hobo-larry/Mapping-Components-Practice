import React from "react";
import Term from "./Term";
import emojipedia from "../emojipedia";

function createCard(emojipedia) {
  return (
    <Term
      /*needs a unique key*/
      key={emojipedia.id}
      id={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
