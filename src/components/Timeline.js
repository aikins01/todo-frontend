import * as React from 'react'
import { Coffee } from 'react-feather'
import { TodoItem } from './TodoItem'
import { DateEntry, TimelineEntry } from './entry'

function Timeline(todos) {
  console.log(todos)
 
  return (
    <div className="flex flex-col w-full timeline-container">
      <div>
        
        {todos.todos.dates.map((a, i) => {
          return (
            <div key={i}>
              <DateEntry title={a} />
              {todos.todos.todos[a].map((item, i) => {
                return (
                  <TodoItem
                    key={i}
                    timestamp={item.date_created}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
      {/*<DateEntry title={key[0]} />  */}
      <TimelineEntry
        title="First Item..."
        timestamp="More timeline entries coming soon"
        Icon={Coffee}
        divider={false}
      />
    </div>
  )
}
export default Timeline