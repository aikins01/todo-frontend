import React from "react";
import PropTypes from "prop-types";
import dateformat from "dateformat";
import TodoApi from "../services/todoApi";

function NewItem({
  add,
  iid,
  ititle="",
  idescription='',
  idate=dateformat(new Date(), 'yyyy-mm-dd'),
  istatus="False",
  ipriority=1,
  cancel,
}) {
    const [title, setTitle] = React.useState(ititle);
    const [description, setDescription] = React.useState(idescription);
    const [date, setDate] = React.useState(idate);
    const [status, setStatus] = React.useState(istatus);
    const [priority, setPriority] = React.useState(ipriority);

  const addItem = async () => {
    console.log({
      title,
      description,
      date_due: date,
      status: status,
      priority: priority,
    });
    TodoApi.create({
      title,
      description,
      date_due: date,
      status: status,
      priority: priority,
    });
    setTimeout(add(),2000)
    
    cancel();
  };

  const updateItem = async () => {
    console.log({
      title,
      description,
      date_due: date,
      status: status,
      priority: priority,
    },iid);
    TodoApi.update(iid,{
      title,
      description,
      date_due: date,
      status: status,
      priority: priority,
    });
    setTimeout(add(),2000)
    cancel();
  };
  return (
    <div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Title</span>
        </label>
        <input
          type="text"
          placeholder="Enter title..."
          class="input input-bordered"
          id="addItemTitleInput"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Description</span>
        </label>
        <textarea
          class="textarea h-24 textarea textarea-bordered"
          placeholder="Enter description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div className="form-control">
        <label class="label">Due date</label>
        <input
          type="date"
          class="input input-bordered"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>
      <div class="form-control">
        <label class="label">Status</label>

        <select
          class="select select-bordered select-primary w-full max-w-xs"
          name="status"
          onChange={(e) => setStatus(e.target.value)}
          value={status}
        >
          <option value="False">In Progress</option>

          <option value="True">Completed</option>
        </select>
      </div>

      <div class="form-control">
        <label class="label">Priority</label>

        <select
          class="select select-bordered select-primary w-full max-w-xs"
          name="priority"
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
        >
          <option value="1">High</option>

          <option value="2">Medium</option>

          <option value="3">Low</option>
        </select>
      </div>
      <br></br>
      <div className="flex flex-wrap space-y-3 md:space-y-0 md:space-x-3 timeline-inset ">
        {" "}
        {!ititle.length>0 && (
            <button
            className="btn btn-success"
            disabled={title === ""}
            onClick={addItem}
          >
            Add item
          </button>
          )}
          {ititle.length>0 && (
            <button
            className="btn btn-success"
            disabled={title === ""}
            onClick={updateItem}
          >
            Update
          </button>
          )}
        
        <button
          className="btn btn-secondary"
          style={{ marginLeft: "20px" }}
          onClick={cancel}
        >
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
