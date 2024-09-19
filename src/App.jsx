import './App.css'
import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import { createViewMonthAgenda, createViewMonthGrid, createViewWeek } from '@schedule-x/calendar'

import '@schedule-x/theme-default/dist/calendar.css'
import { createEventModalPlugin } from '@schedule-x/event-modal'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'

function App() {

  const calendar = useCalendarApp({
    views: [createViewWeek(), createViewMonthAgenda(), createViewMonthGrid()],
    events: [
      {
        id: '1',
        title: 'Coofe With Christian!',
        start: '2024-09-19 14:30',
        end: '2024-09-19 16:00',
        description: 'Programation Working with Christian!',
      },
    ],
    plugins: [
      createEventModalPlugin(),
      createDragAndDropPlugin(),
    ],
  })

  return (
    <>
        <ScheduleXCalendar calendarApp={ calendar } />
    </>
  )
}

export default App
