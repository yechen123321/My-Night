import axios from 'axios'
import TTWss from './TalkHechen'
import {ref} from 'vue'

let aaa = ''
document.getElementById('submitButton').addEventListener('click', function() {
  // 函数体

  axios.post('http://47.121.186.98:8084/question', {
    id: '2',
    name: '朱耿键',
    question: '请给我一句新的英语口语的句子'
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(async function(response) {
      aaa = response.data
      console.log('成功', aaa);
      document.getElementById('result').innerText = aaa; // 将aaa的值设置为result元素的innerText

      let audio_url = ref('');
      const ttsinstance= ref(null)

      ttsinstance.value = TTWss.getInstance('I am planning to visit some museums in New York during my trip', 'xiaoyan', 50, 500, 50)

      ttsinstance.value.connectWebSocket();

      ttsinstance.value.getMessage().then((result) => {
        console.log("成功",result);//测试


        const binaryString = atob(result.data);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        const blob = new Blob([bytes], { type: 'audio/mp3' }); // 根据音频格式修改MIME类型
        const url = URL.createObjectURL(blob);
        document.getElementById('audioPlayer').src = url;
        // audio_url.value=url
        // let aTag = document.createElement('a');
        // aTag.href = url;
        // aTag.download = 'audio_file_name.mp3'; // 设置文件名
        // aTag.style.display = 'none';
        // document.body.appendChild(aTag);
        // aTag.click();
        // document.body.removeChild(aTag);

      }).catch((err) => {
        console.log("失败",err);

      });
      // 在这里处理成功后的逻辑
    })
    .catch(function(error) {
      console.error('失败', error);
      // 在这里处理失败后的逻辑
    });
})

