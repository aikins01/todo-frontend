import * as React from "react";
import PropTypes from "prop-types";
import { ButtonSet, TimelineEntry } from "./entry";
import { Edit2, GitMerge } from "react-feather";
import todoApi from "../services/todoApi";
import {Link} from 'react-scroll'

function TodoItem(props) {
  const deleteRefr = () => {
    todoApi.down(props.id);
    props.refr();
  };
  const adding = () => {
    props.oldi(props.item)
    props.adding(true);
  };
  if (props.status === false) {
    const color = "red";
    const status = "In Progress";
    return (
      <TimelineEntry
        title="Added new Item"
        tint={color}
        Icon={Edit2}
        timestamp={status}
        divider={props.divider}
      >
        <div
          className="px-4 py-3 transition-shadow bg-white rounded-md shadow dark:bg-gray-900 hover:shadow-cardHover"
        >
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-1">
              <p className="font-semibold">{props.title}</p>
              <p className="font-normal text-tertiary">{props.description}</p>
            </div>
          </div>
        </div>
        <ButtonSet>
        <Link  to="newItem" spy={false} smooth={true}>
            <button onClick={adding} className="w-full md:w-auto btn">
              <span>Edit</span>
            </button>
          </Link>
          <div className="w-full md:w-auto">
            <button onClick={deleteRefr} className="w-full md:w-auto btn">
              <>
                <GitMerge size={16} />
                <span>Delete</span>
              </>
            </button>
          </div>
        </ButtonSet>
      </TimelineEntry>
    );
  } else {
    const color = "green";
    const status = "Completed";
    return (
      <TimelineEntry
        title="Added new Item"
        tint={color}
        Icon={Edit2}
        timestamp={status}
        divider={props.divider}
      >
        <div
          className="px-4 py-3 transition-shadow bg-white rounded-md shadow dark:bg-gray-900 hover:shadow-cardHover"
        >
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-1">
              <p className="font-semibold">{props.title}</p>
              <p className="font-normal text-tertiary">{props.description}</p>
            </div>
          </div>
        </div>
        <ButtonSet>
        <Link  to="newItem" spy={false} smooth={true} className="w-full md:w-auto">
            <button onClick={adding} className="w-full md:w-auto btn">
              <span>Edit</span>
            </button>
          </Link>
          <div className="w-full md:w-auto">
            <button
              onClick={() => todoApi.down(props.id)}
              className="w-full md:w-auto btn"
            >
              <>
                <GitMerge size={16} />
                <span>Delete</span>
              </>
            </button>
          </div>
        </ButtonSet>
      </TimelineEntry>
    );
  }
}
TodoItem.propTypes = {
  refr: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};
export default TodoItem;
