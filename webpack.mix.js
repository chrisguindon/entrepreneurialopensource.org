/*!
 * Copyright (c) 2021 Eclipse Foundation, Inc.
 * 
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 * 
 * Contributors:
 *   Christopher Guindon <chris.guindon@eclipse-foundation.org>
 * 
 * SPDX-License-Identifier: EPL-2.0
*/

mix = require('laravel-mix');

mix.options({uglify: {uglifyOptions: {compress: false, output: {comments: true}}}});

mix.setPublicPath('static');
mix.setResourceRoot('../');

mix.less('./less/styles.less', 'static/css/styles.css');

mix.babel([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    './node_modules/jquery-match-height/dist/jquery.matchHeight-min.js',
    './node_modules/jquery-eclipsefdn-api/dist/jquery.eclipsefdn-api.min.js',
    './node_modules/feather-icons/dist/feather.min.js',
    './node_modules/cookieconsent/src/cookieconsent.js',
    './node_modules/owl.carousel/dist/owl.carousel.min.js',
    './node_modules/eclipsefdn-solstice-assets/js/solstice.cookieconsent.js',
    './node_modules/eclipsefdn-solstice-assets/js/eclipsefdn.videos.js',
    './node_modules/eclipsefdn-solstice-assets/js/solstice.cookies.js',
    './node_modules/eclipsefdn-solstice-assets/js/solstice.js',
    './node_modules/eclipsefdn-solstice-assets/js/solstice.eventsmodal.js',
    './node_modules/eclipsefdn-solstice-assets/js/eclipsefdn.render-rss-feeds.js'
], './static/js/solstice.js');

mix.babel('js/projects.js', './static/js/projects.min.js');