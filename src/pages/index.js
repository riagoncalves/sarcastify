import Layout from '../components/layout';

String.prototype.sarcastic = function() {
  return [...this]
    .map((char, i) => char[`to${i % 2 ? "Upper" : "Lower"}Case`]())
    .join("");
};

if (typeof window !== `undefined`) {
  function copyToClipboard(value) {
    let tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  
  let btn = document.querySelector("button"),
    input = document.querySelector("input"),
    result = document.querySelector("p");
  
  input.addEventListener("input", () => {
    result.innerText = input.value.sarcastic();
  });
  
  btn.addEventListener("click", () => {
    copyToClipboard(result.innerText);
  });
}

const Index = () => (
  <Layout>
    <h1>Sarcastify | Meme Factory</h1>
    <h2>Sarcastify</h2>
    <input type="text" placeholder="Write anything"></input>
    <button>Copy</button>
    <p>wRiTe aNyThInG</p>
  </Layout>
);

export default Index;