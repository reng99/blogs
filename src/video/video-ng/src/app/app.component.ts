import { Component, ElementRef, AfterViewInit } from '@angular/core';
import * as RecordRTC from 'recordrtc'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit{

  public window: any;
  public document: any;
  public navigator: any;

  // 视频
  public video: any;
  public videoProOut: any; // 视频总进度条
  public videoPro: any; // 视频进度条
  public videoPoi: any; // 视频进度点
  public processWidth: number = 0; // 视频进度条总长度

  public currentTime: string = '00:00:00'
  public totalTime: string = '00:00:00'

  // 视频选项
  public videoOption: any = {
    volume: 20
  }
  // 视频状态
  public videoState: any = {
    play: false, // 播放状态
    distance: 0, // 移动的距离
    downState: false, // 鼠标点击进度条
    playState: false,
    leftInit: 0, // 当前进度初始偏移量
    screenState: false
  }

  // 录屏
  public videoRtc: any = {}
  public stream: MediaStream;
  public recordRTC: any;

  // 声音
  public voiceProOut: any; // 音频总进度条
  public voicePro: any; // 音频进度条
  public voicePoi: any; // 音频进度点
  public volProcessHeight: number = 0; // 音频的高度
  public voiceState: any = {
    distance: 0, // 移动的距离
    downState: false, // 鼠标点击进度条
    topInit: 0, // 当前进度条初始位置
  }

  // 录制
  public displayMediaOptions: any = {
    video: {
      cursor: "never"
    },
    audio: false
  };

  constructor(
    private videoRef: ElementRef,
    private videoRtcRef: ElementRef,
    private videoProOutRef: ElementRef,
    private videoProRef: ElementRef,
    private videoPoiRef: ElementRef,
    private voiceProOutRef: ElementRef,
    private voiceProRef: ElementRef,
    private voicePoiRef: ElementRef
  ) {  }

  ngOnInit() {
    this.video = this.videoRef.nativeElement.querySelector('#video')
    this.videoRtc = this.videoRtcRef.nativeElement.querySelector('#videoRtc')
    this.videoProOut = this.videoProOutRef.nativeElement.querySelector('#custom-video_control-bg-outside')
    this.videoPro = this.videoProRef.nativeElement.querySelector('#custom-video_control-bg-inside')
    this.videoPoi = this.videoPoiRef.nativeElement.querySelector('#custom-video_control-bg-inside-point')

    this.voiceProOut = this.voiceProOutRef.nativeElement.querySelector('#custom-video_control-voice-bg-outside')
    this.voicePro = this.voiceProRef.nativeElement.querySelector('#custom-video_control-voice-bg-inside')
    this.voicePoi = this.voicePoiRef.nativeElement.querySelector('#custom-video_control-voice-bg-point')

    this.window = window
    this.document = document
    this.navigator = navigator
    // 监听退出画中画
    this.video.addEventListener('leavepictureinpicture', () => {
      this.video.style.display = "block"
    })

    // 视频操作
    this.processWidth = this.videoProOut.clientWidth;
    this.videoState.leftInit = this.getOffset(this.videoProOut, undefined).left
    this.video.volume = this.videoOption.volume / 100 // 设置初始化声音
    this.initVideoData();
    this.initVioceData();
  }

  ngAfterViewInit() {
    this.videoRtc.muted = false;
    this.videoRtc.controls = true;
    this.videoRtc.autoplay = false;
  }

  toggleControls() {
    this.videoRtc.muted = !this.videoRtc.muted;
    this.videoRtc.controls = !this.videoRtc.controls;
    this.videoRtc.autoplay = !this.videoRtc.autoplay;
  }

  // 初始化 video 的相关的事件
  initVideoData(): void {
    // 获取视频的总时长
    this.video.addEventListener('loadedmetadata', () => {
      this.totalTime = this.formatTime(this.video.duration)
    })
    // 监听时间发生更改
    this.video.addEventListener('timeupdate', () => {
      const percentage = 100 * this.video.currentTime / this.video.duration
      this.videoPro.style.width = percentage + '%'
      this.videoPoi.style.left = percentage - 1 + '%'
      this.currentTime = this.formatTime(this.video.currentTime) // 当前播放的时间
    })
  }

  // 初始化 voice 的相关的事件
  initVioceData(): void {
    // 监听声音更改
    this.video.addEventListener("volumechange", () => {
      const percentage = this.video.volume * 100;
      this.voicePro.style.height = percentage + '%'
      this.voicePoi.style.bottom = percentage + '%'
    })
  }

  // 播放按钮事件
  play(flag: string | undefined) {
    if(flag) this.videoState.playState = true
    this.videoState.play = true
    this.video.play()
  }
  // 暂停按钮事件
  pause(flag: string | undefined): void {
    if(flag) this.videoState.playState = false
      this.video.pause()
      this.videoState.play = false
  }

  // 快进指定的时间
  forwardSecond(second: number): void {
    this.video.currentTime += second
  }

  // 后退指定的时间
  retreatSecond(second: number): void {
    this.video.currentTime -= second
  }

  // 倍速
  speedUpVideo(multiple: number): void {
    this.video.playbackRate = multiple
  }

  // 开或关声音
  openOrCloseVoice(): void {
    this.video.muted = !this.video.muted;
  }

  // 全屏操作
  toFullScreen(): void {
    this.video.webkitRequestFullScreen()
  }

  // 进入画中画
  entryInPicture(): void {
    this.video.requestPictureInPicture()
    this.video.style.display = "none"
  }

  // 退出画中画
  exitInPicture(): void {
    if(this.document.pictureInPictureElement) {
      this.document.exitPictureInPicture()
      this.video.style.display = "block"
    }
  }

  // 格式化时间
  formatTime(t: number): string {
    let h: any = Math.floor(t / 60 / 60)
      h < 10 && (h = '0' + h)
    let m: any = Math.floor(t / 60)
      m < 10 && (m = '0' + m)
    return h + ":" + m + ":" + (t % 60 / 100 ).toFixed(2).slice(-2)
  }

  // 获取当前屏幕下进度条的左偏移和右偏移
  getOffset(node: any, offset: any): any {
    if(!offset) {
      offset = {}
      offset.top = 0
      offset.left = 0
    }
    if(node === this.document.body || node === null) {
      return offset
    }
    offset.top += node.offsetTop;
    offset.left += node.offsetLeft;
    return this.getOffset(node.offsetParent, offset)
  }

  // 进度条鼠标按下
  handleProgressDown(event: any): void {
    this.videoState.downState = true
    this.pause(undefined);
    this.videoState.distance = event.clientX + document.documentElement.scrollLeft - this.videoState.leftInit;
  }
  // 进度条 滚动条移动
  handleProgressMove(event: any): void {
    if(!this.videoState.downState) return
    let distanceX = (event.clientX + document.documentElement.scrollLeft) - this.videoState.leftInit
    if(distanceX > this.processWidth) {
      distanceX = this.processWidth;
    }
    if(distanceX < 0) {
      distanceX = 0
    }
    this.videoState.distance = distanceX
    this.video.currentTime = this.videoState.distance / this.processWidth * this.video.duration
  }
  // 进度条 鼠标抬起
  handleProgressUp(event: any): void {
    this.videoState.downState = false
    // 视频播放
    this.video.currentTime = this.videoState.distance / this.processWidth * this.video.duration
    this.currentTime = this.formatTime(this.video.currentTime)
    if(this.videoState.playState) {
      this.play(undefined)
    }
  }

  // 声音条 鼠标按下
  handleVolProgressDown(event: any) {
    this.voiceState.topInit = this.getOffset(this.voiceProOut, undefined).top
    this.volProcessHeight = this.voiceProOut.clientHeight
    this.voiceState.downState = true //按下鼠标标志
    this.voiceState.distance = this.volProcessHeight - (event.clientY + document.documentElement.scrollTop - this.voiceState.topInit) 
  }
  // 声音 滚动条移动
  handleVolProgressMove(event: any) {
    if(!this.voiceState.downState) return
      let disY = this.voiceState.topInit + this.volProcessHeight - (event.clientY + document.documentElement.scrollTop)
      if(disY > this.volProcessHeight - 2) {
        disY = this.volProcessHeight - 2
      }
      if(disY < 0) {
        disY = 0
      }
      this.voiceState.distance = disY
      this.video.volume = this.voiceState.distance / this.volProcessHeight
      this.videoOption.volume = Math.round(this.video.volume * 100)
  }
  // 声音 鼠标抬起
  handleVolProgressUp(event: any) {
    this.voiceState.downState = false //按下鼠标标志
    let voiceRate =  this.voiceState.distance / this.volProcessHeight
    if(voiceRate > 1) {
      voiceRate = 1
    }
    if(voiceRate < 0) {
      voiceRate = 0
    }
    this.video.volume = voiceRate
    this.videoOption.volume = Math.round(this.video.volume * 100)
  }

  // 开始录制
  startCapture() {
    let mediaConstraints: any = {
      video: {
        mandatory: {
          minWidth: 1280,
          minHeight: 720
        }
      }, audio: true
    };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  successCallback(stream: MediaStream) {
    console.log(stream, 'stream')
    var options: any = {
      mimeType: 'video/webm', // or video/webm\;codecs=h264 or video/webm\;codecs=vp9
      audioBitsPerSecond: 128000,
      videoBitsPerSecond: 128000,
      bitsPerSecond: 128000 // if this line is provided, skip above two
    };
    this.stream = stream;
    this.recordRTC = new RecordRTC(stream, options);
    this.recordRTC.startRecording();
    let video: HTMLVideoElement = this.video.nativeElement;
    video.src = this.window.URL.createObjectURL(stream);
    this.toggleControls();
  }

  errorCallback() {
    //handle error here
  }
  
  // 停止录制
  stopCapture(): void {
    let recordRTC = this.recordRTC;
    recordRTC.stopRecording(this.processVideo.bind(this));
    let stream = this.stream;
    stream.getAudioTracks().forEach((track: any) => track.stop());
    stream.getVideoTracks().forEach((track: any) => track.stop());
  }

  processVideo(audioVideoWebMURL:any) {
    let recordRTC = this.recordRTC;
    this.videoRtc.src = audioVideoWebMURL;
    this.toggleControls();
    var recordedBlob = recordRTC.getBlob();
    recordRTC.getDataURL(function (dataURL: any) { });
  }

  download() {
    if(!this.recordRTC) return;
    this.recordRTC.save('video.webm');
  }

} 