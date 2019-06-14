var Movie = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired,
  },

  render: function() {
  	var moviesElements = movies.map(function(movie){
		return React.createElement('li', {key: movie.id},
			React.createElement('h1', {}, movie.title),
			React.createElement('p', {}, movie.desc),
			React.createElement('img', {src: movie.image}, ),
		);
	});

    return (
      	React.createElement('div', {},
			React.createElement('h1', {}, 'Lista filmów'),
			React.createElement('ul', {}, moviesElements)
		)
    )
  },
});

var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		image: 'image/harry.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film opowiadający historię króla sawanny',
		image: 'image/lion.jpeg'
	},
	{
		id: 3,
		title: 'Back to the Future',
		desc: 'Film o podróżach w czasie',
		image: 'image/future.jpg'
	},
	{
		id: 4,
		title: 'Jurassic Park',
		desc: 'Film o dinozaurach',
		image: 'image/jurassic.jpg'
	}
];



var element = React.createElement(Movie, {movies: movies});
ReactDOM.render(element, document.getElementById('app'));