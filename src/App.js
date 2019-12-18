/*
App.js wil pass the menu list to the component navigationMenu
*/
import React from 'react'
import navigationMenu from './navigationMenu'

const items = [
    { name: 'inbox', label: 'Inbox' },
    { name: 'sent', label: 'Sent' },
    { name: 'archive', label: 'Archive' },
    { name: 'delete', label: 'Delete' },
    { name: 'spam', label: 'Spam' },
]

function App() {
    return (
        <div>
          <navigationMenu items={items} />
        </div>
      )}

export default App