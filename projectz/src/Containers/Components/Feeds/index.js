import React from 'react';
import { Grid, Card, CardContent, Typography, IconButton, CardActions, Button, Avatar, CardHeader } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';

const data = [
  {
    id: 1,
    userName: 'Ram',
    content: 'Installation and Training at Govt Medical College...',
    likes: 110,
    comments: 32,
    shares: 12,
    timeAgo: '24h',
    imageUrl: 'https://c4.wallpaperflare.com/wallpaper/146/782/552/nature-is-pleased-with-simplicity-and-nature-is-no-dummy-wallpaper-preview.jpg', // optional image
  },
  {
    id: 1,
    userName: 'Krishna',
    content: 'Installation and Training at Govt Medical College...',
    likes: 110,
    comments: 32,
    shares: 12,
    timeAgo: '24h',
    imageUrl: 'https://c4.wallpaperflare.com/wallpaper/146/782/552/nature-is-pleased-with-simplicity-and-nature-is-no-dummy-wallpaper-preview.jpg', // optional image
  }
];

const PostCard = ({ post }) => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="user">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.userName}
        subheader={post.timeAgo}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.content}
        </Typography>
        {post.imageUrl && (
          <img
            src={post.imageUrl}
            alt="post"
            style={{ width: '100%', marginTop: '10px', borderRadius: '5px' }}
          />
        )}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like post">
          <FavoriteIcon />
        </IconButton>
        <Typography>{post.likes}</Typography>
        <IconButton aria-label="share post">
          <ShareIcon />
        </IconButton>
        <Typography>{post.shares}</Typography>
        <Button size="small" color="secondary" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

const PostGrid = () => {
  return (
    <Grid container spacing={2} width={'100%'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
      {data.map((post) => (
        <Grid item xs={12} sm={6} key={post.id}>
          <PostCard post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PostGrid;
