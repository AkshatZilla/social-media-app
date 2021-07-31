import Avatar from '@material-ui/core/Avatar';
import './Post.css';

const Post = ({ key, postId, user, username, caption, imageUrl }) => {
	return (
		<div className='post'>
			<div className='post__header'>
				<Avatar
					className='post__avatar'
					alt={username}
					src='/static/images/avatar/1.png'
				/>

				<p>{username}</p>
			</div>

			<img className='post__image' src={imageUrl} />

			<h4 className='post__text'>
				<strong>{username}</strong> {caption}
			</h4>

			<div className='post__comments'>
				<h4>Comments</h4>
				<hr />
				<p>
					<strong>Akshat</strong> Hello THIS IS EPIC!!!
				</p>
			</div>
		</div>
	);
};

export default Post;
