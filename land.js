function Land(info) {
  this.canvas = info.canvas;
  this.context = info.context;
  this.image = info.image;
  this.x = info.x;
}

Land.prototype = {
  constructor: Land,
  draw: function () {
    this.x -= 2;
    if (this.x <= -this.image.width) {
      this.x = this.canvas.width;
    }
    this.context.drawImage(this.image, this.x, this.canvas.height - this.image.height);

  }
}
