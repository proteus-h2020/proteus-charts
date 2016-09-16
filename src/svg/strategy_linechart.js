class SvgLinechartStrategy extends SvgChart {
  constructor(chartContext) {
    super(chartContext);
    var config = this.config
      , xDataType = config.xDataType;

    console.log(xDataType);

    this.svgContainer = new SvgContainer(config);
    this.axes = new XYAxes(xDataType, 'linear', config);
    this.lines = new Lineset(this.axes.xAxis, this.axes.yAxis);

    //Include components in the chart container
    this.svgContainer
      .add(this.axes)
      .add(this.lines);
  }

	/**
	 * Renders a linechart based on data object
	 * @param  {Object} data Data Object. Contains an array with x and y properties.
	 * 
	 */
  draw(data) {
    var svg = this.svgContainer.svg
      , config = this.config
      , bbox = null;

    bbox = this._getDomainBBox(data);

    this.axes.updateDomainByBBox(bbox);

    //Create a transition effect for axis rescaling
    this.axes.transition(svg, 200);

    //Now update lines
    this.lines.update(svg, config, data);

  }

  _getDomainBBox(data) {
    var minX = d3.min(data, (d) => d.x)
      , maxX = d3.max(data, (d) => d.x)
      , minY = d3.min(data, (d) => d.y)
      , maxY = d3.max(data, (d) => d.y);
    return [minX, maxX, minY, maxY];
  }

  /**
   * This method adds config options to the chart context.
   * @param  {Object} config Config object
   */
  _loadConfigOnContext(config) {
    super._loadConfigOnContext(config);
    this.config = this.config || {};
    this.config.markers = {};
    this.config.markers.color = config.markers.color || _default.Linechart.markers.color;
    this.config.markers.outlineColor = config.markers.outlineColor || _default.Linechart.markers.outlineColor;
    this.config.markers.outlineWidth = config.markers.outlineWidth || _default.Linechart.markers.outlineWidth;
    this.config.markers.shape = config.markers.shape || _default.Linechart.markers.shape;
    this.config.markers.size = config.markers.size || _default.Linechart.markers.size;
    this.config.area = typeof (config.area) === 'undefined' ? _default.Linechart.area : config.area;
    this.config.areaOpacity = config.areaOpacity || _default.Linechart.areaOpacity;
    this.config.xDataType = config.xDataType || _default.Linechart.xDataType;
    this.config.xDateformat = config.xDateFormat || _default.Linechart.xDateFormat;
    return this;
  }
}