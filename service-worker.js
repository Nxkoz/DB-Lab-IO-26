/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "033fbaab664dce3ebbef2901b60218a0"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.874f5e71.css",
    "revision": "65297f51f5cab3bf1a2f70191982a0c8"
  },
  {
    "url": "assets/img/ConnectUser.90bd363d.png",
    "revision": "90bd363da945943c39caf87962c3440c"
  },
  {
    "url": "assets/img/DeleteProject.8b22e81c.png",
    "revision": "8b22e81c3cd0583ade0a7b8e661a4f95"
  },
  {
    "url": "assets/img/DeleteTask.9e7ae713.png",
    "revision": "9e7ae713e07b1d77b443e77be4f35c82"
  },
  {
    "url": "assets/img/DeleteUser.432065d9.png",
    "revision": "432065d9d027e852af02d1e8ee844068"
  },
  {
    "url": "assets/img/GetAllProjects.843c3c9a.png",
    "revision": "843c3c9ae177d69643363723e8155a51"
  },
  {
    "url": "assets/img/GetProject.f101dbba.png",
    "revision": "f101dbba89cc49cf37b7e7c53de81e05"
  },
  {
    "url": "assets/img/GetReview.ed03d624.png",
    "revision": "ed03d6247f666ec10d52c536e94a62d2"
  },
  {
    "url": "assets/img/GetTask.0808a4c8.png",
    "revision": "0808a4c88ba1e61a06725d756248a100"
  },
  {
    "url": "assets/img/GetTasks.a68d300f.png",
    "revision": "a68d300f973c65826e7c6ebe8ec9882a"
  },
  {
    "url": "assets/img/GetUser.30b296ba.png",
    "revision": "30b296ba37398d4e674732080139eca1"
  },
  {
    "url": "assets/img/GetUsers.8ebd0ac2.png",
    "revision": "8ebd0ac28656ca5808833b4b20a8db30"
  },
  {
    "url": "assets/img/MySQL.8db3eeeb.png",
    "revision": "8db3eeebdfb320985ce9aec2fee77203"
  },
  {
    "url": "assets/img/PatchProject.1c782d5f.png",
    "revision": "1c782d5fd99ec66cc4041ece6a7faf0e"
  },
  {
    "url": "assets/img/PatchTask.1c82ab74.png",
    "revision": "1c82ab74a010d72c655fac603a13f3f4"
  },
  {
    "url": "assets/img/PatchUser.3ec72559.png",
    "revision": "3ec725599008dcd15acc4bfa14358fa3"
  },
  {
    "url": "assets/img/PostProject.d43572d5.png",
    "revision": "d43572d5fe0918f1526ba807de67c7e2"
  },
  {
    "url": "assets/img/PostReview.17deaaa2.png",
    "revision": "17deaaa27aa16bba198e3001d9999c3f"
  },
  {
    "url": "assets/img/PostTask.eca018df.png",
    "revision": "eca018dff3c196985141fbbc95cef993"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8067bdc3.js",
    "revision": "a9800e10c3dd0e4ef42141e22cb46ad6"
  },
  {
    "url": "assets/js/11.88461e5e.js",
    "revision": "00c055fca3ede995aec3dc0d46aa3311"
  },
  {
    "url": "assets/js/12.e36cd57c.js",
    "revision": "db396cbafb8ce9bef8311045b738f705"
  },
  {
    "url": "assets/js/13.7691c1d1.js",
    "revision": "c2877c932462aa4cd61d6cf16e3493c1"
  },
  {
    "url": "assets/js/14.a30df9fa.js",
    "revision": "c385e1fd9ebafc8644a11cb9eaa290e7"
  },
  {
    "url": "assets/js/15.166298c2.js",
    "revision": "0635389f76198b3468b5de4ca8de23a9"
  },
  {
    "url": "assets/js/16.66bdf40d.js",
    "revision": "a77520df975cf0f32fb7d586ffea01bf"
  },
  {
    "url": "assets/js/17.728d31c5.js",
    "revision": "5f3eaa89242787a74d90ac83474332dd"
  },
  {
    "url": "assets/js/18.0103d044.js",
    "revision": "19d79c4015791eabf9dadd5898cdb88f"
  },
  {
    "url": "assets/js/19.bf361db6.js",
    "revision": "352fc26c171fc1e4492bf97e8d3f847c"
  },
  {
    "url": "assets/js/2.8297b6bf.js",
    "revision": "1d71ffd436e6c688ba19a1ffc8b5b55d"
  },
  {
    "url": "assets/js/20.e640988d.js",
    "revision": "6bd6c8fd55a0124381f4d6ec0ec10881"
  },
  {
    "url": "assets/js/21.8f558d09.js",
    "revision": "46caf83247944cf5649be9e8c11a31b2"
  },
  {
    "url": "assets/js/22.d9bf86b1.js",
    "revision": "5dc8396eddb24b3e0ec559d79c5acdbe"
  },
  {
    "url": "assets/js/23.22dd735e.js",
    "revision": "aa6b03d8cba7647ede0701fbe535e2b2"
  },
  {
    "url": "assets/js/24.f2d0a48c.js",
    "revision": "e9dee6475dc7092913952b498ce62ed6"
  },
  {
    "url": "assets/js/26.fd7ca547.js",
    "revision": "8d5d1a16e8de52868abde4bb44cfdb2e"
  },
  {
    "url": "assets/js/3.cbbe41a0.js",
    "revision": "f180117ffa6f54005766357f5dda48c6"
  },
  {
    "url": "assets/js/4.c82d3ad5.js",
    "revision": "d458097a00dae419ff154060975999ab"
  },
  {
    "url": "assets/js/5.951e85ca.js",
    "revision": "0ab8cd70eae9e299871537d6761aad17"
  },
  {
    "url": "assets/js/6.140ae0cf.js",
    "revision": "1e642c5ceed9853a2c84fb39f12c82be"
  },
  {
    "url": "assets/js/7.9237e9ea.js",
    "revision": "6399d906802dab6e7bf14dff6eeb83c7"
  },
  {
    "url": "assets/js/8.667c84f6.js",
    "revision": "7586860d08cb0c6a82cf24d833ba64ea"
  },
  {
    "url": "assets/js/9.483c1fc0.js",
    "revision": "8ce06dec90425c1b5335ee3f51935894"
  },
  {
    "url": "assets/js/app.a6c76b42.js",
    "revision": "f9d29b369a0aeaf0d3f1f9287a8bf115"
  },
  {
    "url": "conclusion/index.html",
    "revision": "1269f93f9f5e4ba00cd5282399e0d906"
  },
  {
    "url": "design/index.html",
    "revision": "2ab591af77ebc7193033f47a7875b855"
  },
  {
    "url": "index.html",
    "revision": "5403e569280e0c000adf69629d4c43b3"
  },
  {
    "url": "intro/index.html",
    "revision": "e7d97c0027ea8261d1f1373a1c08b72c"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "f00c6e7edfac65b728102b661ec41a60"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "cd05a307754753ba713db1587e4a27b6"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "2b2aca4a4d13eaa36ef658961a5d2847"
  },
  {
    "url": "software/index.html",
    "revision": "6f5c230818d5d6bd97b355634bfaf479"
  },
  {
    "url": "test/index.html",
    "revision": "feede127e47d26e7230441374f8d9f63"
  },
  {
    "url": "use cases/index.html",
    "revision": "c9a5d371a1e71d6c276cd076371f99ce"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
