// Given a list of line segments with a start and end position find
// the place on the number line where there is the most overlap
// between the line segments.

var segments = [
  [0, 4],
  [2, 4],
  [1, 5],
  [-1, 1],
  [6, 8]
];

function overlap(segments) {
  var points = {};
  
  for (var i = 0; i < segments.length; i++) {
    if (!points[segments[i][0]]) {
      points[segments[i][0]] = 1;
    } else {
      points[segments[i][0]] += 1;
    }
    
    if (!points[segments[i][1]]) {
      points[segments[i][1]] = -1;
    } else {
      points[segments[i][1]] -= 1;
    }
  }
  
  var pointArray = [];
  
  for (var pos in points) {
    if (points[pos] !== 0) {
      pointArray.push({
        pos: parseInt(pos),
        delta: points[pos]
      });
    }
  }
  
  pointArray = pointArray.sort(function(a, b) {
    if (a.pos > b.pos) {
      return 1;
    }
    
    if (a.pos < b.pos) {
      return -1;
    }
    
    return 0;
  });
  
  var peakHeight = -Infinity;
  var peakStart;
  var peakEnd;
  var currentHeight = 0;
  
  for (var i = 0; i < pointArray.length; i++) {
    if (pointArray[i].delta < 0 && peakHeight == currentHeight) {
      peakEnd = pointArray[i].pos;
    }
    
    currentHeight += pointArray[i].delta;
    
    if (currentHeight > peakHeight) {
      peakHeight = currentHeight;
      peakStart = pointArray[i].pos;
    }
  }
  
  return [peakStart, peakEnd];
}

console.log(overlap(segments));
