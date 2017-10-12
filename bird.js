function Bird(info) {
  this.canvas = info.canvas;
  this.image = info.image;
  this.context = info.context;
  this.line = 0;
  this.perW = info.perW;
  this.H = info.H;
  this.v = 0;
  this.a = 0.0005;
  this.startTime = new Date();
  // console.log(this.startTime.getTime());
  this.y = 150;
  this.maxV = 0.5;
  this.maxRad = Math.PI / 4;
}

Bird.prototype = {
  constructor: Bird,
  draw: function () {
    //展翅膀的小鸟
    this.line += 1;
    this.line %= 3;

    //小鸟往下掉
    var now = new Date();
    // console.log(now.getTime());
    var t = now - this.startTime;
    this.v = this.v + this.a * t;
    var s = this.v * t + 1 / 2 * this.a * t * t;
    this.y += s;
    // console.log(this.y);

    //小鸟往下掉的时旋转
    //计算
    this.context.save(); //保存原有的坐标系
    this.context.translate(100, this.y);
    var percent = this.v / this.maxV;
    var rad = percent * this.maxRad;
    this.context.rotate(rad);
    //画出小鸟
    this.context.drawImage(this.image, this.line * this.perW, 0, this.perW, this.H, -this.perW / 2, -this.H / 2, this.perW, this.H);
    //还原坐标系
    this.context.restore();

    this.startTime = now;
  }
}
