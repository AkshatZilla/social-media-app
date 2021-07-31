import './App.css';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Post from './components/Post/Post';

const App = () => {
	return (
		<div className='app'>
			<div className='app__header'>
				<img className='app__headerImage' src='/Icon.png' alt='App Logo' />

				<div className='app_searchContainer'>
					<SearchIcon />
					<input type='text' placeholder='Search' />
				</div>

				<div className='login__container'>
					<Button type='submit'>Sign In</Button>
					<Button type='submit'>Sign Up</Button>
				</div>
			</div>

			<div className='app_posts'>
				<Post
					key={191901}
					postId={18192}
					user={'Akshat'}
					username={'Akshat'}
					caption={'Test Post'}
					imageUrl={
						'https://images.unsplash.com/photo-1627534640676-fbcac1e4bac8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=808&q=80'
					}
				/>
			</div>
		</div>
	);
};

export default App;
