import * as React from 'react'
import { ButtonSet, TimelineEntry } from './entry'
import { Edit2, GitMerge } from 'react-feather'
import todoApi from "../services/todoApi";

export function TodoItem({
  title,
  description,
  timestamp,
  divider = true,
  id
}) {
  return (
    <TimelineEntry
      title="Added new Item"
      tint="green"
      Icon={Edit2}
      timestamp={timestamp}
      divider={divider}
    >
        <a href={"https://d.com"} className="px-4 py-3 transition-shadow bg-white rounded-md shadow dark:bg-gray-900 hover:shadow-cardHover">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-1">
              <p className="font-semibold">{title}</p>
              <p className="font-normal text-tertiary">{description}</p>
            </div>
          </div>
        </a>
      <ButtonSet>
        
          <a href="/edit" className="w-full md:w-auto">
            <button className="w-full md:w-auto btn">
              <span>Edit</span>
            </button>
          </a>
        <div
          
          className="w-full md:w-auto"
        >
          <button onClick={todoApi.remove(id)} className="w-full md:w-auto btn">
            <>
              <GitMerge size={16} />
              <span>Delete</span>
            </>
          </button>
        </div>
      </ButtonSet>
    </TimelineEntry>
  )
}