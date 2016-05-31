var chai = require('chai');
var path = require('path');
var fs = require('fs');
var stylus = require('stylus');
var parse = require('css-parse');
var rupture = require('rupture');
var test_path = path.join(__dirname, 'fixtures');
var should = chai.should();

match_expected = function(file, done) {
  return stylus(fs.readFileSync(path.join(test_path, file), 'utf8')).use(rupture()).render(function(err, css) {
    var expected;
    if (err) {
      return done(err);
    }
    expected = fs.readFileSync(path.join(test_path, 'expected', file.replace('.styl', '.css')), 'utf8');
    JSON.stringify(parse(css)).should.eql(JSON.stringify(parse(expected)));
    return done();
  });
};

describe('basic', function() {
  it('between', function(done) {
    return match_expected('between.styl', done);
  });
  it('at', function(done) {
    return match_expected('at.styl', done);
  });
  it('at-rasterise-media-queries', function(done) {
    return match_expected('at-rasterise-media-queries.styl', done);
  });
  it('from-width', function(done) {
    return match_expected('from.styl', done);
  });
  it('from-width-rasterise-media-queries', function(done) {
    return match_expected('from-rasterise-media-queries.styl', done);
  });
  it('to-width', function(done) {
    return match_expected('to.styl', done);
  });
  it('above', function(done) {
    return match_expected('above.styl', done);
  });
  it('above-supress-responsive', function(done) {
    return match_expected('above-rasterise-media-queries.styl', done);
  });
  it('below', function(done) {
    return match_expected('below.styl', done);
  });
  it('mobile', function(done) {
    return match_expected('mobile.styl', done);
  });
  it('tablet', function(done) {
    return match_expected('tablet.styl', done);
  });
  it('desktop', function(done) {
    return match_expected('desktop.styl', done);
  });
  it('desktop-rasterise-media-queries', function(done) {
    return match_expected('desktop-rasterise-media-queries.styl', done);
  });
  it('hd', function(done) {
    return match_expected('hd.styl', done);
  });
  it('retina', function(done) {
    return match_expected('retina.styl', done);
  });
  it('orientation', function(done) {
    return match_expected('orientation.styl', done);
  });
  it('supports em-based media queries', function(done) {
    return match_expected('ems.styl', done);
  });
  it('adds anti-overlap correction to prevent overlapping media queries', function(done) {
    return match_expected('overlap.styl', done);
  });
  it('supports named scale units', function(done) {
    return match_expected('named.styl', done);
  });
  it('supports device-width media queries', function(done) {
    return match_expected('device.styl', done);
  });
  return it('supports fallback classes', function(done) {
    return match_expected('fallback-classes.styl', done);
  });
});
