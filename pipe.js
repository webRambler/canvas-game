function Pipe(info) {
  this.topImage = info.topImage;
  this.bottomImage = info.bottomImage;
  this.x = info.x;
  this.canvas = info.canvas;
  this.context = info.context;
  this.gap = info.gap;
  this.sapce = 100;
  this.lanH = info.landH;
  this.startChange();
}

Pipe.prototype = {
  constructor: Pipe,
  draw: function () {
    this.x -= 2;


    if (this.x <= -this.topImage.width) {
      this.x = this.canvas.width + this.gap - this.topImage.width;
      this.startChange();
    }
    this.context.drawImage(this.topImage, this.x, 0, this.topImage.width, this.topH);

    this.context.drawImage(this.bottomImage, this.x, this.bottomY, this.topImage.width, this.bottomH);

    //绘制管道的路径
    //a.上面的管道路径
    this.context.rect(this.x, 0, this.topImage.width, this.topH);
    //b.下面的管道路径
    this.context.rect(this.x, this.bottomY, this.topImage.width, this.bottomH);

  },
  startChange: function () {
    this.topH = 100 + Math.random() * 150;
    this.bottomH = this.canvas.height - this.lanH - this.sapce - this.topH;
    this.bottomY = this.topH + this.sapce;
    // console.log(this.bottomH);
  }
}
