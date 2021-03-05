import React from 'react'
import CenteredColumn from '../components/Layouts'

export function Footer() {
    return (
      <CenteredColumn>
        <div className="h-px bg-gray-200 dark:bg-gray-800 timeline-stroke" />
        <div className="grid grid-cols-1 gap-4 p-6 py-24 bg-gray-100 sm:grid-cols-1 dark:bg-gray-900 sm:bg-gray-50 sm:dark:bg-gray-1000">
          <div className="flex flex-col space-y-4">
            <a
              href="https://github.com/aikins01/"
              target="_blank"
              rel="noopener noreferrer"
              className="black-link"
            >
              Built with 💜️ by @aikins01
            </a>
          </div>
        </div>
      </CenteredColumn>
    )
  }