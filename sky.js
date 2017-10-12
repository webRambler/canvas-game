function Sky(info) {
  this.canvas = info.canvas;
  this.context = info.context;
  this.x = info.x;
  this.image = info.image;

}

Sky.prototype = {
  constructor: Sky,
  draw: function () {
    this.x -= 2;
    if (this.x <= -this.canvas.width) {
      this.x = this.canvas.width;
    }
    this.context.drawImage(this.image, this.x, 0);

  }
}
