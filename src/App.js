import React from "react";
import "./App.css";
import todoApi from "./services/todoApi";
import Page from "./components/Page";
import CenteredColumn from "./components/Layouts";
import { PageHeader } from "./components/PageHeader";
import NewItem from "./components/newItem";
import {Element} from 'react-scroll'
import Timeline from "./components/Timeline";

function App() {
  const [adding, setAdding] = React.useState(false);
  const [editItem, setEditem] = React.useState({});
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  
 

  const loadItems = async () => {
    setLoading(true);
    const todoItems = await todoApi.getAll();
    setItems(todoItems.data);
    setLoading(false);
  };

  React.useEffect(() => {
    loadItems();
  }, []);

  const addNewItem = (item) => {
    // setAdding(false);
    // add(item);
    loadItems();
  };

  return (
    <Page>
      <CenteredColumn>
        <div className="flex flex-col space-y-24">
          <div className="flex flex-col space-y-8 md:items-center">
            <PageHeader
              title="ToDo List App"
              subtitle="This is my simple todo list app"
            />

            <div className="flex flex-col space-y-2 md:space-x-4 md:flex-row md:space-y-0 md:items-center md:justify-center">
              {!adding && (
                <button
                  onClick={() => setAdding(true)}
                  className="w-full text-lg btn btn-primary btn-large"
                >
                  Add an Item
                </button>
              )}

              <a
                href="https://github.com/aikins01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full text-lg btn btn-large">Repo</button>
              </a>
            </div>
          </div>
          {/* <a href="#my-modal" class="btn btn-primary">open modal</a>  */}
<Element name="newItem">
          {adding && (
            <NewItem id="newItem"iid={editItem.id} ititle={editItem.title} idescription={editItem.description} idate={editItem.date}  istatus={editItem.status} ipriority={editItem.priority} cancel={() => setAdding(false)} add={addNewItem} />
          )}
</Element>
          {!loading && !(Object.entries(items).length === 0) && (
            <Timeline
            adding={setAdding}
            oldi={setEditem}
              refr={loadItems}
              cancel={() => setAdding(false)}
              todos={items}
            />
          )}
          {loading && (
            <div className="alert alert-info" role="alert">
              Loading please wait...
            </div>
          )}
          {!loading && Object.entries(items).length === 0 && (
            <div className="alert alert-info" role="alert">
              You have no items yet...
            </div>
          )}
        </div>
      </CenteredColumn>
    </Page>
  );
}

export default App;
