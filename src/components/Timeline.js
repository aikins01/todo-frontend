import * as React from 'react'
import PropTypes from "prop-types";
import { Coffee } from 'react-feather'
import TodoItem  from './TodoItem'
import { DateEntry, TimelineEntry } from './entry'
import moment from 'moment'

function Timeline(props) {
 
  return (
    <div className="flex flex-col w-full timeline-container">
      <div>
        
        {props.todos.dates.map((a, i) => {
          return (
            <div key={i}>
              <DateEntry title={moment(a).format('MMMM Do YYYY')} />
              {props.todos.todos[a].map((item, i) => {
                
                return (
                  <TodoItem
                    key={i}
                    timestamp={item.date_created}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    status={item.status}
                    refr={props.refr}
                    adding={props.adding}
                    oldi={props.oldi}
                    item={item}
                    cancel={props.cancel}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
      {/*<DateEntry title={key[0]} />  */}
      <TimelineEntry
        title="First Hardcoded Item..."
        timestamp="More todo entries coming soon"
        Icon={Coffee}
        divider={false}
      />
    </div>
  )
}


Timeline.propTypes = {
  refr: PropTypes.func.isRequired,
  adding: PropTypes.func.isRequired,
  oldi: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};

export default Timeline
