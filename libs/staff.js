'use strict';

var utils = require(__dirname+'/utils.js');

var Staff = {};


/**
 * Return the nearest point of reference point
 * @param   {[Utils.point]}   tabPoints
 * @param   {Utils.point}     refPoint
 * @returns {Utils.point}     nearestPoint
 */
Staff.findNearestPoint = function (tabPoints, refPoint){
  var minDist       = 0, 
      nearestPoint  = new utils.point(0,0);

  tabPoints.forEach(function (point, pi){

    var distCur  = Math.sqrt(Math.pow(refPoint.x-point.x, 2)+Math.pow(refPoint.y-point.y, 2));

    minDist      = distCur <= minDist ? distCur : (pi == 0 ? distCur : minDist);
    nearestPoint = distCur <= minDist ? point : nearestPoint;
    
  });
  return nearestPoint;
};



/**
 * Return the point witch is on the center of the points in tabPoints
 * @param   {[Utils.point]} tabPoints
 * @returns {Utils.point}   center
 */
Staff.getCenter = function (tabPoints) {

  var min     = new utils.point(0,0),
      max     = new utils.point(0,0),
      center  = new utils.point(0,0);

  tabPoints.forEach(function (point, pi){
    min.x=point.x<min.x ? point.x : (pi == 0 ? point.x : min.x);
    min.y=point.y<min.y ? point.y : (pi == 0 ? point.y : min.y);
    max.x=point.x>max.x ? point.x : (pi == 0 ? point.x : max.x);
    max.y=point.y>max.y ? point.y : (pi == 0 ? point.y : max.y);
  });

  center.x = (min.x + max.x)/2;
  center.y = (min.y + max.y)/2;

  return center;
};


module.exports = Staff;
