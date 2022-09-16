var e = React.createElement;

const items = [
  { id: 1, name: "Fidel Ernesto" },
  { id: 2, name: "New Preson" },
];

function Navbar() {
  return e("ul", { key: "todos" }, items.map((element)=>{
    e(e("li", null, element.name), { key: "item1" })
  }));
}

function TodoItem() {
    return e("li", null, "Todo Item");
  }
  
  function TodoApp() {
    return e("div", null, [
        e("h1", { key: "title" }, "To Do List"), 
        e(
          "ul",
          { key: "todos" },
          items.map(item =>
            e(TodoItem, { key: item.id, text: item.text })
          )
        )
      ]);
  }

const App = () => {
  return e(TodoApp);
};

ReactDOM.render(e(App), document.getElementById("app"));
