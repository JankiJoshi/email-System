/*
navigationMenu.js component will render the menu to the browser
*/

import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

function navigationMenu() {
    return (
        <div className="navigationMenu">
        <List disablePadding dense>
         {items.map(({ label, name, ...rest }) => (
        <ListItem key={name} button {...rest}>
          <ListItemText>{label}</ListItemText>
        </ListItem>
      ))}
        </List>
        </div>
      )}

export default navigationMenu