var g = d3.select('#statecontainer').append('svg').attr('width', 750).attr('height',600).append('g').attr('transform', 'translate(30,0), scale(.7)');

var d = [];
for (var i in states) {
	if (!states.hasOwnProperty(i)) continue;
	d.push({
		id: i,
		path: states[i],
		color: '#'+Math.floor(Math.random()*16777215).toString(16)
	});
}

var p = g.selectAll('path').data(d);
p.enter().append('path')
		 .attr('fill','red')
		 .attr('d', function(d) { return d.path; })
		 .attr('stroke', 'rgba(255,255,255,.2)')
		 .attr('opacity',0)
		 .attr('transform', 'translate(1000,1000)scale(0)translate(-1000,-1000)');

p.transition().duration(500)
			  .attr('fill', function(d) { return d.color;})
			  .delay(function(d, i) { return i * 10 })
			  .attr('opacity', 1)
			  .attr('transform', 'translate(900,300)scale(1)translate(-900,-300)');