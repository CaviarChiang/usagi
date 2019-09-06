import React from 'react';
import Grid from '@material-ui/core/Grid';

import ChatListPage from './ui/app/chatListPage';
import MessagePage from './ui/app/messagePage';

import './style/messagePage.css';

function App() {
  return (
	<div className='App'>
	  	<Grid container alignContent='stretch' alignItems='stretch' spacing={1} >
			<Grid item sm={3}>
				<ChatListPage input="test input"/>
			</Grid>
			<Grid item sm>
				<MessagePage/>
			</Grid>
        </Grid>
	</div>
  );
}

export default App;
