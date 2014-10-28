##Installation##

You will need to install [Git](http://git-scm.com/) and [Sass](http://sass-lang.com/install).

##Sass command##

To build the files, use the terminal to navigate to the `/wbs/` folder and run this:

	sass --watch css/source/master.scss:css/build/style.min.css --style compressed

(If you prefer uncompressed, use this):

	sass --watch css/source/master.scss:css/build/style.css
