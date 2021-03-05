import React from "react";
import "./App.css";
import todoApi from "./services/todoApi";
import Page from "./components/Page"
import CenteredColumn from './components/Layouts'
import { PageHeader } from "./components/PageHeader";
import NewItem from "./components/newItem";
import Timeline from './components/Timeline'

const defaultFilter = { overdueOnly: false, includeComplete: false };

function App() {
    const [adding, setAdding] = React.useState(false);
    const [items, setItems] = React.useState([]);
    const [filter, setFilter] = React.useState(defaultFilter);
    const [loading, setLoading] = React.useState(true);
    const [empty, setEmpty] = React.useState(false);

    const selectOverdueFilter = () => setFilter({ ...filter, overdueOnly: true });
    const unSelectOverdueFilter = () => setFilter({ ...filter, overdueOnly: false });
    const selectCompleteFilter = () => setFilter({ ...filter, includeComplete: true });
    const unSelectCompleteFilter = () => setFilter({ ...filter, includeComplete: false });

    const loadItems = async () => {
        setLoading(true);
        const todoItems = await todoApi.getAll();
        setItems(todoItems.data);
        if(Object.entries(todoItems.data).length===0) setEmpty(true)
        setLoading(false);
    };

    React.useEffect(() => {
        loadItems();
    }, []);

    const complete = async id => {
        const updatedItems = await todoApi.complete(id);
        setItems(updatedItems);
    };

    const add = async item => {
        const updatedItems = await todoApi.add(item);
        setItems(updatedItems);
    };

    const addNewItem = item => {
        // setAdding(false);
        // add(item);
        loadItems();
    };

    return (
        <Page><CenteredColumn>
             
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
                  <button className="w-full text-lg btn btn-large">
                   Repo
                  </button>
                </a>
              </div>
            </div>

            
            {adding && <NewItem cancel={() => setAdding(false)} add={addNewItem} />}
            
            {!loading&&!empty && (
              
                <Timeline todos={items} />
            )}
            {loading && (
                <div className="alert alert-info" role="alert">
                    Loading please wait...
                </div>
            )}
            {empty && (
                <div className="alert alert-info" role="alert">
                    You have no items yet...
                </div>
            )}
          </div>
            </CenteredColumn></Page>
               
            
    );
}

export default App;
