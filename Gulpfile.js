/**
 * Gulp file
 *
 * @package Woostify Block
 */

'use strict';

const domain = 'woostify-block',
	glob = require( 'glob' ),
	gulp = require( 'gulp' ),
	zip = require( 'gulp-zip' ),
	del = require( 'del' ),
	sourcemaps = require( 'gulp-sourcemaps' ),
	uglify = require( 'gulp-uglify-es' ).default,
	rename = require( 'gulp-rename' ),
	fs = require( 'fs' ),
	wpPot = require( 'gulp-wp-pot' );

const pkgInfo = JSON.parse( fs.readFileSync( './package.json' ) );

// Handle console.
let handleError = function ( e ) {
	console.log( e.toString() );
	this.emit( 'end' );
};

// Create .pot file.
let _pot = ( done ) => {
	gulp.src( '**/*.php' )
		.pipe(
			wpPot( {
				domain: domain,
				package: 'Woostify Block',
			} )
		)
		.on( 'error', handleError )
		.pipe( gulp.dest( 'languages/' + domain + '.pot' ) );

	done();
};
gulp.task( 'pot', _pot );

// Zip task.
let _zip = ( done ) => {
	gulp.src( [
		'**/*',
		'!./{node_modules,node_modules/**/*}',
		'!./*.cache',
		'!./*.log',
		'!./*.xml',
		'!./*.lock',
		'!./*.json',
		'!./*.map',
		'!./**/*.scss',
		'!**.DS_Store',
		'!./assets/css/admin/**/*.scss}',
		'!./Gulpfile.js',
		'!./webpack.config.js',
		'!README.md',
		'!.gitignore',
		'!src/**',
		'!build/**',
	] )
		/*.pipe( debug( { title: 'src' } ) )*/
		.pipe( zip( 'woostify-block-' + pkgInfo.version + '.zip' ) )
		.pipe( gulp.dest( 'bundled' ) );

	done();
};
gulp.task( 'zip', gulp.series( _pot, _zip ) );
