<template>
  <div style="padding: 20px;">
    <h1>{{ msg }}</h1>
    <h3>录音上传</h3>
    <div style="font-size:14px">
      <h3>录音时长：{{ recorder && recorder.duration.toFixed(4) }}</h3>
      <br />
      <el-button type="primary" @click="handleStart">开始录音</el-button>
      <el-button type="info" @click="handlePause">暂停录音</el-button>
      <el-button type="success" @click="handleResume">继续录音</el-button>
      <el-button type="warning" @click="handleStop">停止录音</el-button>
      <br />
      <br />
      <h3>
        播放时长：{{ recorder && (playTime > recorder.duration ? recorder.duration.toFixed(4) : playTime.toFixed(4)) }}
      </h3>
      <br />
      <el-button type="primary" @click="handlePlay">播放录音</el-button>
      <el-button type="info" @click="handlePausePlay">暂停播放</el-button>
      <el-button type="success" @click="handleResumePlay">继续播放</el-button>
      <el-button type="warning" @click="handleStopPlay">停止播放</el-button>
      <el-button type="error" @click="handleDestroy">销毁录音</el-button>
      <el-button type="primary" @click="downloadPCM">下载PCM数据</el-button>
      <el-button type="primary" @click="downloadWAV">下载WAV数据</el-button>
<!--      <el-button type="primary" @click="uploadRecord">上传</el-button>-->
    </div>
  </div>
</template>

<script>
import Recorder from 'js-audio-recorder'
// import axios from 'axios'

export default {
  name: 'MyRecorder',
  props: {
    msg: String
  },
  data() {
    return {
      recorder: null,
      playTime: 0,
      timer: null,
      src: null
    }
  },
  created() {
    this.recorder = new Recorder({
      sampleBits: 16, // 采样位数，支持 8 或 16，默认是 16
      sampleRate: 16000, // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，Chrome 是 48000
      numChannels: 1, // 声道数，支持 1 或 2， 默认是 1
    })
  },
  methods: {
    // 开始录音
    handleStart() {
      this.recorder = new Recorder()
      Recorder.getPermission().then(() => {
        console.log('开始录音')
        this.recorder.start() // 开始录音
      }, (error) => {
        this.$message({
          message: '请先允许该网页使用麦克风',
          type: 'info'
        })
        console.log(`${error.name} : ${error.message}`)
      })
    },
    handlePause() {
      console.log('暂停录音')
      this.recorder.pause() // 暂停录音
    },
    handleResume() {
      console.log('恢复录音')
      this.recorder.resume() // 恢复录音
    },
    handleStop() {
      console.log('停止录音')
      this.recorder.stop() // 停止录音
    },
    handlePlay() {
      console.log('播放录音')
      console.log(this.recorder)
      this.recorder.play() // 播放录音

      // 播放时长
      this.timer = setInterval(() => {
        try {
          this.playTime = this.recorder.getPlayTime()
        } catch (error) {
          this.timer = null
        }
      }, 100)
    },
    handlePausePlay() {
      console.log('暂停播放')
      this.recorder.pausePlay() // 暂停播放

      // 播放时长
      this.playTime = this.recorder.getPlayTime()
      this.time = null
    },
    handleResumePlay() {
      console.log('恢复播放')
      this.recorder.resumePlay() // 恢复播放

      // 播放时长
      this.timer = setInterval(() => {
        try {
          this.playTime = this.recorder.getPlayTime()
        } catch (error) {
          this.timer = null
        }
      }, 100)
    },
    handleStopPlay() {
      console.log('停止播放')
      this.recorder.stopPlay() // 停止播放

      // 播放时长
      this.playTime = this.recorder.getPlayTime()
      this.timer = null
    },
    handleDestroy() {
      console.log('销毁实例')
      this.recorder.destroy() // 销毁实例
      this.timer = null
    },
    downloadPCM() {
      console.log('下载PCM格式数据')
      // 注：使用该方法会默认调用 stop() 方法
      this.recorder.downloadPCM('record-pcm')
    },
    downloadWAV() {
      console.log('下载WAV格式数据')
      // 注：使用该方法会默认调用 stop() 方法
      this.recorder.downloadWAV('record-wav')
    },
    uploadRecord() {
      if (this.recorder == null || this.recorder.duration === 0) {
        this.$message({
          message: '请先录音',
          type: 'error'
        })
        return false
      }
      this.recorder.pause() // 暂停录音
      this.timer = null
      console.log('上传录音') // 上传录音

      const formData = new FormData()
      const blob = this.recorder.getPCMBlob() // 获取 pcm 格式音频数据
      // 此处获取到 blob 对象后需要设置 fileName 满足项目上传需求，这里选择直接把 blob 作为 file 塞入 formData
      const fileOfBlob = new File([blob], new Date().getTime() + '.pcm')
      formData.append('file', fileOfBlob)
      const url = window.URL.createObjectURL(fileOfBlob)
      this.src = url
      // const axios = require('axios')
      // axios.post(url, formData).then(res => {
      //   console.log(res.data.data[0].url)
      // })
    }
  }
}
</script>
