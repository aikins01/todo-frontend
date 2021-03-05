import React from "react";
import PropTypes from "prop-types";
import dateformat from "dateformat";
import TodoApi from '../services/todoApi'
import App from '../App'

function NewItem({add, cancel }) {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [date, setDate] = React.useState(dateformat(new Date(), "yyyy-mm-dd"));
    const [status, setStatus] = React.useState("False");
    const [priority, setPriority] = React.useState("1");

    const addItem = async () => {
        console.log({ title, description, date_due: date, status: status, priority: priority })
        TodoApi.create({ title, description, date_due: date, status: status, priority: priority });
        add()
        cancel();
    };
    return (
        <div>
            <div class="form-control">
  <label class="label">
    <span class="label-text">Title</span>
  </label> 
  <input type="text" placeholder="Enter title..." class="input input-bordered" id="addItemTitleInput"
                    value={title}
                    onChange={e => setTitle(e.target.value)}/>
</div>
<div class="form-control">
  <label class="label">
    <span class="label-text">Description</span>
  </label> 
  <textarea class="textarea h-24 textarea textarea-bordered" placeholder="Enter description..." value={description}
                    onChange={e => setDescription(e.target.value)}></textarea>
</div>
           
            <div className="form-control">
                <label class="label">Due date</label>
                <input
                    type="date"
                    class="input input-bordered"
                    onChange={e => setDate(e.target.value)}
                    value={date}
                />
            </div>
            <div class="form-control">
  
    <label class="label">
      Status
    </label>
  

    <select class="select select-bordered select-primary w-full max-w-xs" name="status"onChange={e => setStatus(e.target.value)}
                    value={status}>
      
      
          
            <option value="False">In Progress</option>
          
      
          
            <option value="True">Completed</option>
          
      
    </select>

    

    

</div>

<div class="form-control">
  
    <label class="label">
    Priority
    </label>
  

    <select class="select select-bordered select-primary w-full max-w-xs" name="priority">
    <option value="1" onChange={e => setPriority(e.target.value)}
                    value={priority}>High</option>
          
      
          
          <option value="2">Medium</option>
        
    
        
          <option value="3">Low</option>
      
    </select>

    

    

</div>
<br></br>
<div className="flex flex-wrap space-y-3 md:space-y-0 md:space-x-3 timeline-inset "> <button className="btn btn-success" disabled={title === ""} onClick={addItem}>
                Add item
            </button>
            <button className="btn btn-secondary" style={{ marginLeft: "20px" }} onClick={cancel}>
                Cancel
            </button>
            </div>
        </div>
    );
}

NewItem.propTypes = {
    add: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired,
};

export default NewItem;
