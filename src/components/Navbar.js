import React from 'react'

export default function Navbar() {
  return (
    <>
<ul class="flex justify-between p-1.5 bg-slate-700 background-anime border-b-2 border-white rounded-xl">
  <li class="mr-3">
    <img src="https://i.postimg.cc/k5gv3KVq/raog-1.png" alt="Instagram" class="w-6/12"/>
  </li>
  <li class="mr-3">
    <h1 class="text-5xl font-extrabold cursor-default bg-clip-text " href="#">RaOG</h1>
  </li>
  <li class="mr-3">
    <a href='https://discord.gg/wbnQSqwW' target="_blank">
  <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/62595384f934b806f37f4956_145dc557845548a36a82337912ca3ac5.svg" width = "55" height = "40" loading="lazy" alt="Discord"/>  
  </a>
  </li>

</ul>
    </>
  )
}
