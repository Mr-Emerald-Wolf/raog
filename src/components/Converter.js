import React, {useRef} from 'react';


export default function Converter() {
  const textAreaRef = useRef(null);
  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
  };
  return (
    <>
    <div class="p-3 flex justify-center">
    <p class="text-4xl hover:font-bold cursor-cell duration-300 text-center">Code your Markdown text and convert it to HTML to contribute to RaOG Website!</p>
    </div>
    <div class="flex justify-center">
    <div class="flex markdowninput">
    <center>Markdown Converter</center>
    <div class="flex flex-row justify-between">
    <div class="flex flex-row">
    <button onClick={copyToClipboard} class="flex text-black font-bold py-2 px-4">
  Copy
</button>
    <button class="flex text-black font-bold py-2 px-4">
  Download
</button>
</div>
<button class="flex text-bg-slate-300 font-bold py-2 px-4 border-solid border rounded-lg border-sky-500 bg-sky-500 hover:border-sky-700">
  Preview
</button>
</div>
  <textarea class="textarea selection:bg-sky-500 selection:text-cyan-100"       
      rows="20"
      cols="150"
      placeholder='#Write your Markdown text here!'
      ref={textAreaRef}
      ></textarea></div>

      </div>

    </>
    
  )
}
