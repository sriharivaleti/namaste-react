/**
 * 
 * <div id= "parent">
 *  <div id = "child">
 *     <h1>I'm h1 tag</h1>
 *      <h2>I'm h2 tag</h2>
 *  </div>
 * </div>
 * 
 * 
 */
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement('div',
{id:'parent'},
[React.createElement('div',
{id:'child'},
[React.createElement('h1',{},'im h1 tag'),React.createElement("h2",{},"This is Namate React "),]),
React.createElement('div',
{id:'child2'},
[React.createElement('h1',{},'im h1 tag'),React.createElement("h2",{},"im h2 tag"),])]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
